/**
 * Created by soura on 2023-08-31.
 */

public with sharing class WpDeleteQueueableHelper extends GanttUtils implements Queueable {
    public GanttObject ganttData;
    public String ganttJsonData;

    public WpDeleteQueueableHelper(String jsonData){
        ganttJsonData = jsonData;
        ganttData = GanttObject.parse(jsonData);
        System.debug('removed =>'+ganttData.tasks.removed);
    }
    public void execute(QueueableContext param1) {

        System.enqueueJob(new WpDependencyQueueableHelper(ganttJsonData));
    }
}