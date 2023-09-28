trigger WorkPackageTriggerGantt on PlatinumPMO__Work_Package__c (after insert, after update, before delete, before insert , before update) {
    /*if(trigger.isAfter && trigger.isInsert){
        if(ganttRecursiveControll.wpGanttSyncFlag){
            WorkPackageTriggerGanttHelper.createGanttTask(trigger.new);
        }
    }
    if(trigger.isAfter && trigger.isUpdate){
        if(ganttRecursiveControll.wpGanttSyncFlag){
            WorkPackageTriggerGanttHelper.updateGanttTask(trigger.new, trigger.newMap, trigger.oldMap);
        }
    }
    if(trigger.isBefore && trigger.isDelete){
        WorkPackageTriggerGanttHelper.deleteGanttTask(trigger.oldMap);
    }*/

    if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)){
        for(PlatinumPMO__Work_Package__c workPackage : Trigger.new){
            workPackage.Row_Number__c = workPackage.Row_Number__c != null ? String.valueOf(workPackage.Row_Number__c).leftPad(4, '0') : '';
        }
    }

}