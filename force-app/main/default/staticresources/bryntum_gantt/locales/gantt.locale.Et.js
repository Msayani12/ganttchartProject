(function(o,i){var r=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var d=i(),p=r?exports:o;for(var m in d)p[m]=d[m]}})(typeof self<"u"?self:void 0,()=>{var o={},i={exports:o},r=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,v=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a)r(e,t,{get:a[t],enumerable:!0})},k=(e,a,t,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of p(a))!m.call(e,n)&&n!==t&&r(e,n,{get:()=>a[n],enumerable:!(s=d(a,n))||s.enumerable});return e},h=e=>k(r({},"__esModule",{value:!0}),e),b=(e,a,t)=>(v(e,typeof a!="symbol"?a+"":a,t),t),c={};g(c,{default:()=>L}),i.exports=h(c);var u=class{static mergeLocales(...e){let a={};return e.forEach(t=>{Object.keys(t).forEach(s=>{typeof t[s]=="object"?a[s]={...a[s],...t[s]}:a[s]=t[s]})}),a}static trimLocale(e,a){let t=(s,n)=>{e[s]&&(n?e[s][n]&&delete e[s][n]:delete e[s])};Object.keys(a).forEach(s=>{Object.keys(a[s]).length>0?Object.keys(a[s]).forEach(n=>t(s,n)):t(s)})}static normalizeLocale(e,a){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=e||a.name:a.localeName=e}else a=e;let t={};if(a.name||a.locale)t=Object.assign({localeName:a.name},a.locale),a.desc&&(t.localeDesc=a.desc),a.code&&(t.localeCode=a.code),a.path&&(t.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);t=Object.assign({},a)}for(let s of["name","desc","code","path"])t[s]&&delete t[s];if(!t.localeName)throw new Error("Locale name can not be empty");return t}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||u.localeName}static get locale(){return u.localeName&&this.locales[u.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,a){let{locales:t}=globalThis.bryntum,s=u.normalizeLocale(e,a),{localeName:n}=s;return!t[n]||a===!0?t[n]=s:t[n]=this.mergeLocales(t[n]||{},s||{}),t[n]}},l=u;b(l,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},l._$name="LocaleHelper";var y={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Eemalda sõltuvus"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deaktiveeri sõltuvus"},CycleEffectDescription:{descriptionTpl:"Leiti tsükkel, mille moodustas: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" kalender ei paku tööaja intervalle.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Kasuta 24-tunnist kalendrit vabade laupäevade ja pühapäevadega."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Kasuta 8-tunnist kalendrit (08.00-12.00, 13.00-17.00) vabade laupäevade ja pühapäevadega."},ConflictEffectDescription:{descriptionTpl:"Leiti graafiku konflikt: {0} on konfliktis üksusega {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Projekti alguskuupäev {0}",endDateDescriptionTpl:"Projekti lõppkuupäev {0}"},DependencyType:{long:["Algusest alguseni","Algusest lõpuni","Lõpust alguseni","Lõpust lõpuni"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Käsitsi graafikusse pandud "{2}" sunnib oma alamaid alustama kõige varem {0}',endDescriptionTpl:'Käsitsi graafikusse pandud "{2}" sunnib oma alamaid alustama kõige hiljem {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Keela käsitsi graafikusse panemine "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Sõltuvus ({2}) alates "{3}" kuni "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Eemalda sõltuvus alates "{1}" kuni "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deaktiveeri sõltuvus alates "{1}" kuni "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Ülesande "{2}" {3} {0} piirang',endDateDescriptionTpl:'Ülesande "{2}" {3} {1} piirang',constraintTypeTpl:{startnoearlierthan:"Alusta kõige varem",finishnoearlierthan:"Lõpeta kõige varem",muststarton:"Peab algama",mustfinishon:"Peab lõppema",startnolaterthan:"Alusta hiljemalt",finishnolaterthan:"Lõpeta hiljemalt"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Eemalda "{1}" piirang ülesandes "{0}"'}},M=l.publishLocale(y),T={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",Object:{Yes:"Jah",No:"Ei",Cancel:"Tühista",Ok:"OK",Week:"Nädal"},Combo:{noResults:"Tulemusi ei ole",recordNotCommitted:"Kirjet ei saanud lisada",addNewValue:e=>`Lisa ${e}`},FilePicker:{file:"Fail"},Field:{badInput:"Kehtetu välja väärtus",patternMismatch:"Väärtus peab klappima kindla mustriga",rangeOverflow:e=>`Väärtus peab olema järgmisest väiksem või sellega võrdne: ${e.max}`,rangeUnderflow:e=>`Väärtus peab olema järgmisest suurem või sellega võrdne: ${e.min}`,stepMismatch:"Väärtus peab mahtuma sammu",tooLong:"Väärtus peab olema lühem",tooShort:"Väärtus peab olema lühem",typeMismatch:"Väärtus peab olema kindlas vormingus",valueMissing:"See väli on kohustuslik",invalidValue:"Kehtetu välja väärtus",minimumValueViolation:"Miinimumväärtuse rikkumine",maximumValueViolation:"Maksimumväärtuse rikkumine",fieldRequired:"See väli on kohustuslik",validateFilter:"Väärtus tuleb valida loendist"},DateField:{invalidDate:"Kehtetu kuupäeva sisend"},DatePicker:{gotoPrevYear:"Mine eelmisesse aastasse",gotoPrevMonth:"Mine eemisesse kuusse",gotoNextMonth:"Mine järgmisesse kuusse",gotoNextYear:"Mine järgmisesse aastasse"},NumberFormat:{locale:"et",currency:"USD"},DurationField:{invalidUnit:"Kehtetu üksus"},TimeField:{invalidTime:"Kehtetu ajasisend"},TimePicker:{hour:"Tund",minute:"Minut",second:"sekund"},List:{loading:"Laadimine..."},GridBase:{loadMask:"Laadimine...",syncMask:"Muudatuste salvestamine, palun oodake..."},PagingToolbar:{firstPage:"Mine esimesele leheküljele",prevPage:"Mine eelmisele leheküljele",page:"Lehekülg",nextPage:"Mine järgmisele leheküljele",lastPage:"Mine viimasele leheküljele",reload:"Laadi uuesti praegune lehekülg",noRecords:"Kuvatavaid kirjeid ei ole",pageCountTemplate:e=>`/ ${e.lastPage}`,summaryTemplate:e=>`Kuvab järgmisi kirjeid: ${e.start} - ${e.end} / ${e.allCount}`},PanelCollapser:{Collapse:"Koonda",Expand:"Laienda"},Popup:{close:"Sulge hüpikaken"},UndoRedo:{Undo:"Ennista",Redo:"Soorita uuesti",UndoLastAction:"Ennista viimane toiming",RedoLastAction:"Soorita uuesti viimane ennistatud toiming",NoActions:"Ennistamise järjekorras ei ole toiminguid"},FieldFilterPicker:{equals:"võrdub",doesNotEqual:"ei võrdu",isEmpty:"on tühi",isNotEmpty:"ei ole tühi",contains:"sisaldab",doesNotContain:"ei sisalda",startsWith:"algab",endsWith:"lõpeb",isOneOf:"on üks järgmistest:",isNotOneOf:"ei ole üks järgmistest",isGreaterThan:"on suurem kui",isLessThan:"on väiksem kui",isGreaterThanOrEqualTo:"on suurem/võrdne:",isLessThanOrEqualTo:"on väiksem/võrdne:",isBetween:"on vahemikus",isNotBetween:"ei ole vahemikus",isBefore:"on enne",isAfter:"on pärast",isToday:"on täna",isTomorrow:"on homme",isYesterday:"on eile",isThisWeek:"on sel nädalal",isNextWeek:"on järgmisel nädalal",isLastWeek:"on eelmisel nädalal",isThisMonth:"on sel kuul",isNextMonth:"on järgmisel kuul",isLastMonth:"on eelmisel kuul",isThisYear:"on sel aastal",isNextYear:"on järgmisel aastal",isLastYear:"on eelmisel aastal",isYearToDate:"on sel aastal praeguse hetkeni",isTrue:"on tõene",isFalse:"on väär",selectAProperty:"Valige vara",selectAnOperator:"Valige operaator",caseSensitive:"Tõusutundlik",and:"ja",dateFormat:"D/M/YY",selectOneOrMoreValues:"Valige üks või mitu väärtust",enterAValue:"Sisestage väärtus",enterANumber:"Sisestage number",selectADate:"Valige kuupäev"},FieldFilterPickerGroup:{addFilter:"Lisa filter"},DateHelper:{locale:"et",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisekund",plural:"ms",abbrev:"ms"},{single:"sekund",plural:"sekunds",abbrev:"s"},{single:"minut",plural:"minutit",abbrev:"min"},{single:"tund",plural:"tundi",abbrev:"h"},{single:"päev",plural:"päeva",abbrev:"p"},{single:"nädal",plural:"nädalat",abbrev:"n"},{single:"kuu",plural:"kuud",abbrev:"k"},{single:"kvartal",plural:"kvartalit",abbrev:"kv"},{single:"aasta",plural:"aastat",abbrev:"a"},{single:"kümnend",plural:"kümnendit",abbrev:"kü"}],unitAbbreviations:[["mil"],["s","sek"],["m","min"],["h","hr"],["p"],["n","nd"],["k","ku","kuu"],["kv","kva","kvrt"],["a","aa"],["küm"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},K=l.publishLocale(T),D=new String,E={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",ColumnPicker:{column:"Veerg",columnsMenu:"Veerud",hideColumn:"Peida veerg",hideColumnShort:"Peida",newColumns:"Uued veerud"},Filter:{applyFilter:"Kohalda filtrit",filter:"Filter",editFilter:"Redigeeri filtrit",on:"Kuupäeval",before:"Enne",after:"Pärast",equals:"Võrdub",lessThan:"Vähem kui",moreThan:"Rohkem kui",removeFilter:"Eemalda filter",disableFilter:"Keela filter"},FilterBar:{enableFilterBar:"Näita filtritulpa",disableFilterBar:"Peida filtritulp"},Group:{group:"Grupeeri",groupAscending:"Grupeeri kasvavalt",groupDescending:"Grupeeri kahanevalt",groupAscendingShort:"Kasvav",groupDescendingShort:"Kahanev",stopGrouping:"Peata grupeerimine",stopGroupingShort:"Peata"},HeaderMenu:{moveBefore:e=>`Liiguta enne "${e}"`,moveAfter:e=>`Liiguta pärast "${e}"`,collapseColumn:"Koonda veerg",expandColumn:"Laienda veergu"},ColumnRename:{rename:"Nimeta ümber"},MergeCells:{mergeCells:"Ühenda lahtrid",menuTooltip:"Ühenda sama väärtusega lahtrid, kui sorteeritakse selle veeru järgi"},Search:{searchForValue:"Otsi väärtust"},Sort:{sort:"Sordi",sortAscending:"Sordi kasvavalt",sortDescending:"Sordi kahanevalt",multiSort:"Multisortimine",removeSorter:"Eemalda sortija",addSortAscending:"Lisa kasvav sortija",addSortDescending:"Lisa kahanev sortija",toggleSortAscending:"Muuda kasvavaks",toggleSortDescending:"Muuda kahanevaks",sortAscendingShort:"Kasvav",sortDescendingShort:"Kahanev",removeSorterShort:"Eemalda",addSortAscendingShort:"+ Kasvav",addSortDescendingShort:"+ Kahanev"},Column:{columnLabel:e=>`${e.text?`${e.text} veerg. `:""}TÜHIKULAADI - kontekstimenüü jaoks${e.sortable?", ENTER - et sortida":""}`,cellLabel:D},Checkbox:{toggleRowSelect:"Lülita sisse reavalik",toggleSelection:"Lülita sisse kogu andmekogumi valik"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`hinnang : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Andmete laadimine nurjus!",syncFailedMessage:"Andmete sünrkoonimine nurjus!",unspecifiedFailure:"Täpsustamata tõrge",networkFailure:"Võrgu viga",parseFailure:"Serveri vastuse parsimine nurjus",serverResponse:"Serveri vastus:",noRows:"Kuvatavad kirjed puuduvad",moveColumnLeft:"Liiguta vasakpoolsesse jaotisesse",moveColumnRight:"Liiguta parempoolsesse jaotisesse",moveColumnTo:e=>`Liiguta veerg kohta ${e}`},CellMenu:{removeRow:"Kustuta"},RowCopyPaste:{copyRecord:"Kopeeri",cutRecord:"Lõika",pasteRecord:"Kleebi",rows:"rida",row:"rida"},CellCopyPaste:{copy:"Kopeeri",cut:"Lõika",paste:"Kleebi"},PdfExport:{"Waiting for response from server":"Serveri vastuse ootamine...","Export failed":"Eksport nurjus","Server error":"Serveri viga","Generating pages":"Lehekülgede loomine...","Click to abort":"Tühista"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Ekspordi seaded",export:"Eksport",exporterType:"Kontrolli leheküljestamist",cancel:"Tühista",fileFormat:"Failivorming",rows:"Read",alignRows:"Joonda read",columns:"Veerud",paperFormat:"Paberi vorming",orientation:"Paigutus",repeatHeader:"Korda päist"},ExportRowsCombo:{all:"Kõik read",visible:"Nähtavad read"},ExportOrientationCombo:{portrait:"Püstpaigutus",landscape:"Rõhtpaigutus"},SinglePageExporter:{singlepage:"Üks lehekülg"},MultiPageExporter:{multipage:"Mitu lehekülge",exportingPage:({currentPage:e,totalPages:a})=>`Ekspordi lehekülg ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Mitu lehekülge (vertikaalne)",exportingPage:({currentPage:e,totalPages:a})=>`Ekspordi lehekülg ${e}/${a}`},RowExpander:{loading:"Laadimine",expand:"Laienda",collapse:"Koonda"}},P=l.publishLocale(E),f={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",Object:{newEvent:"Uus sündmus"},ResourceInfoColumn:{eventCountText:e=>e+" sündmus"+(e!==1?"ed":"")},Dependencies:{from:"Alates",to:"Kuni",valid:"Kehtiv",invalid:"Kehtetu"},DependencyType:{SS:"AA",SF:"AL",FS:"LA",FF:"LL",StartToStart:"Algusest alguseni",StartToEnd:"Algusest lõpuni",EndToStart:"Lõpust alguseni",EndToEnd:"Lõpust lõpuni",short:["AA","AL","LA","LL"],long:["Algusest alguseni","Algusest lõpuni","Lõpust alguseni","Lõpust lõpuni"]},DependencyEdit:{From:"Alates",To:"Kuni",Type:"Tüüp",Lag:"Kiht","Edit dependency":"Redigeeri sõltuvust",Save:"Salvesta",Delete:"Kustuta",Cancel:"Tühista",StartToStart:"Algusest alguseni",StartToEnd:"Algusest lõpuni",EndToStart:"Lõpust alguseni",EndToEnd:"Lõpust lõpuni"},EventEdit:{Name:"Nimi",Resource:"Ressurss",Start:"Algus",End:"Lõpp",Save:"Salvesta",Delete:"Kustuta",Cancel:"Tühista","Edit event":"Redigeeri sündmust",Repeat:"Korda"},EventDrag:{eventOverlapsExisting:"Sündmus kattub selle ressursi puhul olemasoleva sündmusega",noDropOutsideTimeline:"Sündmust ei või jätta täielikult väljapoole ajajoont"},SchedulerBase:{"Add event":"Lisa sündmus","Delete event":"Kustuta sündmus","Unassign event":"Eemalda sündmuse määramine"},TimeAxisHeaderMenu:{pickZoomLevel:"Suumi",activeDateRange:"Kuupäevavahemik",startText:"Alguskuupäev",endText:"Lõppkuupäev",todayText:"Täna"},EventCopyPaste:{copyEvent:"Kopeeri sündmus",cutEvent:"Lõika sündmus",pasteEvent:"Kleebi sündmus"},EventFilter:{filterEvents:"Filtreeri ülesanded",byName:"Nime järgi"},TimeRanges:{showCurrentTimeLine:"Näita praegust ajajoont"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekundit"},minuteAndHour:{topDateFormat:"ddd DD.MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD.MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Päev"},day:{name:"Päev/tund"},week:{name:"Nädal/tund"},dayAndWeek:{displayDateFormat:"ll LST",name:"Nädal/päev"},dayAndMonth:{name:"Kuu"},weekAndDay:{displayDateFormat:"ll LST",name:"Nädal"},weekAndMonth:{name:"Nädalat"},weekAndDayLetter:{name:"Nädal/nädalapäev"},weekDateAndMonth:{name:"Kuud/nädalad"},monthAndYear:{name:"Kuud"},year:{name:"Aastad"},manyYears:{name:"Mitu aastat"}},RecurrenceConfirmationPopup:{"delete-title":"Oled sündmust kustutamas","delete-all-message":"Kas soovid kustutada kõik selle sündmuse esinemised?","delete-further-message":"Kas soovid kustutada selle ja kõik selle sündmuse tulevased esinemised või ainult valitud esinemised?","delete-further-btn-text":"Kustuta kõik tulevased sündmused","delete-only-this-btn-text":"Kustuta ainult see sündmus","update-title":"Muudad korduvat sündmust","update-all-message":"Kas soovid muuta kõiki selle sündmuse esinemisi?","update-further-message":"Kas soovid muuta vaid seda sündmuse esinemist või seda ja kõiki tulevasi esinemisi?","update-further-btn-text":"Kõik tulevased sündmused","update-only-this-btn-text":"Ainult see sündmus",Yes:"Jah",Cancel:"Tühista",width:600},RecurrenceLegend:{" and ":" ja ",Daily:"Igapäevane","Weekly on {1}":({days:e})=>`Igapäevane ajal ${e}`,"Monthly on {1}":({days:e})=>`Igakuine ajal ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Iga-aastane ajal  ${e}  ${a} kuust`,"Every {0} days":({interval:e})=>`Iga ${e} päeva tagant`,"Every {0} weeks on {1}":({interval:e,days:a})=>`Iga ${e} nädala tagant ajal ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>`Iga ${e} kuu tagant ajal ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:t})=>`Iga ${e} aasta tagant ${a}  ${t} kuust`,position1:"esimene",position2:"teine",position3:"kolmas",position4:"neljas",position5:"viies","position-1":"viimane",day:"päev",weekday:"tööpäev","weekend day":"nädalavahetus",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Korda sündmust",Cancel:"Tühista",Save:"Salvesta",Frequency:"Sagedus",Every:"Iga",DAILYintervalUnit:"päev(a) tagant",WEEKLYintervalUnit:"nädal(a) tagant",MONTHLYintervalUnit:"kuu tagant",YEARLYintervalUnit:"aasta tagant",Each:"Iga","On the":"Ajal ","End repeat":"Lõpeta kordumine","time(s)":"aeg (ajad)"},RecurrenceDaysCombo:{day:"päev",weekday:"tööpäev","weekend day":"nädalavahetus"},RecurrencePositionsCombo:{position1:"esimene",position2:"teine",position3:"kolmas",position4:"neljas",position5:"viies","position-1":"viimane"},RecurrenceStopConditionCombo:{Never:"Mitte kunagi",After:"Pärast","On date":"Kuupäeval"},RecurrenceFrequencyCombo:{None:"Ära korda",Daily:"Igapäevane",Weekly:"Iganädalane",Monthly:"Igakuine",Yearly:"Iga-aastane"},RecurrenceCombo:{None:"Mitte ükski",Custom:"Kohandatud..."},Summary:{"Summary for":e=>`Kokkuvõte kuupäeval ${e}`},ScheduleRangeCombo:{completeview:"Lõpeta graafik",currentview:"Nähtav graafik",daterange:"Kuupäevavahemik",completedata:"Lõpeta graafik (kõigi sündmuste jaoks)"},SchedulerExportDialog:{"Schedule range":"Kuupäevavahemik","Export from":"Alates","Export to":"Kuni"},ExcelExporter:{"No resource assigned":"Ressursse pole määratud"},CrudManagerView:{serverResponseLabel:"Serveri vastus:"},DurationColumn:{Duration:"Kestus"}},A=l.publishLocale(f),C={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",ConstraintTypePicker:{none:"Puudub",muststarton:"Peab algama",mustfinishon:"Peab lõppema",startnoearlierthan:"Ei tohi alata varem kui",startnolaterthan:"Ei tohi alata hiljem kui",finishnoearlierthan:"Ei tohi lõppeda varem kui",finishnolaterthan:"Ei tohi lõppeda hiljem kui"},CalendarField:{"Default calendar":"Vaikimisi kalender"},TaskEditorBase:{Information:"Informatsioon",Save:"Salvesta",Cancel:"Tühista",Delete:"Kustuta",calculateMask:"Arvutamine...",saveError:"Ei saa salvestada, palun parandage kõigepealt vead",repeatingInfo:"Korduva sündmuse vaatamine",editRepeating:"Redigeeri"},TaskEdit:{"Edit task":"Redigeeri ülesannet",ConfirmDeletionTitle:"Kinnita kustutamine",ConfirmDeletionMessage:"Kas olete kindel, et soovite sündmuse kustutada?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Üldine",Name:"Nimi",Resources:"Ressursid","% complete":"% tehtud",Duration:"Kestus",Start:"Algus",Finish:"Lõpp",Effort:"Panus",Preamble:"Preambula",Postamble:"Postambula"},GeneralTab:{labelWidth:"6.5em",General:"Üldine",Name:"Nimi","% complete":"% tehtud",Duration:"Kestus",Start:"Algus",Finish:"Lõpp",Effort:"Panus",Dates:"Kuupäevad"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Täiustatud",Calendar:"Kalender","Scheduling mode":"Kavandamise režiim","Effort driven":"Tehtud pingutus","Manually scheduled":"Manuaalselt kavandatud","Constraint type":"Piirangu tüüp","Constraint date":"Piirangu kuupäev",Inactive:"Mitteaktiivne","Ignore resource calendar":"Ignoreeri ressursikalendrit"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Täiustatud",Calendar:"Kalender","Scheduling mode":"Kavandamise režiim","Effort driven":"Tehtud pingutus","Manually scheduled":"Manuaalselt kavandatud","Constraint type":"Piirangu tüüp","Constraint date":"Piirangu kuupäev",Constraint:"Piirang",Rollup:"Ümberarvestus",Inactive:"Mitteaktiivne","Ignore resource calendar":"Ignoreeri ressursikalendrit"},DependencyTab:{Predecessors:"Eelkäijad",Successors:"Järglased",ID:"ID",Name:"Nimi",Type:"Tüüp",Lag:"Kiht",cyclicDependency:"Tsükliline sõltuvus",invalidDependency:"Kehtetu sõltuvus"},NotesTab:{Notes:"Märkused"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ressursid",Resource:"Ressurss",Units:"Üksused"},RecurrenceTab:{title:"Repeat"},SchedulingModePicker:{Normal:"Normaalne","Fixed Duration":"Määratud kestus","Fixed Units":"Määratud üksused","Fixed Effort":"Määratud panus"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> määratust',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} / {available}</span> määratust',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} / {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Kuupäeval {startDate}<br><span class="{cls}">{allocated} / {available}</span> määratust:<br>{assignments}',plusMore:"+{value} veel"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> määratust',barTipOnDate:'<b>{event}</b> kuupäeval {startDate}<br><span class="{cls}">{allocated}</span> määratust',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} / {available}</span> määratust:<br>{assignments}',groupBarTipOnDate:'Kuupäeval {startDate}<br><span class="{cls}">{allocated} / {available}</span> määratust:<br>{assignments}',plusMore:"+{value} veel",nameColumnText:"Ressurss / sündmus"},SchedulingIssueResolutionPopup:{"Cancel changes":"Tühista muudatus ja ära tee midagi",schedulingConflict:"Kavandamise konflikt",emptyCalendar:"Kalendri konfigureerimise viga",cycle:"Kavandamistsükkel",Apply:"Rakenda"},CycleResolutionPopup:{dependencyLabel:"Palun vali sõltuvus:",invalidDependencyLabel:"Kaasatud on kehtetuid sõltuvusi, millega tuleb tegeleda:"},DependencyEdit:{Active:"Aktiivne"},SchedulerProBase:{propagating:"Projekti arvutamine",storePopulation:"Andmete laadimine",finalizing:"Tulemuste lõpetamine"},EventSegments:{splitEvent:"Jaga sündmus",renameSegment:"Nimeta ümber"},NestedEvents:{deNestingNotAllowed:"Pesastamise eemaldamine ei ole lubatud",nestingNotAllowed:"Pesastamine ei ole lubatud"},VersionGrid:{compare:"Võrdle",description:"Kirjeldus",occurredAt:"Toimus",rename:"Nimeta ümber",restore:"Taasta",stopComparing:"Lõpeta võrdlemine"},Versions:{entityNames:{TaskModel:"ülesanne",AssignmentModel:"määramine",DependencyModel:"link",ProjectModel:"projekt",ResourceModel:"ressurss",other:"objekt"},entityNamesPlural:{TaskModel:"ülesanded",AssignmentModel:"määramised",DependencyModel:"lingid",ProjectModel:"projektid",ResourceModel:"ressursid",other:"objektid"},transactionDescriptions:{update:"Muudetud {n} {entities}",add:"Lisatud {n} {entities}",remove:"Eemaldatud {n} {entities}",move:"Teisaldatud {n} {entities}",mixed:"Muudetud {n} {entities}"},addEntity:"Lisatud {type} **{name}**",removeEntity:"Eemaldatud {type} **{name}**",updateEntity:"Muudetud {type} **{name}**",moveEntity:"Teisaldatud {type} **{name}** kohast {from} kohta {to}",addDependency:"Lisatud link kohast **{from}** kohta **{to}**",removeDependency:"Eemaldatud link kohast **{from}** kohta **{to}**",updateDependency:"Muudetud linki kohast **{from}** kohta **{to}**",addAssignment:"Määratud **{resource}** sündmusele **{event}**",removeAssignment:"Eemaldatud määramine: **{resource}** sündmusest **{event}**",updateAssignment:"Muudetud määramist: **{resource}** sündmusele **{event}**",noChanges:"Muudatusi pole",nullValue:"puudub",versionDateFormat:"M/D/YYYY h:mm a",undid:"Ennistas muudatused",redid:"Tegi uuesti muudatused",editedTask:"Muutis ülesande omadusi",deletedTask:"Kustutas ülesande",movedTask:"Teisaldas ülesande",movedTasks:"Teisaldas ülesanded"}},N=l.publishLocale(C),S={localeName:"Et",localeDesc:"Eesti keel",localeCode:"et",Object:{Save:"Salvesta"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ignoreeri ressursikalendrit"},InactiveColumn:{Inactive:"Mitteaktiivne"},AddNewColumn:{"New Column":"Uus veerg"},CalendarColumn:{Calendar:"Kalender"},EarlyStartDateColumn:{"Early Start":"Varajane algus"},EarlyEndDateColumn:{"Early End":"Varajane lõpp"},LateStartDateColumn:{"Late Start":"Hiline algus"},LateEndDateColumn:{"Late End":"Hiline lõpp"},TotalSlackColumn:{"Total Slack":"Kogu lõtk"},ConstraintDateColumn:{"Constraint Date":"Piirangu kuupäev"},ConstraintTypeColumn:{"Constraint Type":"Piirangu tüüp"},DeadlineDateColumn:{Deadline:"Tähtaeg"},DependencyColumn:{"Invalid dependency":"Kehtetu sõltuvus"},DurationColumn:{Duration:"Kestus"},EffortColumn:{Effort:"Pingutus"},EndDateColumn:{Finish:"Lõpp"},EventModeColumn:{"Event mode":"Sündmuse režiim",Manual:"Manuaalne",Auto:"Automaatne"},ManuallyScheduledColumn:{"Manually scheduled":"Manuaalselt kavandatud"},MilestoneColumn:{Milestone:"Verstapost"},NameColumn:{Name:"Nimi"},NoteColumn:{Note:"Märkus"},PercentDoneColumn:{"% Done":"% tehtud"},PredecessorColumn:{Predecessors:"Eelkäijad"},ResourceAssignmentColumn:{"Assigned Resources":"Määratud ressursid","more resources":"veel ressursse"},RollupColumn:{Rollup:"Ümberarvestus"},SchedulingModeColumn:{"Scheduling Mode":"Kavandamise režiim"},SequenceColumn:{Sequence:"Järjestus"},ShowInTimelineColumn:{"Show in timeline":"Näita ajajoonel"},StartDateColumn:{Start:"Algus"},SuccessorColumn:{Successors:"Järglased"},TaskCopyPaste:{copyTask:"Kopeeri",cutTask:"Lõika",pasteTask:"Kleebi"},WBSColumn:{WBS:"Tööjaotuse struktuur",renumber:"Nummerda ümber"},DependencyField:{invalidDependencyFormat:"Kehtetu sõltuvuse vorming"},ProjectLines:{"Project Start":"Projekti algus","Project End":"Projekti lõpp"},TaskTooltip:{Start:"Algus",End:"Lõpp",Duration:"Kestus",Complete:"Lõpeta"},AssignmentGrid:{Name:"Ressursi nimi",Units:"Üksused",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Redigeeri",Indent:"Nihutamine paremale",Outdent:"Nihutamine vasakule","Convert to milestone":"Teisenda verstapostiks",Add:"Lisa...","New task":"Uus ülesanne","New milestone":"Uus verstapost","Task above":"Ülemine ülesanne","Task below":"Alumine ülesanne","Delete task":"Kustuta",Milestone:"Verstapost","Sub-task":"Alamülesanne",Successor:"Järglane",Predecessor:"Eelkäija",changeRejected:"Kavandamismootor lükkas muudatused tagasi",linkTasks:"Lisage sõltuvused",unlinkTasks:"Eemaldage sõltuvused"},EventSegments:{splitTask:"Jaga ülesanne"},Indicators:{earlyDates:"Varajane algus/lõpp",lateDates:"Hiline algus/lõpp",Start:"Algus",End:"Lõpp",deadlineDate:"Tähtaeg"},Versions:{indented:"Taane paremale",outdented:"Taane vasakule",cut:"Lõika",pasted:"Kleebitud",deletedTasks:"Kustutatud ülesanded"}},L=l.publishLocale(S);if(typeof i.exports=="object"&&typeof o=="object"){var j=(e,a,t,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,n)&&n!==t&&Object.defineProperty(e,n,{get:()=>a[n],enumerable:!(s=Object.getOwnPropertyDescriptor(a,n))||s.enumerable});return e};i.exports=j(i.exports,o)}return i.exports});
