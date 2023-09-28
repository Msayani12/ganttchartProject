/**
 * Created by soura on 2023-08-31.
 */

public with sharing class WpDependencyQueueableHelper extends GanttUtils implements Queueable {
    public GanttObject ganttData;
    public String ganttJsonData;

    public WpDependencyQueueableHelper(String jsonData){
        ganttJsonData = jsonData;
        ganttData = GanttObject.parse(jsonData);
        System.debug('Dependencies =>'+ganttData.dependencies);
    }
    public void execute(QueueableContext param1) {

        System.enqueueJob(new WpAssignmentQueueableHelper(ganttJsonData));
    }
}