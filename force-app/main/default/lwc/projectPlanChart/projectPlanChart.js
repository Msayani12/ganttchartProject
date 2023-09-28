/**
 * Created by SOURAV on 6/22/2023.
 */

import {api, LightningElement} from 'lwc';

//Salesforce Module for load css and js from external library
import {loadScript, loadStyle} from "lightning/platformResourceLoader";
import { NavigationMixin } from 'lightning/navigation';


import fetchProjectPlan from '@salesforce/apex/ProjectGanttChartHelper.fetchWorkPackage';
import fetchResources from '@salesforce/apex/ProjectGanttChartHelper.allResources';

//DHTMLX Gantt Chart Library
import ganttResource from "@salesforce/resourceUrl/gantt_230523";

export default class ProjectPlanChart extends LightningElement {
    @api recordId;
    isCriticalPath = false;
    selectedScaleValue = 'day';
    baseUrl = '';
    //Not Required
    oldParent;
    resources = [];
    get options() {
        return [
            { label: 'Year', value: 'year' },
            { label: 'Quarter', value: 'quarter' },
            { label: 'Month', value: 'month' },
            { label: 'Week', value: 'week' },
            { label: 'Day', value: 'day' },
        ];
    }

    renderedCallback() {
        this.ganttInitialized = true;
        Promise.all([
            loadScript(this, ganttResource + "/codebase/dhtmlxgantt.js"),
            loadStyle(this, ganttResource + "/codebase/dhtmlxgantt.css"),
            //loadStyle(this, ganttResource + "/codebase/skins/dhtmlxgantt_meadow.css")
        ]).then(() => {
            console.log("Successfully loaded with Gantt Library");
            this.asyncFetchData();
        }).catch((err)=>{
            console.error('On rendered Callback : ',err.message);
        })
    }
    async asyncFetchData(){
        try{
            console.warn('Fetch Data Started');
            await this.fetchProjectPlanFromServer();
            console.log('Fetch Data Completed')
        }
        catch(err){
            console.error('On Async Fetch Data : ', err.message);
        }
    }
    async asyncFetchResources(){
        try{
            console.warn('Fetch Resource Started');
            fetchResources({recordId : this.recordId}).then(result =>{
                result.forEach((data)=>{
                    this.resources.push({id : data.id, text : data.label,imageUrl : data.imageUrl });
                });
            }).catch((error)=>{
                console.error('On Async fetch Resources : ', error.message);
            });
            console.log('fetch resources completed');
        }
        catch (err){
            console.error('On Async fetch Resources : ', err.message);
        }
    }
    initializeGanttChart(dataset) {
        try{
            console.log("Under Initialize Gantt Chart");
            const mainContainer = this.template.querySelector('.gantt-container');
            mainContainer.style.height = "70vh";

            //Clear all existing data
            gantt.clearAll();

            gantt.plugins({
                auto_scheduling: true,
                critical_path: true,
                tooltip: true,
                export_api: true,
            });

            // Events
            gantt.attachEvent("onGanttReady", function(){
                let tooltips = gantt.ext.tooltips;
                tooltips.tooltip.setViewport(gantt.$task_data);
            });
            // Templates
            gantt.templates.parse_date = date => new Date(date);
            gantt.templates.format_date = date => date.toISOString();
            gantt.templates.scale_cell_class =  (date) => {
                let retVal = "";
                if (!gantt.isWorkTime(date)) {
                    retVal = "weekend";
                }
                return retVal;
            };
            gantt.templates.timeline_cell_class =  (item, date) => {
                let retVal = "";
                if (!gantt.isWorkTime(date)) {
                    retVal = "weekend";
                }
                return retVal;
            };
            gantt.templates.progress_text = function (start, end, task) {
                return "<span style='text-align:left;'>" + Math.round(task.progress * 100) + "% </span>";
            };

            //Configs
            gantt.config.columns = [
                { name: "id", label: "Row #", width: 40, resize: false, align: "center", template: function (task){
                        return isNaN(task.id)? '': task.id;
                    }
                },
                { name: "text", label: "Work Package Name", width: 100, resize: true, tree: true },
                { name: "start_date", label: "Start time", resize: true, width: 80 },
                { name: "end_date", label: "End date", align: "center", resize: true, width: 80 },
                { name: "duration", label: "Duration", resize: true, width: 50 },
                {
                    name: "progress", label: "Progress", width: 50, resize: false, align: "center", template: function (task) {
                        return Math.round(task.progress * 100) + "%"
                    }
                },
                { name: "resources", label: "Responsible", width: 100, resize: true, template: function (task){
                        const resourceNames = task.resources.map(resource => resource.text).join(', ');
                        return `<div>${resourceNames}</div>`;
                    }
                },
                { name: 'predecessor', label: 'Predecessor',resize: true, template: this.predecessorColumnTemplate },
                { name: 'successor', label: 'Successor',resize: true , template: this.successorColumnTemplate },
                //{ name: "add", label: "", width: 44 } //"Not Required" to add Work Packages on Task Level
            ];
            gantt.config.work_time = true;
            gantt.config.auto_scheduling = true;
            gantt.config.auto_scheduling_strict = true;
            gantt.config.auto_scheduling_compatibility = true;
            gantt.config.date_format = "%d-%m-%Y";
            gantt.config.min_column_width = 80;
            gantt.config.row_height = 22;
            gantt.config.duration_unit = "hour";
            gantt.config.resources = this.resources;
            gantt.config.resource_property = 'resources';

            //Extensions
            gantt.ext.zoom.init(this.zoomConfiguration());
            gantt.ext.zoom.setLevel("day");

            // Initialize Gantt Chart
            gantt.init(mainContainer);

            //Parse Data into Gantt Chart
            if(dataset){
                gantt.parse(dataset);
            }
            gantt.attachEvent("onTaskClick", function (id) {
                console.log(id);
                console.log("record page")
                this.navigateToRecordPage(id, 'PlatinumPMO__Work_Package__c');
            });
        }
        catch (e){
            console.error('Under Initialize data : ',e.message);
        }
    }
    async fetchProjectPlanFromServer(){
        for(const key in this.ganttDataset){
            console.table(key);
        }
        console.log("Under Fetch Dataset : ");
        const dataset = {
            tasks : [],
            links : []
        };
        fetchProjectPlan({recordId : this.recordId}).then((data)=>{
            data.forEach((row)=>{
                if(row.rowType === 'project'){
                    const deliverable = {
                        id: row.recordId,
                        text: row.recordName,
                        open: row.isOpen,
                        type: row.rowType
                    };
                    dataset.tasks.push(deliverable);
                    this.baseUrl = row.baseUrl;
                }
                else{
                    const task = {
                        id: row.recordId,
                        text: row.recordName,
                        start_date: row.startDate,
                        //end_date : row.endDate,
                        duration: row.effortDuration,
                        progress : row.progress,
                        resources: []
                        //parent : row.parentRecordId,
                    };
                    dataset.tasks.push(task);

                    row.dependencies.forEach((d)=>{
                        dataset.links.push({
                                id : d.dependencyId,
                                source : d.sourceId,
                                target : d.targetId,
                                type : d.dependencyType
                            }
                        );
                    });
                    this.baseUrl = row.baseUrl;
                }
            });
            console.log(dataset);
            this.initializeGanttChart(dataset);
        }).catch((err)=>{
            console.error(err.message);
        });
    }
    zoomInFunction() {
        gantt.ext.zoom.zoomOut();
    }

