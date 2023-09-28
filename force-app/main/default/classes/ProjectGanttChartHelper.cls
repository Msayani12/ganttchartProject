/**
 * Created by soura on 6/22/2023.
 */

public with sharing class ProjectGanttChartHelper {
    @AuraEnabled
    public static List<Resources> allResources(String recordId){
        List<Resources> resources = new List<ProjectGanttChartHelper.Resources>();
        Map<Id, User> userMap = new Map<Id, User>();
        List<PlatinumPMO__User_Association__c> userAssociations = new List<PlatinumPMO__User_Association__c>();
        List<PlatinumPMO__Organizational_Other_User__c> otherUsers = new List<PlatinumPMO__Organizational_Other_User__c>();
        Map<Id, User> existingUsers = new Map<Id, User>([SELECT Id, Name, SmallPhotoUrl FROM User WHERE PlatinumPMO__AMIGO_User__c =: true AND IsActive = TRUE]);
        PlatinumPMO__Project__c project = [SELECT Id, Name, PlatinumPMO__Associated_Organization__c FROM PlatinumPMO__Project__c WHERE Id = : recordId WITH SECURITY_ENFORCED ];

        userAssociations = [SELECT Id, Name, PlatinumPMO__User__c FROM PlatinumPMO__User_Association__c WHERE PlatinumPMO__Organization__c =: project.PlatinumPMO__Associated_Organization__c WITH SECURITY_ENFORCED ];
        otherUsers = [SELECT Id, Name, PlatinumPMO__User__c FROM PlatinumPMO__Organizational_Other_User__c WHERE PlatinumPMO__Organization__c =: project.PlatinumPMO__Associated_Organization__c WITH SECURITY_ENFORCED ];

        for(PlatinumPMO__User_Association__c ua : userAssociations){
            if(existingUsers.containsKey(ua.PlatinumPMO__User__c)){
                userMap.put(ua.PlatinumPMO__User__c, existingUsers.get(ua.PlatinumPMO__User__c));
            }
        }
        for(PlatinumPMO__Organizational_Other_User__c oua : otherUsers){
            if(existingUsers.containsKey(oua.PlatinumPMO__User__c)){
                userMap.put(oua.PlatinumPMO__User__c, existingUsers.get(oua.PlatinumPMO__User__c));
            }
        }
        System.debug(JSON.serializePretty(userMap));
        for(Id userId : userMap.keySet()){
            resources.add(new Resources(
                    userId+'',
                    userMap.get(userId).Name+'',
                    userMap.get(userId).SmallPhotoUrl+''
                )
            );
        }
        return resources;
    }
    @AuraEnabled
    public static List<GanttDataset> fetchWorkPackage(String recordId){
        try{
            List<GanttDataset> datasets = new List<ProjectGanttChartHelper.GanttDataset>();
            Map<Id, List<PlatinumPMO__Work_Package__c>> deliverableWorkPackageMap = new Map<Id, List<PlatinumPMO__Work_Package__c>>();
            Map<Id, String> deliverableMap = new Map<Id, String>();
            List<ProjectGanttChartHelper.Links> dependencies = new List<ProjectGanttChartHelper.Links>();
            List<PlatinumPMO__Work_Package__c> workPackages = new List<PlatinumPMO__Work_Package__c>();
            workPackages = [SELECT Id, Name, PlatinumPMO__Deliverable__c, PlatinumPMO__Percentage_of_remaining_effort__c,
                    PlatinumPMO__Deliverable__r.Name, PPMO2__Planned_Start_Date__c, PPMO2__Planned_End_Date__c,
                    PlatinumPMO__Project__r.CreatedDate ,  Predecessors__c, Successors__c, Row_Number__c,
                    PlatinumPMO__Estimated_Effort_in_Hours__c FROM PlatinumPMO__Work_Package__c
            WHERE PlatinumPMO__Project__c =: recordId WITH SECURITY_ENFORCED ];

            for(PlatinumPMO__Work_Package__c workPackage : workPackages){
                deliverableMap.put(workPackage.PlatinumPMO__Deliverable__c, workPackage.PlatinumPMO__Deliverable__r.Name);
                if(!deliverableWorkPackageMap.containsKey(workPackage.PlatinumPMO__Deliverable__c)){
                    deliverableWorkPackageMap.put(workPackage.PlatinumPMO__Deliverable__c, new List<PlatinumPMO__Work_Package__c>());
                }
                deliverableWorkPackageMap.get(workPackage.PlatinumPMO__Deliverable__c).add(workPackage);
            }
            for(Id deliverableId : deliverableWorkPackageMap.keySet()){
                //Deliverable Block :  disabled for Predecessor and Successor
                /*datasets.add(new GanttDataset(
                        deliverableId,
                        deliverableMap.get(deliverableId),
                        0,
                        null,
                        null,
                        '',
                        true,
                        'project',
                        0
                ));*/
                for(PlatinumPMO__Work_Package__c workPackage : deliverableWorkPackageMap.get(deliverableId)){
                    if(workPackage.Successors__c != null){
                        for(String successor : workPackage.Successors__c.split(';')){
                            dependencies.add(new ProjectGanttChartHelper.Links(
                                    workPackage.Row_Number__c+'',
                                    workPackage.Row_Number__c+'',
                                    successor+'',
                                    '0'+''
                                )
                            );
                        }
                    }
                    datasets.add(new GanttDataset(
                            String.valueOf(workPackage.Row_Number__c),
                            workPackage.Name,
                            workPackage.PlatinumPMO__Estimated_Effort_in_Hours__c,
                            workPackage.PPMO2__Planned_Start_Date__c == null? workPackage.PlatinumPMO__Project__r.CreatedDate :  workPackage.PPMO2__Planned_Start_Date__c,
                            workPackage.PPMO2__Planned_End_Date__c == null?
                                    workPackage.PlatinumPMO__Project__r.CreatedDate.addDays(
                                            Integer.valueOf(workPackage.PlatinumPMO__Estimated_Effort_in_Hours__c/8
                                            )
                                    ) :  workPackage.PPMO2__Planned_End_Date__c,
                            deliverableId,
                            true,
                            '',
                            workPackage.PlatinumPMO__Percentage_of_remaining_effort__c == null ? 0 : 1-(workPackage.PlatinumPMO__Percentage_of_remaining_effort__c/100),
                            dependencies
                    ));
                    dependencies.clear();
                }
            }
            System.debug(JSON.serializePretty(datasets));
            return datasets;
        }
        catch (Exception e){
            System.debug(e.getMessage()+' '+e.getLineNumber());
            return new List<ProjectGanttChartHelper.GanttDataset>();
        }
    }
    public class GanttDataset{
        @AuraEnabled public String recordId;
        @AuraEnabled public String recordName;
        @AuraEnabled public Decimal effortDuration;
        @AuraEnabled public Datetime startDate;
        @AuraEnabled public Datetime endDate;
        @AuraEnabled public String parentRecordId;
        @AuraEnabled public Boolean isOpen;
        @AuraEnabled public String rowType;
        @AuraEnabled public Decimal progress;
        @AuraEnabled public String baseUrl;
        @AuraEnabled public List<Links> dependencies = new List<ProjectGanttChartHelper.Links>();
        GanttDataset(
                String id,
                String name,
                Decimal effort,
                Datetime startDate,
                Datetime endDate,
                String parent,
                Boolean isOpen,
                String row,
                Decimal progress,
                List<ProjectGanttChartHelper.Links> recordDependency
        ){
            this.recordId = id;
            this.recordName = name;
            this.effortDuration = effort;
            this.startDate = startDate;
            this.endDate = endDate;
            this.parentRecordId = parent;
            this.isOpen = isOpen;
            this.rowType = row;
            this.progress = progress;
            this.baseurl = System.Url.getSalesforceBaseUrl().toExternalForm();
            this.dependencies.addAll(recordDependency);
        }
        GanttDataset(
                String id,
                String name,
                Decimal effort,
                Datetime startDate,
                Datetime endDate,
                String parent,
                Boolean isOpen,
                String row,
                Decimal progress
        ){
            this.recordId = id;
            this.recordName = name;
            this.effortDuration = effort;
            this.startDate = startDate;
            this.endDate = endDate;
            this.parentRecordId = parent;
            this.isOpen = isOpen;
            this.rowType = row;
            this.progress = progress;
            this.baseurl = System.Url.getSalesforceBaseUrl().toExternalForm();
        }
    }
    public class Links{
        @AuraEnabled public String dependencyId;
        @AuraEnabled public String sourceId;
        @AuraEnabled public String targetId;
        @AuraEnabled public String dependencyType;
        Links(
                String dependencyId,
                String sourceId,
                String targetId,
                String type
        ){
            this.dependencyId = dependencyId;
            this.sourceId = sourceId;
            this.targetId = targetId;
            this.dependencyType = type;
        }
    }
    public class Resources{
        @AuraEnabled public String id;
        @AuraEnabled public String label;
        @AuraEnabled public String imageUrl;
        Resources(String id,
                String label,
                String imageUrl){
            this.id = id;
            this.label = label;
            this.imageUrl = imageUrl;
        }
    }
}