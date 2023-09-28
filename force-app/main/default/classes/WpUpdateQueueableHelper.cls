/**
 * Created by soura on 2023-08-31.
 */

public with sharing class WpUpdateQueueableHelper extends GanttUtils implements Queueable {
    public GanttObject ganttData;
    public String ganttJsonData;

    public WpUpdateQueueableHelper(String jsonData){
        ganttJsonData = jsonData;
        ganttData = GanttObject.parse(jsonData);
        System.debug('updated =>'+ganttData.tasks.updated);
    }
    public void execute(QueueableContext param1) {

        List<SObject> sObjects = new List<SObject>();

        List<GanttObject.Updated> updatedWorkPackages = ganttData.tasks.updated;

        for(GanttObject.Updated updatedRecord : updatedWorkPackages){
            System.debug('Under Update Record Iteration');
            String sObjectType = getSobjectType(Id.valueOf(updatedRecord.id));
            if(sObjectType == 'PlatinumPMO__Work_Package__c' || sObjectType == 'Work_Package__c'){
                Integer divisibleBy = 8;


                SObject wpRecord = new PlatinumPMO__Work_Package__c();
                wpRecord.put('Id', updatedRecord.id);
                if(updatedRecord.startDate != null){
                    wpRecord.put('PPMO2__Planned_Start_Date__c', calcDateTimeFromString(updatedRecord.startDate));
                }
                if(updatedRecord.endDate != null){
                    wpRecord.put('PPMO2__Planned_End_Date__c', calcDateTimeFromString(updatedRecord.endDate));
                }
                System.debug(updatedRecord.durationUnit);
                if(updatedRecord.durationUnit != null){
                    divisibleBy = updatedRecord.durationUnit == 'day' ? 8 : updatedRecord.durationUnit == 'minute' ? 60 : 1;
                }
                if(updatedRecord.duration != null){
                    wpRecord.put('PlatinumPMO__Estimated_Effort_in_Hours__c', updatedRecord.duration/divisibleBy);
                }
                System.debug(wpRecord.get('PlatinumPMO__Estimated_Effort_in_Hours__c'));
                sObjects.add(wpRecord);
            }
        }

        List<Database.SaveResult> updatedResult = Database.update(sObjects);

        for(Database.SaveResult sr : updatedResult){
            if(sr.isSuccess()){
                // Do Something
                System.debug('Success for record : '+sr.getId());
            }
            else{
                for(Database.Error err : sr.getErrors()){
                    // Do Something
                    System.debug(err.getMessage());
                }
            }
        }

        System.enqueueJob(new WpDeleteQueueableHelper(ganttJsonData));
    }
}