/**
 * Created by SOURAV on 5/30/2023.
 */

import {LightningElement, api} from 'lwc';

//Salesforce Module for load css and js from external library
import {loadStyle, loadScript} from "lightning/platformResourceLoader";

//DHTMLX Gantt Chart Library
import ganttResource from "@salesforce/resourceUrl/gantt_230523";

export default class GanttChartVer2 extends LightningElement {

    // If Implemented on the Record Page [Example: Project Record] we can use recordId
    @api recordId;
    //Initialize Gantt Chart
    ganttInitialized = false;
    ganttDataset;
    ganttZoomConfig = {};
    isCriticalPath = false;
    selectedScaleValue = 'month';
    get options() {
        return [
            { label: 'Year', value: 'year' },
            { label: 'Quarter', value: 'quarter' },
            { label: 'Month', value: 'month' },
            { label: 'Week', value: 'week' },
            { label: 'Day', value: 'day' },
        ];
    }
    connectedCallback() {
        this.ganttInitialized = true;
        Promise.all([
            loadScript(this, ganttResource + "/codebase/dhtmlxgantt.js"),
            loadStyle(this, ganttResource + "/codebase/dhtmlxgantt.css")
        ]).then(() => {
            console.log("Successfully loaded with Gantt Library");
            this.initializeGanttChart();
        })
    }

    initializeGanttChart() {
        try {
            const mainContainer = this.template.querySelector('.gantt-container');

            mainContainer.style.height = "650px";
            //let gantt = window.Gantt.getGanttInstance();
            gantt.clearAll();

            // Initialize the Gantt Chart
            gantt.plugins({
                auto_scheduling: true,
                critical_path: true,
                tooltip: true
            });
            gantt.templates.parse_date = date => new Date(date);
            gantt.templates.format_date = date => date.toISOString();
            //gantt.config.grid_width = 0;
            gantt.attachEvent("onGanttReady", function(){
                let tooltips = gantt.ext.tooltips;
                tooltips.tooltip.setViewport(gantt.$task_data);
            });

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

            gantt.config.work_time = true;

            /*if (this.isCriticalPath) {
                gantt.config.highlight_critical_path = this.isCriticalPath;
            }
            else {
                gantt.config.highlight_critical_path = this.isCriticalPath;
            }*/
            //gantt.config.highlight_critical_path = true;
            gantt.config.auto_scheduling = true;
            gantt.config.auto_scheduling_strict = true;
            gantt.config.auto_scheduling_compatibility = true;
            //gantt.config.highlight_critical_path = true;

            gantt.config.date_format = "%d-%m-%Y";
            gantt.ext.zoom.init(this.zoomConfiguration());
            gantt.ext.zoom.setLevel("month");
            /*gantt.config.scales = [
                {unit: "day", step: 1, format: "%d"},
                {unit: "month", step: 1, format: "%F, %Y"},
                {unit: "year", step: 1, format: "%Y"}
            ];*/

            gantt.config.min_column_width = 80;
            gantt.templates.progress_text = function (start, end, task) {
                return "<span style='text-align:left;'>" + Math.round(task.progress * 100) + "% </span>";
            };

            gantt.config.row_height = 22;

            //gantt.config.static_background = true;



            gantt.init(mainContainer);

            // Generate dataset with 1000 tasks and dependencies

            // Parse the dataset to populate the Gantt Chart
                /*this.generateData(1000).then(() => {
                    gantt.parse(this.ganttDataset);
                }).catch(e => {
                    console.error("Error on generate data method",e.message);
                });*/
            gantt.parse(this.staticData());
        } catch (e) {
            console.log("Error on Initialize method ",e.message);
        }

    }

    async generateData(dataVolume) {
        const dataset = {
            data: [],
            links: []
        };
        for (let i = 1; i <= dataVolume; i++) {
            const taskId = i;
            const taskText = `Task ${i}`;
            const startDate = new Date(2023, 0, 1);
            startDate.setDate(startDate.getDate() + i);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 5) + 1);

            const task = {
                id: taskId,
                text: taskText,
                start_date: startDate,
                duration: Math.floor(Math.random() * 5) + 1,
                progress: Math.random(),
            };

            dataset.data.push(task);

