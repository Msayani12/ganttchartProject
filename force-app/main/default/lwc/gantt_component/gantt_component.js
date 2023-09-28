/* globals bryntum : true */
import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import gantt_chart from "@salesforce/resourceUrl/bryntum_gantt";
import GanttToolbarMixin from "./lib/GanttToolbar";
import data from './data/launch-saas';
import JSONdata from '@salesforce/resourceUrl/ganttChartData';

export default class Gantt_component extends LightningElement {
    alldata;
    renderedCallback() {
        
        if (this.bryntumInitialized) {
            return;
        }
        this.bryntumInitialized = true;

        Promise.all([
            loadScript(this, gantt_chart + "/gantt.lwc.module.js"),
            loadStyle(this, gantt_chart + "/gantt.stockholm.css")
        ])
            .then(() => {
                
                fetch(JSONdata)
                .then((response) => response.json())
                .then((data) => {
                    this.alldata = data;
                    this.createGantt();
                    }
                )   
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Error loading Bryntum Gantt",
                        message: error,
                        variant: "error"
                    })
                );
            });
    }


    createGantt() {
        const GanttToolbar = GanttToolbarMixin(bryntum.gantt.Toolbar);

        const project = new bryntum.gantt.ProjectModel({
            calendar: data.project.calendar,
            tasksData: this.alldata.datasets,
            resourcesData: this.alldata.resources,
            assignmentsData: this.alldata.allocations,
            dependenciesData: this.alldata.links,
            calendarsData: data.calendars.rows
        });

        const gantt = new bryntum.gantt.Gantt({
            project,
            appendTo: this.template.querySelector(".container"),

            tbar: new GanttToolbar(),

            dependencyIdField: "sequenceNumber",
            columns: [
                { type: "wbs" },
                { type: "rownumber" },
                { type: "name", width: 250 },
                { type: "startdate" },
                { type: "duration" },
                { type: "resourceassignment", width: 120 },
                { type: "percentdone", showCircle: true, width: 70 },
                {
                    type: "predecessor",
                    width: 112
                },
                {
                    type: "successor",
                    width: 112
                },
                { type: "schedulingmodecolumn" },
                { type: "calendar" },
                { type: "constrainttype" },
                { type: "constraintdate" },
                //{ type: "statuscolumn" },
                {
                    type: "date",
                    text: "Deadline",
                    field: "deadline"
                },
                { type: "addnew" }
            ],

            subGridConfigs: {
                locked: {
                    flex: 3
                },
                normal: {
                    flex: 4
                }
            },

            columnLines: false,

            features: {
                rollups: {
                    disabled: true
                },
                baselines: {
                    disabled: true
                },
                progressLine: {
                    disabled: true,
                    statusDate: new Date(2019, 0, 25)
                },
                filter: true,
                dependencyEdit: true,
                timeRanges: {
                    showCurrentTimeLine: true
                },
                labels: {
                    left: {
                        field: "name",
                        editor: {
                            type: "textfield"
                        }
                    }
                }
            }
        });

        project.commitAsync().then(() => {
            // console.timeEnd("load data");
            const stm = gantt.project.stm;

            stm.enable();
            stm.autoRecord = true;

            // let's track scheduling conflicts happened
            project.on("schedulingconflict", context => {
                // show notification to user
                bryntum.gantt.Toast.show(
                    "Scheduling conflict has happened ..recent changes were reverted"
                );
                // as the conflict resolution approach let's simply cancel the changes
                context.continueWithResolutionResult(
                    bryntum.gantt.EffectResolutionResult.Cancel
                );
            });
        });
    }
}