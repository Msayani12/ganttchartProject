/**
 * Created by soura on 2023-08-31.
 */

public with sharing class WpAssignmentQueueableHelper extends GanttUtils implements Queueable {
    public GanttObject ganttData;
    public String ganttJsonData;

    public WpAssignmentQueueableHelper(String jsonData){
        ganttJsonData = jsonData;
        ganttData = GanttObject.parse(jsonData);
        System.debug('Assignments =>'+ganttData.assignments);

    }
    public void execute(QueueableContext param1) {
    }
}