            if (i > 1) {
                const predecessorId = Math.floor((Math.random()*i)+2);
                const link = {
                    id: i,
                    source: predecessorId,
                    target: taskId,
                    type: '0'
                };

                dataset.links.push(link);
            }
        }
        this.ganttDataset = dataset;
    }

    zoomInFunction() {
        gantt.ext.zoom.zoomOut();
    }

    zoomOutFunction() {
        gantt.ext.zoom.zoomIn();
    }

    zoomConfiguration() {
        let zoomConfig = {
            levels: [
                {
                    name:"day",
                    scale_height: 27,
                    min_column_width:80,
                    scales:[
                        {unit: "day", step: 1, format: "%d %M"}
                    ]
                },
                {
                    name:"week",
                    scale_height: 50,
                    min_column_width:50,
                    scales:[
                        {unit: "week", step: 1, format: function (date) {
                                let dateToStr = gantt.date.date_to_str("%d %M");
                                let endDate = gantt.date.add(date, -6, "day");
                                let weekNum = gantt.date.date_to_str("%W")(date);
                                return "#" + weekNum + ", " + dateToStr(date) + " - " + dateToStr(endDate);
                            }},
                        {unit: "day", step: 1, format: "%j %D"}
                    ]
                },
                {
                    name:"month",
                    scale_height: 50,
                    min_column_width:120,
                    scales:[
                        {unit: "month", format: "%F, %Y"},
                        {unit: "week", format: "Week #%W"}
                    ]
                },
                {
                    name:"quarter",
                    height: 50,
                    min_column_width:90,
                    scales:[
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
                    name:"year",
                    scale_height: 50,
                    min_column_width: 30,
                    scales:[
                        {unit: "year", step: 1, format: "%Y"}
                    ]
                }
            ]
        };
        return zoomConfig;
    }

    /*hourRangeFormat(step) {
        return function (date) {
            let intervalEnd = new Date(gantt.date.add(date, step, "hour") - 1)
            return hourToStr(date) + " - " + hourToStr(intervalEnd);
        };
    }

    hourToStr() {
        return gantt.date.date_to_str("%H:%i");
    }*/
    destroyChart(){
        gantt.destructor();
    }
    constructChart(){
        try{
            const mainContainer = this.template.querySelector('.gantt-container');
            gantt.init(mainContainer);
            gantt.parse(this.ganttDataset);
        }
        catch(e){
            console.error("Error on Constructor Method ",e.message);
        }
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
    staticData(){

        const dataset = {
            data: [
                {id: 1, text: "Office itinerancy", open: true, type: "project"},
                {id: 2, text: "Office facing", start_date: this.changeStartDate(1), duration: "20",parent:"1"},
                {id: 3, text: "Furniture installation", start_date: this.changeStartDate(2), duration: "5",parent:"1"},
                {id: 4, text: "The employee relocation", start_date: this.changeStartDate(3), duration: "15",parent:"1"},
                {id: 5, text: "Interior office", start_date: this.changeStartDate(4), duration: "15",parent:"1"},
                {id: 6, text: "Air conditioners installation", start_date: this.changeStartDate(5), duration: "2"},
                {id: 7, text: "Workplaces preparation", start_date: this.changeStartDate(6), duration: "2",parent:"1"},
                {id: 8, text: "Preparing workplaces for us", start_date: this.changeStartDate(7), duration: "10",parent:"1"},
                {id: 9, text: "Workplaces importation", start_date: this.changeStartDate(8), duration: "1",parent:"1"},
                {id: 10, text: "Analysis", open: true, type: "project"},
                {id: 11, text: "Documentation creation", start_date: this.changeStartDate(9), duration: "14",parent:"10"},
                {id: 12, text: "Software design", start_date: this.changeStartDate(1), duration: "10",parent:"10"},
                {id: 13, text: "Interface setup", start_date: this.changeStartDate(10), duration: "1",parent:"10"},
                {id: 14, text: "Development", open: true, type: "project"},
                {id: 15, text: "Develop System", start_date: this.changeStartDate(11), duration: "5",parent:"14"},
                {id: 16, text: "Integrate System", start_date: this.changeStartDate(12), duration: "15",parent:"14"},
                {id: 17, text: "Test", start_date: this.changeStartDate(13), duration: "1",parent:"14"}
            ],
            links: [
                {id: "2.3", source: 2, target: 3, type: '0'}
            ]
            /*links: [
                {id: "A", source: "3", target: "4", type: "0"},
                {id: "B", source: "3", target: "5", type: "0"},
                {id: "C", source: "2", target: "6", type: "0"},
                {id: "D", source: "4", target: "6", type: "0"},
                {id: "E", source: "5", target: "6", type: "0"},
                {id: "F", source: "6", target: "7", type: "0"},
                {id: "G", source: "7", target: "9", type: "0"},
                {id: "H", source: "8", target: "9", type: "0"},
                {id: "I", source: "9", target: "11", type: "0"},//Mod
                {id: "J", source: "9", target: "11", type: "0"},
                {id: "K", source: "9", target: "12", type: "0"},
                {id: "L", source: "11", target: "13", type: "0"},
                {id: "M", source: "12", target: "13", type: "0"},
                {id: "N", source: "13", target: "14", type: "0"},
                {id: "O", source: "13", target: "15", type: "0"},
                {id: "P", source: "15", target: "17", type: "0"},
                {id: "Q", source: "16", target: "17", type: "0"}
            ]*/
        };
        return dataset;
    }
    changeStartDate(i){
        const startDate = new Date(2023, 0, 1);
        startDate.setDate(startDate.getDate() + i);
        return startDate;
    }
    onChangeScale(event){
        this.selectedScaleValue = event.detail.value;

        gantt.ext.zoom.setLevel(this.selectedScaleValue);
    }
}