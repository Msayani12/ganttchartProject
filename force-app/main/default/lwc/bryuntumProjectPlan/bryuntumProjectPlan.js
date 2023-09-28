/**
 * Created by SOURAV on 7/20/2023.
 */

import {LightningElement, api} from 'lwc';
import {loadScript, loadStyle} from "lightning/platformResourceLoader";
import { NavigationMixin } from 'lightning/navigation';

import { fetchWorkPackages } from "./data/planData";
import gantt_chart from "@salesforce/resourceUrl/bryntum_gantt";

import GanttToolbarMixin from "./lib/ganttToolbarConfig";


export default class BryuntumProjectPlan extends NavigationMixin(LightningElement) {
    @api recordId;
    projectPlanData = {};
    changeData = {};
    loaded = false;
    constructor() {
        super();
    }

    calenderConfig = {
        "rows" : [
            {
                "id": "general",
                "name": "General",
                "intervals" : [
                    {
                        "id"                 : 123,
                        "recurrentStartDate" : "every weekday at 12:00",
                        "recurrentEndDate"   : "every weekday at 13:00",
                        "isWorking"          : false
                    },
                    {
                        "id"                 : 456,
                        "recurrentStartDate" : "every weekday at 17:00",
                        "recurrentEndDate"   : "every weekday at 08:00",
                        "isWorking"          : false
                    }
                ],
                "expanded": true
            }
        ]
    };

    projectConfig = {
        "calendar"  : "general"
    };

    columnConfig = [
        { type: "rownumber" },
        {
            type    : 'action',
            text    : 'Link',
            width   : 60,
            align   : 'center',
            actions: [
                {
                    cls: 'b-fa b-fa-fw b-fa-solid b-fa-arrow-up-right-from-square',
                    tooltip: 'Link',
                    onClick: ({record}) => {
                        console.log(record.id)
                        this[NavigationMixin.GenerateUrl]({
                            type: "standard__recordPage",
                            attributes: {
                                objectApiName: "PlatinumPMO__Work_Package__c",
                                actionName: "view",
                                recordId: record.id
                            }
                        }).then(generatedUrl=>{
                            window.open(generatedUrl, "_blank");
                        });
                    }
                }
            ]
        },
        { type: "name", width: 250 },
        {
            text         : 'Scheduled',
            collapsible  : true,
            collapseMode : 'toggleAll',
            collapsed    : true,
            children     : [
                { type : 'startdate' }, { type : 'duration' }, { type : 'enddate' }, // Column that is shown when the header is collapsed
                {
                    field      : 'startDate',
                    hidden     : true,
                    text       : 'Dates',
                    width      : 140,
                    editor     : false,
                    htmlEncode : false,
                    renderer({ record }) {
                        return `
                            <div class="calendar">
                                <div class="date">${bryntum.gantt.DateHelper.format(record.startDate, 'D')}</div>
                                <div class="month">${bryntum.gantt.DateHelper.format(record.startDate, 'MMM')}</div>
                            </div>
                            ${record.duration ?? 0} ${bryntum.gantt.DateHelper.getLocalizedNameOfUnit(record.durationUnit, record.duration !== 1)}
                        `;
                    }
                }
            ]
        },
        { type: "resourceassignment", width: 120 },
        { type: "percentdone", showCircle: true, width: 70 },
        {
            text        : 'Dependencies',
            collapsible  : true,
            children    : [
                {
                    type  : 'predecessor',
                    width : 130
                }, {
                    type  : 'successor',
                    width : 130
                }
            ]
        },
        { type: "schedulingmodecolumn" },
        //{ type: "statuscolumn" },
        {
            type: "date",
            text: "Deadline",
            field: "deadline"
        },
        { type: "addnew" }
    ];

    subGridConfig = {
        locked: {
            flex: 5
        },
        normal: {
            flex: 7
        }
    };

    featureConfig = {
        parentArea : true,
        rollups: {
            disabled : true
        },
        baselines: {
            disabled: true
        },
        progressLine: {
            disabled: true
        },
        filter: true,
        dependencyEdit: true,
        timeRanges: {
            showCurrentTimeLine: true
        },
        labels: {
            before: {
                field  : 'name',
                editor : {
                    type : 'textfield'
                }
            }
        }
    };
    start;
    connectedCallback() {
        this.start = Date.now();
        Promise.all([
            loadScript(this, gantt_chart + "/gantt.lwc.module.js"),
            loadStyle(this, gantt_chart + "/gantt.stockholm.css")
        ]).then(()=>{
            console.log("Under Success Promise")
            if(this.recordId){
                this.fetchDataset().then(() =>{
                    console.log("Success")
                    this.createGantt();
                });
            }
        }).catch((error)=>{
            console.error("Error on Promise : "+error.message);
        });
    }
    async fetchDataset(){
        console.log("Under fetch Dataset Invocation");
        console.log("On Rendered Callback : "+this.recordId);
        console.log("After Timeout");
        const data = await fetchWorkPackages(this.recordId);

        this.projectPlanData = JSON.parse(data);

    }
    createGantt(){

        try {
            const GanttToolbar = GanttToolbarMixin(bryntum.gantt.Toolbar);
            const targetElement = this.template.querySelector(".gantt-container");
            console.log("Under Create gantt");
            const ganttObj = new bryntum.gantt.Gantt({
                appendTo: targetElement,
                tbar: new GanttToolbar(),
                //endDate: "2023-08-12",
                dependencyIdField: "sequenceNumber",
                columns: this.columnConfig,
                subGridConfigs: this.subGridConfig,
                columnLines: false,
                features: this.featureConfig
            });
            console.log(JSON.stringify(this.projectPlanData));
            ganttObj.rowHeight = 35;
            /*ganttObj.project?.destroy();
            ganttObj.barMargin = 7;*/
            ganttObj.project = new bryntum.gantt.ProjectModel({
                calendar: this.projectConfig.calendar,
                tasksData: this.projectPlanData.datasets,
                resourcesData: this.projectPlanData.resources,
                assignmentsData: this.projectPlanData.allocations,
                dependenciesData: this.projectPlanData.links,
                calendarsData: this.calenderConfig.rows,
                taskStore       : { useRawData : true },
                dependencyStore : { useRawData : true }
            });
            ganttObj.project.on('dataReady', ()=>{
                console.log(JSON.stringify(ganttObj.project.changes));
                this.changeData = ganttObj.project.changes;
            });
            console.log("After Setting project value on gantt");
            console.log("End Constructing gantt");
            this.loaded = true;
            this.calcExecutionTime();
        }
        catch (err){
            console.error("On Create Gantt : "+err);
        }
    }
    calcExecutionTime(){
        let timeTaken = Date.now() - this.start;
        console.log("Total time taken : " + timeTaken + " milliseconds");
    }
}