/**
 * Created by soura on 8/1/2023.
 */

import {NavigationMixin} from "lightning/navigation";

// export {calenderConfig, projectConfig, columnConfig, subGridConfig, featureConfig}


class GanttConfigHelper {

}


// const calenderConfig = {
//     "rows" : [
//         {
//             "id": "general",
//             "name": "General",
//             "intervals": [
//                 {
//                     "recurrentStartDate": "on Sat at 0:00",
//                     "recurrentEndDate": "on Mon at 0:00",
//                     "isWorking": false
//                 }
//             ],
//             "expanded": true
//         }
//     ]
// };
//
// const projectConfig = {
//     "calendar"  : "general",
//     "startDate" : "2023-07-24"
// };
//
// const columnConfig = [
//     { type: "rownumber" },
//     { type: "name", width: 250 },
//     { type: "startdate" },
//     { type: "duration" },
//     { type: "resourceassignment", width: 120 },
//     { type: "percentdone", showCircle: true, width: 70 },
//     {
//         type: "predecessor",
//         width: 112
//     },
//     {
//         type: "successor",
//         width: 112
//     },
//     { type: "schedulingmodecolumn" },
//     //{ type: "statuscolumn" },
//     {
//         type: "date",
//         text: "Deadline",
//         field: "deadline"
//     },
//     { type: "addnew" },
//     {
//         type    : 'action',
//         text    : 'Actions',
//         width   : 100,
//         align   : 'center',
//         region  : 'right',
//         actions: [
//             {
//                 cls: 'b-fa b-fa-fw b-fa-cog',
//                 tooltip: 'Redirect to Record',
//                 onClick: ({record}) => {
//                     console.log(record.id)
//                     this[NavigationMixin.GenerateUrl]({
//                         type: "standard__recordPage",
//                         attributes: {
//                             objectApiName: "PlatinumPMO__Work_Package__c",
//                             actionName: "view",
//                             recordId: record.id
//                         }
//                     }).then(generatedUrl=>{
//                         window.open(generatedUrl, "_blank");
//                     });
//                 }
//             }
//         ]
//     }
// ];
//
// const subGridConfig = {
//     locked: {
//         flex: 4
//     },
//     normal: {
//         flex: 8
//     }
// };
//
// const featureConfig = {
//     rollups: {
//         disabled: true
//     },
//     baselines: {
//         disabled: true
//     },
//     progressLine: {
//         disabled: true
//     },
//     filter: true,
//     dependencyEdit: true,
//     timeRanges: {
//         showCurrentTimeLine: true
//     },
//     labels: {
//         before: {
//             field  : 'name',
//             editor : {
//                 type : 'textfield'
//             }
//         }
//     }
// };