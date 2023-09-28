/**
 * Created by SOURAV on 8/17/2023.
 */

public class GanttObject {

    public class Added_Y {
        public String event { get; set; }
        public String resource { get; set; }
        public Integer units { get; set; }
        public String resourceId { get; set; }
        public String eventId { get; set; }
        public String phantomId { get; set; }

        public Added_Y(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'event') {
                            event = parser.getText();
                        } else if (text == 'resource') {
                            resource = parser.getText();
                        } else if (text == 'units') {
                            units = parser.getIntegerValue();
                        } else if (text == 'resourceId') {
                            resourceId = parser.getText();
                        } else if (text == 'eventId') {
                            eventId = parser.getText();
                        } else if (text == '$PhantomId') {
                            phantomId = parser.getText();
                        } else {
                            System.debug(LoggingLevel.WARN, 'Added_Y consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Added_Z {
        public String from_Z { get; set; } // in json: from
        public String to { get; set; }
        public Integer type { get; set; }
        public String cls { get; set; }
        public String fromSide { get; set; }
        public String toSide { get; set; }
        public Integer lag { get; set; }
        public String lagUnit { get; set; }
        public String fromEvent { get; set; }
        public String toEvent { get; set; }
        public Boolean active { get; set; }
        public String fromTask { get; set; }
        public String toTask { get; set; }
        public String phantomId { get; set; }

        public Added_Z(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'from') {
                            from_Z = parser.getText();
                        } else if (text == 'to') {
                            to = parser.getText();
                        } else if (text == 'type') {
                            type = parser.getIntegerValue();
                        } else if (text == 'cls') {
                            cls = parser.getText();
                        } else if (text == 'fromSide') {
                            fromSide = parser.getText();
                        } else if (text == 'toSide') {
                            toSide = parser.getText();
                        } else if (text == 'lag') {
                            lag = parser.getIntegerValue();
                        } else if (text == 'lagUnit') {
                            lagUnit = parser.getText();
                        } else if (text == 'fromEvent') {
                            fromEvent = parser.getText();
                        } else if (text == 'toEvent') {
                            toEvent = parser.getText();
                        } else if (text == 'active') {
                            active = parser.getBooleanValue();
                        } else if (text == 'fromTask') {
                            fromTask = parser.getText();
                        } else if (text == 'toTask') {
                            toTask = parser.getText();
                        } else if (text == '$PhantomId') {
                            phantomId = parser.getText();
                        } else {
                            System.debug(LoggingLevel.WARN, 'Added_Z consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public Tasks tasks { get; set; }
    public Dependencies dependencies { get; set; }
    public Assignments assignments { get; set; }

    public GanttObject(JSONParser parser) {
        while (parser.nextToken() != System.JSONToken.END_OBJECT) {
            if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                String text = parser.getText();
                if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                    if (text == 'tasks') {
                        tasks = new Tasks(parser);
                    } else if (text == 'dependencies') {
                        dependencies = new Dependencies(parser);
                    } else if (text == 'assignments') {
                        assignments = new Assignments(parser);
                    } else {
                        System.debug(LoggingLevel.WARN, 'GanttObject consuming unrecognized property: ' + text);
                        consumeObject(parser);
                    }
                }
            }
        }
    }

    public class Added {
        public Integer parentIndex { get; set; }
        public String startDate { get; set; }
        public String endDate { get; set; }
        public Integer duration { get; set; }
        public String durationUnit { get; set; }
        public String cls { get; set; }
        public String name { get; set; }
        public Object calendar { get; set; }
        public String direction { get; set; }
        public Boolean manuallyScheduled { get; set; }
        public Boolean unscheduled { get; set; }
        public Object ignoreResourceCalendar { get; set; }
        public Object constraintType { get; set; }
        public Object constraintDate { get; set; }
        public Object inactive { get; set; }
        public Integer percentDone { get; set; }
        public Integer effort { get; set; }
        public String effortUnit { get; set; }
        public Object segments { get; set; }
        public Boolean effortDriven { get; set; }
        public String schedulingMode { get; set; }
        public List<Baselines> baselines { get; set; }
        public String parentId { get; set; }
        public String phantomId { get; set; }

        public Added(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'parentIndex') {
                            parentIndex = parser.getIntegerValue();
                        } else if (text == 'startDate') {
                            startDate = parser.getText();
                        } else if (text == 'endDate') {
                            endDate = parser.getText();
                        } else if (text == 'duration') {
                            duration = parser.getIntegerValue();
                        } else if (text == 'durationUnit') {
                            durationUnit = parser.getText();
                        } else if (text == 'cls') {
                            cls = parser.getText();
                        } else if (text == 'name') {
                            name = parser.getText();
                        } else if (text == 'calendar') {
                            calendar = parser.readValueAs(Object.class);
                        } else if (text == 'direction') {
                            direction = parser.getText();
                        } else if (text == 'manuallyScheduled') {
                            manuallyScheduled = parser.getBooleanValue();
                        } else if (text == 'unscheduled') {
                            unscheduled = parser.getBooleanValue();
                        } else if (text == 'ignoreResourceCalendar') {
                            ignoreResourceCalendar = parser.readValueAs(Object.class);
                        } else if (text == 'constraintType') {
                            constraintType = parser.readValueAs(Object.class);
                        } else if (text == 'constraintDate') {
                            constraintDate = parser.readValueAs(Object.class);
                        } else if (text == 'inactive') {
                            inactive = parser.readValueAs(Object.class);
                        } else if (text == 'percentDone') {
                            percentDone = parser.getIntegerValue();
                        } else if (text == 'effort') {
                            effort = parser.getIntegerValue();
                        } else if (text == 'effortUnit') {
                            effortUnit = parser.getText();
                        } else if (text == 'segments') {
                            segments = parser.readValueAs(Object.class);
                        } else if (text == 'effortDriven') {
                            effortDriven = parser.getBooleanValue();
                        } else if (text == 'schedulingMode') {
                            schedulingMode = parser.getText();
                        } else if (text == 'baselines') {
                            baselines = arrayOfBaselines(parser);
                        } else if (text == 'parentId') {
                            parentId = parser.getText();
                        } else if (text == '$PhantomId') {
                            phantomId = parser.getText();
                        } else {
                            System.debug(LoggingLevel.WARN, 'Added consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Tasks {
        public List<Added> added { get; set; }
        public List<Updated> updated { get; set; }
        public List<Removed> removed { get; set; }

        public Tasks(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'added') {
                            added = arrayOfAdded(parser);
                        } else if (text == 'updated') {
                            updated = arrayOfUpdated(parser);
                        } else if (text == 'removed') {
                            removed = arrayOfRemoved(parser);
                        } else {
                            System.debug(LoggingLevel.WARN, 'Tasks consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Updated {
        public String endDate { get; set; }
        public Integer duration { get; set; }
        public String startDate { get; set; }
        public String id { get; set; }
        public String name { get; set; }
        public String durationUnit { get; set; }
        public String constraintType { get; set; }
        public String constraintDate { get; set; }

        public Updated(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'endDate') {
                            endDate = parser.getText();
                        } else if (text == 'duration') {
                            duration = parser.getIntegerValue();
                        } else if (text == 'startDate') {
                            startDate = parser.getText();
                        } else if (text == 'id') {
                            id = parser.getText();
                        } else if (text == 'name') {
                            name = parser.getText();
                        } else if(text == 'durationUnit') {
                            durationUnit = parser.getText();
                        } else if (text == 'constraintType') {
                            constraintType = parser.getText();
                        } else if (text == 'constraintDate') {
                            constraintDate = parser.getText();
                        } else {
                            System.debug(LoggingLevel.WARN, 'Updated consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Assignments {
        public List<Added_Y> added { get; set; }
        public List<Removed> removed { get; set; }

        public Assignments(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'added') {
                            added = arrayOfAdded_Y(parser);
                        } else if (text == 'removed') {
                            removed = arrayOfRemoved(parser);
                        } else {
                            System.debug(LoggingLevel.WARN, 'Assignments consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Dependencies {
        public List<Added_Z> added { get; set; }
        public List<Removed> removed { get; set; }

        public Dependencies(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'added') {
                            added = arrayOfAdded_Z(parser);
                        } else if (text == 'removed') {
                            removed = arrayOfRemoved(parser);
                        } else {
                            System.debug(LoggingLevel.WARN, 'Dependencies consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Removed {
        public String id { get; set; }

        public Removed(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        if (text == 'id') {
                            id = parser.getText();
                        } else {
                            System.debug(LoggingLevel.WARN, 'Removed consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }

    public class Baselines {

        public Baselines(JSONParser parser) {
            while (parser.nextToken() != System.JSONToken.END_OBJECT) {
                if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
                    String text = parser.getText();
                    if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
                        {
                            System.debug(LoggingLevel.WARN, 'Baselines consuming unrecognized property: ' + text);
                            consumeObject(parser);
                        }
                    }
                }
            }
        }
    }


    public static GanttObject parse(String json) {
        System.JSONParser parser = System.JSON.createParser(json);
        return new GanttObject(parser);
    }

    public static void consumeObject(System.JSONParser parser) {
        Integer depth = 0;
        do {
            System.JSONToken curr = parser.getCurrentToken();
            if (curr == System.JSONToken.START_OBJECT ||
                    curr == System.JSONToken.START_ARRAY) {
                depth++;
            } else if (curr == System.JSONToken.END_OBJECT ||
                    curr == System.JSONToken.END_ARRAY) {
                depth--;
            }
        } while (depth > 0 && parser.nextToken() != null);
    }


    private static List<Added_Y> arrayOfAdded_Y(System.JSONParser p) {
        List<Added_Y> res = new List<Added_Y>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Added_Y(p));
        }
        return res;
    }


    private static List<Baselines> arrayOfBaselines(System.JSONParser p) {
        List<Baselines> res = new List<Baselines>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Baselines(p));
        }
        return res;
    }


    private static List<Updated> arrayOfUpdated(System.JSONParser p) {
        List<Updated> res = new List<Updated>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Updated(p));
        }
        return res;
    }


    private static List<Removed> arrayOfRemoved(System.JSONParser p) {
        List<Removed> res = new List<Removed>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Removed(p));
        }
        return res;
    }


    private static List<Added> arrayOfAdded(System.JSONParser p) {
        List<Added> res = new List<Added>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Added(p));
        }
        return res;
    }


    private static List<Added_Z> arrayOfAdded_Z(System.JSONParser p) {
        List<Added_Z> res = new List<Added_Z>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Added_Z(p));
        }
        return res;
    }
}