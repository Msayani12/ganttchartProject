export default {
    "success" : true,

    "project" : {
        "calendar"  : "general",
        "startDate" : "2019-01-14"
    },

    "calendars" : {
        "rows" : [
            {
                "id"        : "general",
                "name"      : "General",
                "intervals" : [
                    {
                        "recurrentStartDate" : "on Sat at 0:00",
                        "recurrentEndDate"   : "on Mon at 0:00",
                        "isWorking"          : false
                    }
                ],
                "expanded" : true,
                "children" : [
                    {
                        "id"           : "business",
                        "name"         : "Business",
                        "hoursPerDay"  : 8,
                        "daysPerWeek"  : 5,
                        "daysPerMonth" : 20,
                        "intervals"    : [
                            {
                                "recurrentStartDate" : "every weekday at 12:00",
                                "recurrentEndDate"   : "every weekday at 13:00",
                                "isWorking"          : false
                            },
                            {
                                "recurrentStartDate" : "every weekday at 17:00",
                                "recurrentEndDate"   : "every weekday at 08:00",
                                "isWorking"          : false
                            }
                        ]
                    },
                    {
                        "id"           : "night",
                        "name"         : "Night shift",
                        "hoursPerDay"  : 8,
                        "daysPerWeek"  : 5,
                        "daysPerMonth" : 20,
                        "intervals"    : [
                            {
                                "recurrentStartDate" : "every weekday at 6:00",
                                "recurrentEndDate"   : "every weekday at 22:00",
                                "isWorking"          : false
                            }
                        ]
                    }
                ]
            }
        ]
    },

    "timeRanges"    : {
        "rows": [
            {
                "id"       : 1,
                "name"     : "Important date",
                "startDate": "2019-01-30",
                "duration" : 0,
                "durationUnit" : "d",
                "cls"      : "b-fa b-fa-diamond"
            }
        ]
    }
}