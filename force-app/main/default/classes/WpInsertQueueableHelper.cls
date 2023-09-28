/**
 * Created by Sourav on 2023-08-31.
 */

public with sharing class WpInsertQueueableHelper extends GanttUtils implements Queueable {
    public GanttObject ganttData;
    public String ganttJsonData;
    public WpInsertQueueableHelper(String jsonData){
        ganttJsonData = jsonData;
        ganttData = GanttObject.parse(jsonData);
        System.debug('added =>'+ganttData.tasks.added);

    }
    public void execute(QueueableContext param1) {

        System.enqueueJob(new WpUpdateQueueableHelper(ganttJsonData));
    }
}