/**
 * Created by soura on 2023-09-05.
 */

public with sharing virtual class GanttUtils {

    public static String getSobjectType(Id recordId){
        String sObjectName = '';
        Schema.SObjectType sobjectType = recordId.getSObjectType();
        sobjectName = sobjectType.getDescribe().getName();

        return sObjectName;
    }

    public static Datetime calcDateTimeFromString(String dtString){

        List<String> dateValues = dtString.substring(0, dtString.indexOf('T')).split('-');
        List<String> timeValues = dtString.substring(dtString.indexOf('T')+1, dtString.indexOf('+')).split(':');
        Integer year = Integer.valueOf(dateValues.get(0));
        Integer month = Integer.valueOf(dateValues.get(1));
        Integer day = Integer.valueOf(dateValues.get(2));
        Integer hour = Integer.valueOf(timeValues.get(0));
        Integer min = Integer.valueOf(timeValues.get(1));
        Integer sec = Integer.valueOf(timeValues.get(2));
        Integer milSec = 0;

        Date d = Date.newInstance(year, month, day);

        Time t = Time.newInstance(hour, min, sec, milSec);

        Datetime dt = Datetime.newInstance(d, t);

        return dt;
    }

}