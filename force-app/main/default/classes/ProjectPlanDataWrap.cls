/**
 * Created by SOURAV on 7/20/2023.
 */

global with sharing virtual class ProjectPlanDataWrap {

    public class ParentDataset{
        @AuraEnabled public String recordId;
        @AuraEnabled public String recordName;
        @AuraEnabled public Boolean expanded;
        @AuraEnabled public List<DataSet> children = new List<DataSet>();
        @AuraEnabled public Integer percentDone;
        public ParentDataset(
                String id,
                String name,
                Boolean expanded,
                List<DataSet> children,
                Integer percentDone
        ){
            this.recordId = id;
            this.recordName = name;
            this.expanded = expanded;
            this.children.addAll(children);
            this.percentDone = percentDone;
        }
    }

    public class DataSet{
        @AuraEnabled public String id;
        @AuraEnabled public String name;
        @AuraEnabled public Decimal duration;
        @AuraEnabled public Datetime startDate;
        @AuraEnabled public Datetime endDate;
        @AuraEnabled public Boolean expanded;
        @AuraEnabled public String color;
        @AuraEnabled public Decimal percentDone;
        @AuraEnabled public String recordUrl;
        @AuraEnabled public String durationUnit;
        @AuraEnabled public Boolean rollup;
        public DataSet(
                String id,
                String name,
                Decimal duration,
                Datetime start,
                Datetime finish,
                Boolean expanded,
                String color,
                Decimal progress
        ){
            this.id = id;
            this.name = name;
            this.duration = duration == 0.1 ? 0 : (duration/8);
            this.startDate = start;
            this.endDate = finish;
            this.expanded = expanded;
            this.color = color;
            this.percentDone = progress;
            this.recordUrl = System.Url.getSalesforceBaseUrl().toExternalForm()+'/'+id;
            this.rollup = true;
            this.durationUnit = 'days';
        }
    }
    global class Resource implements Comparable{
        @AuraEnabled public String userId;
        @AuraEnabled public String userName;
        @AuraEnabled public String city;
        @AuraEnabled public String calenderType;
        @AuraEnabled public String imageShortUrl;
        public Resource(
                String id,
                String name,
                String city,
                String calenderType,
                String shortUrl
        ){
            this.userId = id;
            this.userName = name;
            this.city = city;
            this.calenderType = calenderType;
            this.imageShortUrl = shortUrl;
        }
        global Integer compareTo(Object userCompareTo){
            return userName.compareTo(((Resource)userCompareTo).userName);
        }
    }
    public class ResourceAllocation{
        @AuraEnabled public String id;
        @AuraEnabled public String parentId;
        @AuraEnabled public String userId;
        public ResourceAllocation(String parent, String user){
            this.id = parent+':'+user;
            this.parentId = parent;
            this.userId = user;
        }
    }
    public class Dependency{
        @AuraEnabled public String id;
        @AuraEnabled public String fromTask;
        @AuraEnabled public String toTask;
        @AuraEnabled public Integer lag;
        public Dependency(
                String fromTask,
                String toTask
        ){
            this.id = fromTask+':'+toTask;
            this.fromTask = fromTask;
            this.toTask = toTask;
            this.lag = 0;
        }
        public Dependency(
                String fromTask,
                String toTask,
                Integer lag
        ){
            this.fromTask = fromTask;
            this.toTask = toTask;
            this.lag = lag;
        }
    }

    public class AllData{
        @AuraEnabled public List<ParentDataset> parentRowSets = new List<ProjectPlanDataWrap.ParentDataset>();
        @AuraEnabled public List<Resource> resources = new List<ProjectPlanDataWrap.Resource>();
        @AuraEnabled public List<ResourceAllocation> allocations = new List<ProjectPlanDataWrap.ResourceAllocation>();
        @AuraEnabled public List<Dependency> dependencies = new List<ProjectPlanDataWrap.Dependency>();
        public AllData(
                List<ParentDataset> parentDatasets,
                List<Resource> resources,
                List<ResourceAllocation> allocations,
                List<Dependency> dependencies
        ){
            this.parentRowSets.addAll(parentDatasets);
            this.resources.addAll(resources);
            this.allocations.addAll(allocations);
            this.dependencies.addAll(dependencies);
        }
    }
}