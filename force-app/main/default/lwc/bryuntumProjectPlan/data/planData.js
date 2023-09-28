/**
 * Created by SOURAV on 7/20/2023.
 */

import fetchWorkPackageData_server from '@salesforce/apex/ProjectGanttBryntumHelper.fetchProjectPlanData';

export {fetchWorkPackages}

let mergedData = {
    "datasets": [],
    "resources": [],
    "allocations": [],
    "links": []
};



async function fetchWorkPackages(recordId) {
    console.log(recordId);
    await fetchWorkPackageData_server({recordId: recordId}).then((result) => {
        mergedData.datasets.splice(0, mergedData.datasets.length);
        mergedData.resources.splice(0, mergedData.resources.length);
        mergedData.allocations.splice(0, mergedData.allocations.length);
        mergedData.links.splice(0, mergedData.links.length);

        result.parentRowSets.forEach((row) => {
            mergedData.datasets.push({
                "id": row.recordId,
                "name": row.recordName,
                "expanded": row.expanded,
                "percentDone": row.percentDone,
                "children": row.children
            });
        });
        result.resources.forEach((row) => {
            mergedData.resources.push({
                "id": row.userId,
                "name": row.userName,
                "city": row.city,
                "calender": "general",
                "image": row.imageShortUrl
            });
        });

        result.allocations.forEach((row) => {
            mergedData.allocations.push({
                "id": row.id,
                "event": row.parentId,
                "resource": row.userId
            });
        });

        result.dependencies.forEach((row) => {
            mergedData.links.push({
                "id": row.id,
                "fromTask": row.fromTask,
                "toTask": row.toTask,
                "lag": row.lag
            });
        });

    }).catch((error) => {
        console.error("Error on Fetch Work Packages : " + error);
    });
    return JSON.stringify(mergedData);
}