    zoomOutFunction() {
        gantt.ext.zoom.zoomIn();
    }

    enableOrDisableCriticalPath(){
        try{
            this.isCriticalPath = !this.isCriticalPath;
            gantt.config.highlight_critical_path = this.isCriticalPath;
            gantt.render();
        }
        catch(e){
            console.error("Error on Enable/ Disable Critical Path Function ",e.message);
        }
    }

    zoomConfiguration() {
        console.log("Under Zoom Config Dataset : ");

        return {
            levels: [
                {
                    name: "day",
                    scale_height: 27,
                    min_column_width: 80,
                    scales: [
                        {unit: "day", step: 1, format: "%d %M"}
                    ]
                },
                {
                    name: "week",
                    scale_height: 50,
                    min_column_width: 50,
                    scales: [
                        {
                            unit: "week", step: 1, format: function (date) {
                                let dateToStr = gantt.date.date_to_str("%d %M");
                                let endDate = gantt.date.add(date, -6, "day");
                                let weekNum = gantt.date.date_to_str("%W")(date);
                                return "#" + weekNum + ", " + dateToStr(date) + " - " + dateToStr(endDate);
                            }
                        },
                        {unit: "day", step: 1, format: "%j %D"}
                    ]
                },
                {
                    name: "month",
                    scale_height: 50,
                    min_column_width: 120,
                    scales: [
                        {unit: "month", format: "%F, %Y"},
                        {unit: "week", format: "Week #%W"}
                    ]
                },
                {
                    name: "quarter",
                    height: 50,
                    min_column_width: 90,
                    scales: [
                        {unit: "month", step: 1, format: "%M"},
                        {
                            unit: "quarter", step: 1, format: function (date) {
                                let dateToStr = gantt.date.date_to_str("%M");
                                let endDate = gantt.date.add(gantt.date.add(date, 3, "month"), -1, "day");
                                return dateToStr(date) + " - " + dateToStr(endDate);
                            }
                        }
                    ]
                },
                {
                    name: "year",
                    scale_height: 50,
                    min_column_width: 30,
                    scales: [
                        {unit: "year", step: 1, format: "%Y"}
                    ]
                }
            ]
        };
    }
    navigateToRecordPage(recordId, objectApiName) {
        // TODO: Have to Implement Navigation Mixin Function
        console.log("under Navigation Mixing Function");
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                objectApiName: objectApiName,
                actionName: 'view'
            }
        });
    }
    toggleChartView(){
        gantt.config.show_grid = !gantt.config.show_grid;
        gantt.render();
    }
    toggleTableView(){
        gantt.config.show_chart = !gantt.config.show_chart;
        gantt.render();
    }
    exportToPdf(){
        gantt.exportToPDF();
    }
    exportToPng(){
        gantt.exportToPNG();
    }
    predecessorColumnTemplate(task) {
        // Return the content for the Predecessor column
        // Customize the output as needed
        //console.log(JSON.stringify(task));

        return task.$target ? `<span>${task.$target.join(', ')}</span>` : '';
    }

    successorColumnTemplate(task) {
        // Return the content for the Successor column
        // Customize the output as needed
        //console.log(JSON.stringify(task));
        return task.$source ? `<span>${task.$source.join(', ')}</span>` : '';
    }
}