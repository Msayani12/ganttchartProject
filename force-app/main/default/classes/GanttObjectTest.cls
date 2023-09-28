/**
 * Created by soura on 8/17/2023.
 */

@IsTest
public class GanttObjectTest {
    @IsTest
    static void testParse() {
        String json = '{\"tasks\":{\"added\":[{\"parentIndex\":0,\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-12T00:00:00+05:30\",\"duration\":10,\"durationUnit\":\"day\",\"cls\":\"\",\"name\":\"New task 1\",\"calendar\":null,\"direction\":\"Forward\",\"manuallyScheduled\":false,\"unscheduled\":false,\"ignoreResourceCalendar\":null,\"constraintType\":null,\"constraintDate\":null,\"inactive\":null,\"percentDone\":0,\"effort\":240,\"effortUnit\":\"hour\",\"segments\":null,\"effortDriven\":false,\"schedulingMode\":\"Normal\",\"baselines\":[],\"parentId\":\"a0c74000000ehCzAAI\",\"$PhantomId\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\"},{\"parentIndex\":1,\"startDate\":\"2023-08-14T00:00:00+05:30\",\"endDate\":\"2023-08-26T00:00:00+05:30\",\"duration\":10,\"durationUnit\":\"day\",\"cls\":\"\",\"name\":\"New task 2\",\"calendar\":null,\"direction\":\"Forward\",\"manuallyScheduled\":false,\"unscheduled\":false,\"ignoreResourceCalendar\":null,\"constraintType\":null,\"constraintDate\":null,\"inactive\":null,\"percentDone\":0,\"effort\":240,\"effortUnit\":\"hour\",\"segments\":null,\"effortDriven\":false,\"schedulingMode\":\"Normal\",\"baselines\":[],\"parentId\":\"a0c74000000ehCzAAI\",\"$PhantomId\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\"},{\"parentIndex\":2,\"startDate\":\"2023-08-28T00:00:00+05:30\",\"endDate\":\"2023-09-09T00:00:00+05:30\",\"duration\":10,\"durationUnit\":\"day\",\"cls\":\"\",\"name\":\"New task 3\",\"calendar\":null,\"direction\":\"Forward\",\"manuallyScheduled\":false,\"unscheduled\":false,\"ignoreResourceCalendar\":null,\"constraintType\":null,\"constraintDate\":null,\"inactive\":null,\"percentDone\":0,\"effort\":240,\"effortUnit\":\"hour\",\"segments\":null,\"effortDriven\":false,\"schedulingMode\":\"Normal\",\"baselines\":[],\"parentId\":\"a0c74000000ehCzAAI\",\"$PhantomId\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\"}],\"updated\":[{\"endDate\":\"2023-09-09T00:00:00+05:30\",\"duration\":30,\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a0c74000000ehCzAAI\"},{\"startDate\":\"2023-09-09T00:00:00+05:30\",\"endDate\":\"2023-09-09T00:00:00+05:30\",\"name\":\"Generic Project Milestone : End 2\",\"id\":\"a1p740000006sZ5AAI\"},{\"endDate\":\"2023-09-09T00:00:00+05:30\",\"duration\":30,\"startDate\":\"2023-07-29T00:00:00+05:30\",\"id\":\"a0c74000000epPuAAI\"},{\"name\":\"Generic Project Milestone : Start 2\",\"constraintType\":\"startnoearlierthan\",\"constraintDate\":\"2023-07-29T00:00:00+05:30\",\"endDate\":\"2023-07-29T00:00:00+05:30\",\"startDate\":\"2023-07-29T00:00:00+05:30\",\"id\":\"a1p740000006sZ0AAI\"},{\"endDate\":\"2023-08-03T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s7pAAA\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-03T00:00:00+05:30\",\"id\":\"a0c74000000ehHTAAY\"},{\"endDate\":\"2023-08-02T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006sYgAAI\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-05T00:00:00+05:30\",\"id\":\"a1p740000006s8OAAQ\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-19T00:00:00+05:30\",\"id\":\"a0c74000000epPkAAI\"},{\"endDate\":\"2023-08-05T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s8EAAQ\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-12T00:00:00+05:30\",\"id\":\"a0c74000000ehHdAAI\"},{\"endDate\":\"2023-08-19T00:00:00+05:30\",\"startDate\":\"2023-08-07T00:00:00+05:30\",\"id\":\"a1p740000006sYlAAI\"},{\"endDate\":\"2023-08-12T00:00:00+05:30\",\"startDate\":\"2023-08-07T00:00:00+05:30\",\"id\":\"a1p740000006s8JAAQ\"},{\"endDate\":\"2023-08-05T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s8FAAQ\"},{\"endDate\":\"2023-07-31T12:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s7uAAA\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-03T12:00:00+05:30\",\"id\":\"a0c74000000ehHUAAY\"},{\"endDate\":\"2023-08-01T00:00:00+05:30\",\"startDate\":\"2023-07-31T12:00:00+05:30\",\"id\":\"a1p740000006s7vAAA\"},{\"endDate\":\"2023-08-01T12:00:00+05:30\",\"startDate\":\"2023-08-01T00:00:00+05:30\",\"id\":\"a1p740000006s7wAAA\"},{\"endDate\":\"2023-08-02T00:00:00+05:30\",\"startDate\":\"2023-08-01T12:00:00+05:30\",\"id\":\"a1p740000006s7zAAA\"},{\"endDate\":\"2023-08-02T12:00:00+05:30\",\"startDate\":\"2023-08-02T00:00:00+05:30\",\"id\":\"a1p740000006s84AAA\"},{\"endDate\":\"2023-08-03T00:00:00+05:30\",\"startDate\":\"2023-08-02T12:00:00+05:30\",\"id\":\"a1p740000006s85AAA\"},{\"endDate\":\"2023-08-03T12:00:00+05:30\",\"startDate\":\"2023-08-03T00:00:00+05:30\",\"id\":\"a1p740000006s89AAA\"},{\"endDate\":\"2023-08-10T12:00:00+05:30\",\"startDate\":\"2023-08-03T12:00:00+05:30\",\"id\":\"a1p740000006s8TAAQ\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-12T00:00:00+05:30\",\"id\":\"a0c74000000ehHnAAI\"},{\"endDate\":\"2023-08-12T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s8YAAQ\"},{\"endDate\":\"2023-08-01T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s8dAAA\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-04T00:00:00+05:30\",\"id\":\"a0c74000000ehHsAAI\"},{\"endDate\":\"2023-08-03T00:00:00+05:30\",\"startDate\":\"2023-07-31T00:00:00+05:30\",\"id\":\"a1p740000006s7kAAA\"},{\"startDate\":\"2023-07-31T00:00:00+05:30\",\"endDate\":\"2023-08-03T00:00:00+05:30\",\"id\":\"a0c74000000ehHOAAY\"},{\"endDate\":\"2023-08-04T00:00:00+05:30\",\"startDate\":\"2023-08-03T00:00:00+05:30\",\"id\":\"a1p740000006s8iAAA\"}],\"removed\":[{\"id\":\"a1p740000006s7fAAA\"}]},\"dependencies\":{\"added\":[{\"from\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"to\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"type\":2,\"cls\":\"\",\"fromSide\":\"right\",\"toSide\":\"left\",\"lag\":0,\"lagUnit\":\"day\",\"fromEvent\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"toEvent\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"active\":true,\"fromTask\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"toTask\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"$PhantomId\":\"_generatedFV_e587d430-3ed6-4065-954d-f50374e6e054\"},{\"from\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"to\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"type\":2,\"cls\":\"\",\"fromSide\":\"right\",\"toSide\":\"left\",\"lag\":0,\"lagUnit\":\"day\",\"fromEvent\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"toEvent\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"active\":true,\"fromTask\":\"_generatedFV_c112e07f-79b0-4b05-a518-b0c8c6770f7b\",\"toTask\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"$PhantomId\":\"_generatedFV_ccf91d8b-ff68-4483-91eb-bf4f73ce4798\"},{\"from\":\"a1p740000006sZ0AAI\",\"to\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"type\":2,\"cls\":\"\",\"fromSide\":null,\"toSide\":null,\"lag\":0,\"lagUnit\":\"day\",\"fromEvent\":\"a1p740000006sZ0AAI\",\"toEvent\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"active\":true,\"fromTask\":\"a1p740000006sZ0AAI\",\"toTask\":\"_generatedFV_9224bd6c-3279-43ff-b0f4-85201f3c43ef\",\"$PhantomId\":\"_generatedFV_1e632ffa-80b3-47ef-8491-4b49b9f66fa9\"},{\"from\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"to\":\"a1p740000006sZ5AAI\",\"type\":2,\"cls\":\"\",\"fromSide\":null,\"toSide\":null,\"lag\":0,\"lagUnit\":\"day\",\"fromEvent\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"toEvent\":\"a1p740000006sZ5AAI\",\"active\":true,\"fromTask\":\"_generatedFV_1fa4347e-be99-4b9f-802a-288f3346f25d\",\"toTask\":\"a1p740000006sZ5AAI\",\"$PhantomId\":\"_generatedFV_a16ccfaa-daa0-43f7-839f-1f26eeaed85d\"}],\"removed\":[{\"id\":\"a1p740000006sZ0AAI:a1p740000006s7fAAA\"},{\"id\":\"a1p740000006s7fAAA:a1p740000006sZ5AAI\"}]},\"assignments\":{\"added\":[{\"event\":\"a1p740000006s8OAAQ\",\"resource\":\"0051U000008xLjwQAE\",\"units\":100,\"resourceId\":\"0051U000008xLjwQAE\",\"eventId\":\"a1p740000006s8OAAQ\",\"$PhantomId\":\"_generatedFV_4a47988c-4c59-4544-b793-75fd19f10830\"}],\"removed\":[{\"id\":\"a1p740000006s7fAAA:0051U000008xp1zQAA\"},{\"id\":\"a1p740000006s7fAAA:0058Z000008abTxQAI\"},{\"id\":\"a1p740000006s7fAAA:0058Z000007bHlLQAU\"},{\"id\":\"a1p740000006s8OAAQ:0051U000008kYdDQAU\"}]}}';
        GanttObject  r = GanttObject.parse(json);
        System.assert(r != null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Added_Y objAdded_Y = new GanttObject.Added_Y(System.JSON.createParser(json));
        System.assert(objAdded_Y != null);
        System.assert(objAdded_Y.event == null);
        System.assert(objAdded_Y.resource == null);
        System.assert(objAdded_Y.units == null);
        System.assert(objAdded_Y.resourceId == null);
        System.assert(objAdded_Y.eventId == null);
        System.assert(objAdded_Y.phantomId == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Added_Z objAdded_Z = new GanttObject.Added_Z(System.JSON.createParser(json));
        System.assert(objAdded_Z != null);
        System.assert(objAdded_Z.from_Z == null);
        System.assert(objAdded_Z.to == null);
        System.assert(objAdded_Z.type == null);
        System.assert(objAdded_Z.cls == null);
        System.assert(objAdded_Z.fromSide == null);
        System.assert(objAdded_Z.toSide == null);
        System.assert(objAdded_Z.lag == null);
        System.assert(objAdded_Z.lagUnit == null);
        System.assert(objAdded_Z.fromEvent == null);
        System.assert(objAdded_Z.toEvent == null);
        System.assert(objAdded_Z.active == null);
        System.assert(objAdded_Z.fromTask == null);
        System.assert(objAdded_Z.toTask == null);
        System.assert(objAdded_Z.phantomId == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject  objGanttData = new GanttObject(System.JSON.createParser(json));
        System.assert(objGanttData != null);
        System.assert(objGanttData.tasks == null);
        System.assert(objGanttData.dependencies == null);
        System.assert(objGanttData.assignments == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Added objAdded = new GanttObject.Added(System.JSON.createParser(json));
        System.assert(objAdded != null);
        System.assert(objAdded.parentIndex == null);
        System.assert(objAdded.startDate == null);
        System.assert(objAdded.endDate == null);
        System.assert(objAdded.duration == null);
        System.assert(objAdded.durationUnit == null);
        System.assert(objAdded.cls == null);
        System.assert(objAdded.name == null);
        System.assert(objAdded.calendar == null);
        System.assert(objAdded.direction == null);
        System.assert(objAdded.manuallyScheduled == null);
        System.assert(objAdded.unscheduled == null);
        System.assert(objAdded.ignoreResourceCalendar == null);
        System.assert(objAdded.constraintType == null);
        System.assert(objAdded.constraintDate == null);
        System.assert(objAdded.inactive == null);
        System.assert(objAdded.percentDone == null);
        System.assert(objAdded.effort == null);
        System.assert(objAdded.effortUnit == null);
        System.assert(objAdded.segments == null);
        System.assert(objAdded.effortDriven == null);
        System.assert(objAdded.schedulingMode == null);
        System.assert(objAdded.baselines == null);
        System.assert(objAdded.parentId == null);
        System.assert(objAdded.phantomId == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Tasks objTasks = new GanttObject.Tasks(System.JSON.createParser(json));
        System.assert(objTasks != null);
        System.assert(objTasks.added == null);
        System.assert(objTasks.updated == null);
        System.assert(objTasks.removed == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Updated objUpdated = new GanttObject.Updated(System.JSON.createParser(json));
        System.assert(objUpdated != null);
        System.assert(objUpdated.endDate == null);
        System.assert(objUpdated.duration == null);
        System.assert(objUpdated.startDate == null);
        System.assert(objUpdated.id == null);
        System.assert(objUpdated.name == null);
        System.assert(objUpdated.constraintType == null);
        System.assert(objUpdated.constraintDate == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Assignments objAssignments = new GanttObject.Assignments(System.JSON.createParser(json));
        System.assert(objAssignments != null);
        System.assert(objAssignments.added == null);
        System.assert(objAssignments.removed == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Dependencies objDependencies = new GanttObject.Dependencies(System.JSON.createParser(json));
        System.assert(objDependencies != null);
        System.assert(objDependencies.added == null);
        System.assert(objDependencies.removed == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Removed objRemoved = new GanttObject.Removed(System.JSON.createParser(json));
        System.assert(objRemoved != null);
        System.assert(objRemoved.id == null);

        json = '{\"TestAMissingObject\": { \"TestAMissingArray\": [ { \"TestAMissingProperty\": \"Some Value\" } ] } }';
        GanttObject.Baselines objBaselines = new GanttObject.Baselines(System.JSON.createParser(json));
        System.assert(objBaselines != null);
    }
}