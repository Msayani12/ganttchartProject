/**
 * Created by SOURAV on 7/19/2023.
 */

public with sharing class ProjectGanttBryntumHelper extends ProjectPlanDataWrap{
    public static Map<Integer, Id> workPackageRowIdMap = new Map<Integer, Id>();
    @AuraEnabled
    public static AllData fetchProjectPlanData(String recordId){
        AllData allData;
        List<ParentDataset> parentDatasets = new List<ProjectPlanDataWrap.ParentDataset>();
        List<Resource> resources = new List<ProjectPlanDataWrap.Resource>();
        List<ResourceAllocation> allocations = new List<ProjectPlanDataWrap.ResourceAllocation>();
        List<Dependency> dependencies = new List<ProjectPlanDataWrap.Dependency>();

        List<PlatinumPMO__Work_Package__c> workPackages = new List<PlatinumPMO__Work_Package__c>();
        workPackages = [SELECT Id, Name, PlatinumPMO__Deliverable__c, PlatinumPMO__Percentage_of_remaining_effort__c,
                PlatinumPMO__Deliverable__r.Name, PPMO2__Planned_Start_Date__c, PPMO2__Planned_End_Date__c,
                PlatinumPMO__Project__r.CreatedDate ,  Predecessors__c, Successors__c, Row_Number__c, CreatedDate,
                PlatinumPMO__Estimated_Effort_in_Hours__c FROM PlatinumPMO__Work_Package__c
        WHERE PlatinumPMO__Project__c =: recordId WITH SECURITY_ENFORCED ORDER BY Row_Number__c ASC ];
        parentDatasets.addAll(fetchDeliverables(workPackages));
        resources.addAll(fetchResources(recordId));
        allocations.addAll(fetchResourceAllocations(workPackages));
        dependencies.addAll(fetchDependencies(workPackages));
        allData = new AllData(
                parentDatasets,
                resources,
                allocations,
                dependencies
        );

        return allData;
    }
    @AuraEnabled
    public static List<ParentDataset> fetchDeliverables(List<PlatinumPMO__Work_Package__c> workPackages){
        List<ParentDataset> parentDatasets = new List<ProjectPlanDataWrap.ParentDataset>();
        Map<Id, PlatinumPMO__Deliverable__c> deliverableMap;
        Map<Id, List<PlatinumPMO__Work_Package__c>> deliverableWorkPackageMap = new Map<Id, List<PlatinumPMO__Work_Package__c>>();
        for(PlatinumPMO__Work_Package__c workPackage : workPackages){
            if(!deliverableWorkPackageMap.containsKey(workPackage.PlatinumPMO__Deliverable__c)){
                deliverableWorkPackageMap.put(workPackage.PlatinumPMO__Deliverable__c, new List<PlatinumPMO__Work_Package__c>());
            }
            deliverableWorkPackageMap.get(workPackage.PlatinumPMO__Deliverable__c).add(workPackage);
        }
        if(!deliverableWorkPackageMap.keySet().isEmpty()){
            deliverableMap = new Map<Id, PlatinumPMO__Deliverable__c>([SELECT Id, Name FROM PlatinumPMO__Deliverable__c WHERE Id IN : deliverableWorkPackageMap.keySet() WITH SECURITY_ENFORCED ]);
        }
        for(Id deliverableId : deliverableWorkPackageMap.keySet()){
            List<DataSet> dataSets = new List<ProjectPlanDataWrap.DataSet>();
            for(PlatinumPMO__Work_Package__c workPackage : deliverableWorkPackageMap.get(deliverableId)){
                workPackageRowIdMap.put(Integer.valueOf(workPackage.Row_Number__c), workPackage.Id);
                dataSets.add( new DataSet(
                        workPackage.Id+'',
                        workPackage.Name+'',
                        workPackage.PlatinumPMO__Estimated_Effort_in_Hours__c,
                        workPackage.PPMO2__Planned_Start_Date__c == null ? workPackage.CreatedDate : workPackage.PPMO2__Planned_Start_Date__c,
                        workPackage.PPMO2__Planned_End_Date__c == null?
                                workPackage.PlatinumPMO__Project__r.CreatedDate.addDays(
                                        Integer.valueOf(workPackage.PlatinumPMO__Estimated_Effort_in_Hours__c/8
                                        )
                                ) :  workPackage.PPMO2__Planned_End_Date__c,
                        true,
                        'teal',
                        workPackage.PlatinumPMO__Percentage_of_remaining_effort__c == null ? 0 : 1-(workPackage.PlatinumPMO__Percentage_of_remaining_effort__c/100)
                    )
                );
            }
            parentDatasets.add(
                    new ParentDataset(
                            deliverableId,
                            deliverableMap.get(deliverableId).Name,
                            false,
                            dataSets,
                            0
                    )
            );
        }
        System.debug(JSON.serializePretty(parentDatasets));
        return parentDatasets;
    }

    @AuraEnabled
    public static List<Resource> fetchResources(String projectId){
        List<Resource> resources = new List<Resource>();
        List<PlatinumPMO__User_Association__c> uaList = new List<PlatinumPMO__User_Association__c>();
        List<PlatinumPMO__Organizational_Other_User__c> ouaList = new List<PlatinumPMO__Organizational_Other_User__c>();
        PlatinumPMO__Project__c projectData = [SELECT Id, Name, PlatinumPMO__Associated_Organization__c,
                PlatinumPMO__Associated_Portfolio__c, PlatinumPMO__Program__c FROM PlatinumPMO__Project__c WHERE Id =: projectId
        WITH SECURITY_ENFORCED LIMIT 1];

        uaList = [SELECT Id, PlatinumPMO__User__c, PlatinumPMO__User__r.Name, PlatinumPMO__User__r.SmallPhotoUrl,
                PlatinumPMO__User__r.IsActive, PlatinumPMO__User__r.City FROM PlatinumPMO__User_Association__c
        WHERE PlatinumPMO__Organization__c =: projectData.PlatinumPMO__Associated_Organization__c WITH SECURITY_ENFORCED
        ORDER BY PlatinumPMO__User__r.Name ASC];

        ouaList = [SELECT Id, PlatinumPMO__User__c, PlatinumPMO__User__r.Name, PlatinumPMO__User__r.SmallPhotoUrl,
                PlatinumPMO__User__r.IsActive, PlatinumPMO__User__r.City FROM PlatinumPMO__Organizational_Other_User__c
        WHERE PlatinumPMO__Organization__c =: projectData.PlatinumPMO__Associated_Organization__c WITH SECURITY_ENFORCED
        ORDER BY PlatinumPMO__User__r.Name ASC];

        for (PlatinumPMO__User_Association__c ua : uaList){
            resources.add(new Resource(
                    ua.PlatinumPMO__User__c+'',
                    ua.PlatinumPMO__User__r.Name+'',
                    ua.PlatinumPMO__User__r.City+'',
                    'general',
                    ua.PlatinumPMO__User__r.SmallPhotoUrl+''
            ));
        }

        for (PlatinumPMO__Organizational_Other_User__c oua : ouaList){
            resources.add(new Resource(
                    oua.PlatinumPMO__User__c+'',
                    oua.PlatinumPMO__User__r.Name+'',
                    oua.PlatinumPMO__User__r.City+'',
                    'general',
                    oua.PlatinumPMO__User__r.SmallPhotoUrl+''
            ));
        }
        resources.sort();
        System.debug(resources);
        return  resources;
    }

    @AuraEnabled
    public static List<ResourceAllocation> fetchResourceAllocations(List<PlatinumPMO__Work_Package__c> workPackages){
        List<ResourceAllocation> allocations = new List<ProjectPlanDataWrap.ResourceAllocation>();
        Set<Id> wpIds = new Set<Id>();
        List<PlatinumPMO__RACI_Chart__c> raciCharts = new List<PlatinumPMO__RACI_Chart__c>();

        for (PlatinumPMO__Work_Package__c wp : workPackages){
            wpIds.add(wp.Id);
        }

        raciCharts = [SELECT Id, Name, PlatinumPMO__User__c, PlatinumPMO__Work_Package__c, PlatinumPMO__User_Type__c FROM PlatinumPMO__RACI_Chart__c
        WHERE PlatinumPMO__Work_Package__c IN : wpIds AND PlatinumPMO__User_Type__c = 'Responsible' WITH SECURITY_ENFORCED ];

        for(PlatinumPMO__RACI_Chart__c raci : raciCharts){
            allocations.add(new ResourceAllocation(
                    raci.PlatinumPMO__Work_Package__c+'',
                    raci.PlatinumPMO__User__c+''
            ));
        }
        return allocations;
    }

    @AuraEnabled
    public static List<Dependency> fetchDependencies(List<PlatinumPMO__Work_Package__c> workPackages){
        List<Dependency> dependencies = new List<ProjectPlanDataWrap.Dependency>();

        for(PlatinumPMO__Work_Package__c workPackage : workPackages){
            if(workPackage.Successors__c != null){
                for(String successor : workPackage.Successors__c.split(';')){
                    dependencies.add(new Dependency(
                            workPackageRowIdMap.get(Integer.valueOf(workPackage.Row_Number__c))+'',
                            workPackageRowIdMap.get(Integer.valueOf(successor))+''
                        )
                    );
                }
            }
        }
        return dependencies;
    }

    @AuraEnabled
    public static String saveData(String jsonData){
        Id batchJoId = System.enqueueJob(new WpInsertQueueableHelper(jsonData));

        return batchJoId;
    }
}