(function(i,l){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var c=l(),p=s?exports:i;for(var u in c)p[u]=c[u]}})(typeof self<"u"?self:void 0,()=>{var i={},l={exports:i},s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})},k=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of p(t))!u.call(e,a)&&a!==n&&s(e,a,{get:()=>t[a],enumerable:!(o=c(t,a))||o.enumerable});return e},b=e=>k(s({},"__esModule",{value:!0}),e),h=(e,t,n)=>(v(e,typeof t!="symbol"?t+"":t,n),n),m={};y(m,{default:()=>P}),l.exports=b(m);var d=class{static mergeLocales(...e){let t={};return e.forEach(n=>{Object.keys(n).forEach(o=>{typeof n[o]=="object"?t[o]={...t[o],...n[o]}:t[o]=n[o]})}),t}static trimLocale(e,t){let n=(o,a)=>{e[o]&&(a?e[o][a]&&delete e[o][a]:delete e[o])};Object.keys(t).forEach(o=>{Object.keys(t[o]).length>0?Object.keys(t[o]).forEach(a=>n(o,a)):n(o)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let n={};if(t.name||t.locale)n=Object.assign({localeName:t.name},t.locale),t.desc&&(n.localeDesc=t.desc),t.code&&(n.localeCode=t.code),t.path&&(n.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},t)}for(let o of["name","desc","code","path"])n[o]&&delete n[o];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:n}=globalThis.bryntum,o=d.normalizeLocale(e,t),{localeName:a}=o;return!n[a]||t===!0?n[a]=o:n[a]=this.mergeLocales(n[a]||{},o||{}),n[a]}},r=d;h(r,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},r._$name="LocaleHelper";var g={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Odebrat závislost"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deaktivovat závislost"},CycleEffectDescription:{descriptionTpl:"Byl nalezen cyklus vytvořený: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'Kalendář "{0}" neuvádí žádné intervaly pracovní doby.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Použijte 24-hodinový kalendář s nepracovními sobotami a nedělemi."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Použijte 8-hodinový kalendář (8:00-12:00, 13:00-17:00) s nepracovními sobotami a nedělemi)."},ConflictEffectDescription:{descriptionTpl:"Byl nalezen střed plánování: {0} se kryje s {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Datum zahájení projektu {0}",endDateDescriptionTpl:"Datum ukončení projektu {0}"},DependencyType:{long:["Začátek-Začátek","Začátek-Konec","Konec-Začátek","Konec-Konec"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manuálně naplánované "{2}" nutí děti nezačínat dříve než {0}',endDescriptionTpl:'Manuálně naplánované "{2}" nutí děti dokončit ne později než {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Deaktivovat manuální plánování pro "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Závislost ({2}) od "{3}" do "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Odebrat závislost od "{1}" do "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deaktivovat závislost od "{1}" do "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Omezení úkolu "{2}" {3} {0}',endDateDescriptionTpl:'Omezení úkolu "{2}" {3} {1}',constraintTypeTpl:{startnoearlierthan:"Nespouštět dříve než",finishnoearlierthan:"Nedokončovat dříve než",muststarton:"Musí začít",mustfinishon:"Musí skončit",startnolaterthan:"Nespouštět později než",finishnolaterthan:"Nedokončovat později než"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Odebrat "{1}" omezení úkolu "{0}"'}},E=r.publishLocale(g),z={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",Object:{Yes:"Ano",No:"Ne",Cancel:"Zrušit",Ok:"OK",Week:"Týden"},Combo:{noResults:"Žádné výsledky",recordNotCommitted:"Záznam se nepodařilo přidat",addNewValue:e=>`Přidat ${e}`},FilePicker:{file:"Soubor"},Field:{badInput:"Neplatná hodnota pole",patternMismatch:"Hodnota by měla odpovídat určitému vzoru",rangeOverflow:e=>`Hodnota musí být menší nebo rovna ${e.max}`,rangeUnderflow:e=>`Hodnota musí být větší nebo rovna ${e.min}`,stepMismatch:"Hodnota by měla odpovídat kroku",tooLong:"Hodnota by měla být kratší",tooShort:"Hodnota by měla být delší",typeMismatch:"Hodnota musí být ve zvláštním formátu",valueMissing:"Toto pole je povinné",invalidValue:"Neplatná hodnota pole",minimumValueViolation:"Porušení minimální hodnoty",maximumValueViolation:"Porušení maximální hodnoty",fieldRequired:"Toto pole je povinné",validateFilter:"Hodnota musí být vybrána ze seznamu"},DateField:{invalidDate:"Neplatné zadání data"},DatePicker:{gotoPrevYear:"Přejít na předchozí rok",gotoPrevMonth:"Přejít na předchozí měsíc",gotoNextMonth:"Přejít na další měsíc",gotoNextYear:"Přejít na další rok"},NumberFormat:{locale:"cs",currency:"CZK"},DurationField:{invalidUnit:"Neplatná jednotka"},TimeField:{invalidTime:"Neplatné zadání času"},TimePicker:{hour:"Hodina",minute:"Minuta",second:"Sekunda"},List:{loading:"Nahrávání..."},GridBase:{loadMask:"Nahrávání...",syncMask:"Ukládání změn, čekejte, prosím..."},PagingToolbar:{firstPage:"Přejít na první stránku",prevPage:"Přejít na předchozí stránku",page:"Stránka",nextPage:"Přejít na další stránku",lastPage:"Přejít na poslední stránku",reload:"Znovu načíst aktuální stránku",noRecords:"Žádné záznamy k zobrazení",pageCountTemplate:e=>`z ${e.lastPage}`,summaryTemplate:e=>`Zobrazení záznamů ${e.start} - ${e.end} z ${e.allCount}`},PanelCollapser:{Collapse:"Sbalit",Expand:"Rozbalit"},Popup:{close:"Zavřít vyskakovací okno"},UndoRedo:{Undo:"Vrátit",Redo:"Udělat znovu",UndoLastAction:"Vrátit poslední akci",RedoLastAction:"Udělat znovu poslední vrácenou akci",NoActions:"Žádné položky ve frontě vracení akcí"},FieldFilterPicker:{equals:"rovná se",doesNotEqual:"nerovná se",isEmpty:"je prázdný",isNotEmpty:"není prázdný",contains:"obsahuje",doesNotContain:"neobsahuje",startsWith:"začíná na",endsWith:"končí na",isOneOf:"je jeden z",isNotOneOf:"není jeden z",isGreaterThan:"je větší než",isLessThan:"je menší než",isGreaterThanOrEqualTo:"je větší než nebo se rovná",isLessThanOrEqualTo:"je menší než nebo se rovná",isBetween:"je mezi",isNotBetween:"není mezi",isBefore:"je před",isAfter:"je po",isToday:"je dnes",isTomorrow:"je zítra",isYesterday:"je včera",isThisWeek:"je tento týden",isNextWeek:"je příští týden",isLastWeek:"je minulý týden",isThisMonth:"je tento měsíc",isNextMonth:"je příští měsíc",isLastMonth:"je poslední měsíc",isThisYear:"je tento rok",isNextYear:"je příští rok",isLastYear:"je poslední rok",isYearToDate:"je od začátku roku",isTrue:"je pravda",isFalse:"je lež",selectAProperty:"Vyberte vlastnost",selectAnOperator:"Vyberte operátora",caseSensitive:"Velká a malá písmena",and:"a",dateFormat:"D/M/YY",selectOneOrMoreValues:"Vyberte jednu nebo více hodnot",enterAValue:"Zadejte hodnotu",enterANumber:"Zadejte číslo",selectADate:"Vyberte datum"},FieldFilterPickerGroup:{addFilter:"Přidat filtr"},DateHelper:{locale:"cs",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekunda",plural:"milisekundy",abbrev:"ms"},{single:"sekunda",plural:"sekundy",abbrev:"s"},{single:"minuta",plural:"minuty",abbrev:"min"},{single:"hodina",plural:"hodiny",abbrev:"h"},{single:"den",plural:"dny",abbrev:"d"},{single:"týden",plural:"týdny",abbrev:"t"},{single:"měsíc",plural:"měsíce",abbrev:"měs"},{single:"čtvrtletí",plural:"čtvrtletí",abbrev:"č"},{single:"rok",plural:"roky",abbrev:"r"},{single:"desetiletí",plural:"desetiletí",abbrev:"des"}],unitAbbreviations:[["ms"],["s","sek"],["m","min"],["h","hod"],["d"],["t","týd"],["mě","měs","měsíce"],["č","čtvr","čt"],["r","ro"],["des"]],parsers:{L:"D. M. YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e}},N=r.publishLocale(z),D=new String,C={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",ColumnPicker:{column:"Sloupec",columnsMenu:"Sloupce",hideColumn:"Skýrt sloupec",hideColumnShort:"Skrýt",newColumns:"Nové sloupce"},Filter:{applyFilter:"Použít filtr",filter:"Filtr",editFilter:"Upravit filtr",on:"Zap.",before:"Před",after:"Po",equals:"Rovná se",lessThan:"Méně než",moreThan:"Více než",removeFilter:"Odebrat filtr",disableFilter:"Deaktivovat filtr"},FilterBar:{enableFilterBar:"Zobrazit lištu s filtrem",disableFilterBar:"Skrýt lištu s filtrem"},Group:{group:"Seskupit",groupAscending:"Seskupit vzestupně",groupDescending:"Seskupit sestupně",groupAscendingShort:"Vzestupně",groupDescendingShort:"Sestupně",stopGrouping:"Zastavit seskupování",stopGroupingShort:"Zastavit"},HeaderMenu:{moveBefore:e=>`Posunout před "${e}"`,moveAfter:e=>`Posunout za "${e}"`,collapseColumn:"Sloučit sloupec",expandColumn:"Rozšířit sloupec"},ColumnRename:{rename:"Přejmenovat"},MergeCells:{mergeCells:"Sloučit buňky",menuTooltip:"Při řazení tohoto sloupce sloučit buňky se stejnou hodnotou"},Search:{searchForValue:"Vyhledat hodnotu"},Sort:{sort:"Seřadit",sortAscending:"Seřadit vzestupně",sortDescending:"Seřadit sestupně",multiSort:"Multi řazení",removeSorter:"Odebrat řazení",addSortAscending:"Přidat vzestupné řazení",addSortDescending:"Přidat sestupné řazení",toggleSortAscending:"Změnit na vzestupné",toggleSortDescending:"Změnit na sestupné",sortAscendingShort:"Vzestupně",sortDescendingShort:"Sestupně",removeSorterShort:"Odebrat",addSortAscendingShort:"+ vzestupně",addSortDescendingShort:"+ sestupně"},Column:{columnLabel:e=>`${e.text?`${e.text} sloupec. `:""}MEZERNÍK pro kontextová nabídka${e.sortable?", ENTER pro řazení":""}`,cellLabel:D},Checkbox:{toggleRowSelect:"Přepnout výběr řádku",toggleSelection:"Přepnout výběr celé sady dat"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`hodnocení : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Nahrání dat se nezdařilo!",syncFailedMessage:"Synchronizace dat se nezdařila!",unspecifiedFailure:"Nespecifikované selhání",networkFailure:"Chyba sítě",parseFailure:"Nepodařilo se analyzovat odezvu serveru",serverResponse:"Odezva serveru:",noRows:"Žádné záznamy k zobrazení",moveColumnLeft:"Přesunout do levé části",moveColumnRight:"Přesunout do pravé části",moveColumnTo:e=>`Přesunout sloupec do ${e}`},CellMenu:{removeRow:"Vymazat"},RowCopyPaste:{copyRecord:"Kopírovat",cutRecord:"Vyjmout",pasteRecord:"Vložit",rows:"řádky",row:"řádek"},CellCopyPaste:{copy:"Kopírovat",cut:"Vyříznout",paste:"Vložit"},PdfExport:{"Waiting for response from server":"Čekání na odezvu serveru...","Export failed":"Export se nezdařil","Server error":"Chyba serveru","Generating pages":"Generování stránek...","Click to abort":"Zrušit"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Nastavení exportu",export:"Export",exporterType:"Kontrola stránkování",cancel:"Zrušit",fileFormat:"Formát souboru",rows:"Řádky",alignRows:"Srovnat řádky",columns:"Sloupce",paperFormat:"Formát papíru",orientation:"Orientace",repeatHeader:"Opakovat záhlaví"},ExportRowsCombo:{all:"Všechny řádky",visible:"Viditelné řádky"},ExportOrientationCombo:{portrait:"Na výšku",landscape:"Na šířku"},SinglePageExporter:{singlepage:"Jedna stránka"},MultiPageExporter:{multipage:"Více stránek",exportingPage:({currentPage:e,totalPages:t})=>`Export stránky ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Více stránek (vertikálně) ",exportingPage:({currentPage:e,totalPages:t})=>`Export stránky ${e}/${t}`},RowExpander:{loading:"Nahrávání",expand:"Rozbalit",collapse:"Sbalit"}},R=r.publishLocale(C),T={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",Object:{newEvent:"Nová událost"},ResourceInfoColumn:{eventCountText:e=>e+" událost"+({1:"",2:"i",3:"i",4:"i"}[e[e.length-1]]||"í")},Dependencies:{from:"Od",to:"Do",valid:"Platný",invalid:"Neplatný"},DependencyType:{SS:"ZZ",SF:"ZK",FS:"KZ",FF:"KK",StartToStart:"Začátek-Začátek",StartToEnd:"Začátek-Konec",EndToStart:"Konec-Začátek",EndToEnd:"Konec-Konec",short:["ZZ","ZK","KZ","KK"],long:["Začátek-Začátek","Začátek-Konec","Konec-Začátek","Konec-Konec"]},DependencyEdit:{From:"Od",To:"Do",Type:"Typ",Lag:"Prodleva","Edit dependency":"Upravit závislost",Save:"Uložit",Delete:"Smazat",Cancel:"Zrušit",StartToStart:"Začátek-Začátek",StartToEnd:"Začátek-Konec",EndToStart:"Konec-Začátek",EndToEnd:"Konec-Konec"},EventEdit:{Name:"Název",Resource:"Zdroj",Start:"Začátek",End:"Konec",Save:"Uložit",Delete:"Smazat",Cancel:"Zrušit","Edit event":"Upravit událost",Repeat:"Opakovat"},EventDrag:{eventOverlapsExisting:"Překrytí stávajících událostí pro tento zdroj",noDropOutsideTimeline:"Událost nelze přesunout zcela mimo časovou osu"},SchedulerBase:{"Add event":"Přidat událost","Delete event":"Vymazat událost","Unassign event":"Zrušit přidělení události"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Rozsah dat",startText:"Datum začátku",endText:"Datum konce",todayText:"Dnes"},EventCopyPaste:{copyEvent:"Kopírovat událost",cutEvent:"Vyjmout událost",pasteEvent:"Vložit událost"},EventFilter:{filterEvents:"Filtrovat úkoly",byName:"Podle názvu"},TimeRanges:{showCurrentTimeLine:"Zobrazit aktuální časovou osu"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekundy"},minuteAndHour:{topDateFormat:"ddd D. M., H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd D. M.",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Den"},day:{name:"Den/hodiny"},week:{name:"Týden/hodiny"},dayAndWeek:{displayDateFormat:"ll LST",name:"Týden/dny"},dayAndMonth:{name:"Měsíc"},weekAndDay:{displayDateFormat:"ll LST",name:"Týden"},weekAndMonth:{name:"Týdny"},weekAndDayLetter:{name:"Týdny/pracovní dny"},weekDateAndMonth:{name:"Měsíce/týdny"},monthAndYear:{name:"Měsíce"},year:{name:"Roky"},manyYears:{name:"Několik let"}},RecurrenceConfirmationPopup:{"delete-title":"Mažete událost","delete-all-message":"Chcete vymazat všechny výskyty této události?","delete-further-message":"Chcete vymazat tuto a všechny budoucí výskyty této události nebo pouze vybraný výskyt?","delete-further-btn-text":"Vymazat všechny budoucí události","delete-only-this-btn-text":"Vymazat jen tuto událost","update-title":"Měníte opakující se událost","update-all-message":"Chcete změnit všechny výskyty této události?","update-further-message":"Chcete změnit pouze tento výskyt události nebo tento a všechny budoucí výskyty?","update-further-btn-text":"Všechny budoucí události","update-only-this-btn-text":"Pouze tuto událost",Yes:"Ano",Cancel:"Zrušit",width:600},RecurrenceLegend:{" and ":" a ",Daily:"Denně","Weekly on {1}":({days:e})=>`Týdně v ${e}`,"Monthly on {1}":({days:e})=>`Měsíčně v ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Ročně dne  ${e}. ${t}.`,"Every {0} days":({interval:e})=>`Každých ${e} dnů`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Každých ${e} týdn v ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Každé ${e} měsíce v ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:n})=>`Každé ${e} roky v ${t} ${n}`,position1:"první",position2:"druhý",position3:"třetí",position4:"čtvrtý",position5:"pátý","position-1":"poslední",day:"den",weekday:"pracovní den","weekend day":"víkendový den",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Opakovat událost",Cancel:"Zrušit",Save:"Uložit",Frequency:"Frekvence",Every:"Každý",DAILYintervalUnit:"den (dny) ",WEEKLYintervalUnit:"týden (týdny)",MONTHLYintervalUnit:"měsíc (měsíce) ",YEARLYintervalUnit:"rok (roky)",Each:"Každý","On the":"Dne","End repeat":"Ukončit opakování","time(s)":"krát"},RecurrenceDaysCombo:{day:"den",weekday:"pracovní den","weekend day":"víkendový den"},RecurrencePositionsCombo:{position1:"první",position2:"druhý",position3:"třetí",position4:"čtvrtý",position5:"pátý","position-1":"poslední"},RecurrenceStopConditionCombo:{Never:"Nikdy",After:"Po","On date":"Dne"},RecurrenceFrequencyCombo:{None:"Bez opakování",Daily:"Denně",Weekly:"Týdně",Monthly:"Měsíčně",Yearly:"Ročně"},RecurrenceCombo:{None:"Žádný",Custom:"Vlastní..."},Summary:{"Summary for":e=>`Shrnutí pro ${e}`},ScheduleRangeCombo:{completeview:"Celý harmonogram",currentview:"Viditelný harmonogram",daterange:"Rozsah dat",completedata:"Dokončit harmonogram (pro všechny události)"},SchedulerExportDialog:{"Schedule range":"Rozsah harmonogramu","Export from":"Od","Export to":"Do"},ExcelExporter:{"No resource assigned":"Žádný přiřazený zdroj"},CrudManagerView:{serverResponseLabel:"Odezva serveru:"},DurationColumn:{Duration:"Doba trvání"}},M=r.publishLocale(T),f={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",ConstraintTypePicker:{none:"Žádný",muststarton:"Musí začít",mustfinishon:"Musí skončit",startnoearlierthan:"Nespouštět dříve než",startnolaterthan:"Nespouštět později než",finishnoearlierthan:"Nedokončovat dříve než",finishnolaterthan:"Nedokončovat později než"},CalendarField:{"Default calendar":"Výchozí kalendář"},TaskEditorBase:{Information:"Informace",Save:"Uložit",Cancel:"Zrušit",Delete:"Vymazat",calculateMask:"Výpočet...",saveError:"Nelze uložit. Nejprve prosím opravte chyby",repeatingInfo:"Zobrazení opakující se události",editRepeating:"Upravit"},TaskEdit:{"Edit task":"Upravit úkol",ConfirmDeletionTitle:"Potvrdit výmaz",ConfirmDeletionMessage:"Opravdu chcete událost vymazat?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Obecné",Name:"Název",Resources:"Zdroje","% complete":"% hotovo",Duration:"Doba trvání",Start:"Začátek",Finish:"Konec",Effort:"Úsilí",Preamble:"Preambule",Postamble:"Postambule"},GeneralTab:{labelWidth:"6.5em",General:"Obecné",Name:"Název","% complete":"% hotovo",Duration:"Doba trvání",Start:"Začátek",Finish:"Konec",Effort:"Úsilí",Dates:"Data"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Pokročilý",Calendar:"Kalendář","Scheduling mode":"Režim plánování","Effort driven":"Řízený úsilím","Manually scheduled":"Manuálně naplánováno","Constraint type":"Typ překážky","Constraint date":"Datum překážky",Inactive:"Neaktivní","Ignore resource calendar":"Ignorovat zdrojový kalendář"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Pokročilý",Calendar:"Kalendář","Scheduling mode":"Režim plánování","Effort driven":"Řízený úsilím","Manually scheduled":"Manuálně naplánovaný","Constraint type":"Typ překážky","Constraint date":"Datum překážky",Constraint:"Překážka",Rollup:"Shrnout",Inactive:"Neaktivní","Ignore resource calendar":"Ignorovat zdrojový kalendář"},DependencyTab:{Predecessors:"Předchůdci",Successors:"Následovníci",ID:"ID",Name:"Název",Type:"Typ",Lag:"Prodlení ",cyclicDependency:"Cyklická závislost",invalidDependency:"Neplatná závislost"},NotesTab:{Notes:"Poznámky"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Zdroje",Resource:"Zdroje",Units:"Jednotky"},RecurrenceTab:{title:"Opakovat"},SchedulingModePicker:{Normal:"Normální","Fixed Duration":"Fixní doba trvání","Fixed Units":"Fixní jednotky","Fixed Effort":"Fixní úsilí"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} z {available}</span> přiděleno',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} z {available}</span> přiděleno',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} z {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} z {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Dne {startDate}<br><span class="{cls}">{allocated} z {available}</span> přiděleno:<br>{assignments}',plusMore:"+{value} více"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> přiděleno',barTipOnDate:'<b>{event}</b> dne {startDate}<br><span class="{cls}">{allocated}</span> přiděleno',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} z {available}</span> přiděleno:<br>{assignments}',groupBarTipOnDate:'Dne {startDate}<br><span class="{cls}">{allocated} z {available}</span> přiděleno:<br>{assignments}',plusMore:"+{value} další",nameColumnText:"Zdroj / Událost"},SchedulingIssueResolutionPopup:{"Cancel changes":"Zrušit změnu a nic nedělat",schedulingConflict:"Konflikt plánování",emptyCalendar:"Chyba konfigurace kalendáře",cycle:"Cyklus plánování",Apply:"Použít"},CycleResolutionPopup:{dependencyLabel:"Vyberte závislost, prosím:",invalidDependencyLabel:"Jsou zde neplatné závislosti, které je třeba vyřešit:"},DependencyEdit:{Active:"Aktivní"},SchedulerProBase:{propagating:"Výpočet projektu",storePopulation:"Načítání dat",finalizing:"Dokončování výsledků"},EventSegments:{splitEvent:"Rozdělit událost",renameSegment:"Přejmenovat"},NestedEvents:{deNestingNotAllowed:"Odstranění vnoření není povoleno",nestingNotAllowed:"Vnoření není povoleno"},VersionGrid:{compare:"Porovnat",description:"Popis",occurredAt:"Stalo se v",rename:"Přejmenovat",restore:"Obnovit",stopComparing:"Zastavit porovnávání"},Versions:{entityNames:{TaskModel:"úkol",AssignmentModel:"pověření",DependencyModel:"odkaz",ProjectModel:"projekt",ResourceModel:"zdroj",other:"objekt"},entityNamesPlural:{TaskModel:"úkoly",AssignmentModel:"přiřazení",DependencyModel:"odkazy",ProjectModel:"projekty",ResourceModel:"zdroje",other:"objekty"},transactionDescriptions:{update:"Změna {n} {entities}",add:"Přidáno {n} {entities}",remove:"Odebráno {n} {entities}",move:"Přesunuto {n} {entities}",mixed:"Změna {n} {entities}"},addEntity:"Přidán {type} **{name}**",removeEntity:"Odebrán {type} **{name}**",updateEntity:"Změněn {type} **{name}**",moveEntity:"Přesunut {type} **{name}** from {from} to {to}",addDependency:"Přidán odkaz z **{from}** do **{to}**",removeDependency:"Odebrán odkaz z **{from}** do **{to}**",updateDependency:"Upraven odkaz z **{from}** do **{to}**",addAssignment:"Přiřazen **{resource}** do **{event}**",removeAssignment:"Odebráno přiřazení **{resource}** z **{event}**",updateAssignment:"Upraveno přiřazení **{resource}** do **{event}**",noChanges:"Beze změn",nullValue:"žádný",versionDateFormat:"M/D/YYYY h:mm a",undid:"Zrušit změny",redid:"Opakovat změny",editedTask:"Upravené vlastnosti úlohy",deletedTask:"Smazaná úloha",movedTask:"Přesunutá úloha",movedTasks:"Přesunuté úlohy"}},O=r.publishLocale(f),S={localeName:"Cs",localeDesc:"Česky",localeCode:"cs",Object:{Save:"Uložit"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ignorovat zdrojový kalendář"},InactiveColumn:{Inactive:"Neaktivní"},AddNewColumn:{"New Column":"Nov sloupec"},CalendarColumn:{Calendar:"Kalendář"},EarlyStartDateColumn:{"Early Start":"Brzký začátek"},EarlyEndDateColumn:{"Early End":"Brzký konec"},LateStartDateColumn:{"Late Start":"Pozdní začátek"},LateEndDateColumn:{"Late End":"Pozdní konec"},TotalSlackColumn:{"Total Slack":"Celkový počet"},ConstraintDateColumn:{"Constraint Date":"Datum překážky"},ConstraintTypeColumn:{"Constraint Type":"Typ překážky"},DeadlineDateColumn:{Deadline:"Termín"},DependencyColumn:{"Invalid dependency":"Neplatná závislost"},DurationColumn:{Duration:"Doba trvání"},EffortColumn:{Effort:"Úsilí"},EndDateColumn:{Finish:"Konec"},EventModeColumn:{"Event mode":"Režim události",Manual:"Manuální",Auto:"Automatický"},ManuallyScheduledColumn:{"Manually scheduled":"Manuálně naplánováno"},MilestoneColumn:{Milestone:"Milník"},NameColumn:{Name:"Název"},NoteColumn:{Note:"Poznámka"},PercentDoneColumn:{"% Done":"% hotovo"},PredecessorColumn:{Predecessors:"Předchůdci"},ResourceAssignmentColumn:{"Assigned Resources":"Přidělené zdroje","more resources":"další zdroje"},RollupColumn:{Rollup:"Posunout"},SchedulingModeColumn:{"Scheduling Mode":"Režim plánování"},SequenceColumn:{Sequence:"Sekvence"},ShowInTimelineColumn:{"Show in timeline":"Zobrazit na časové ose"},StartDateColumn:{Start:"Začátek"},SuccessorColumn:{Successors:"Následovníci"},TaskCopyPaste:{copyTask:"Kopírovat",cutTask:"Vyjmout",pasteTask:"Vložit"},WBSColumn:{WBS:"Struktura pracovního rozkladu",renumber:"Přečíslovat"},DependencyField:{invalidDependencyFormat:"Neplatný format závislosti"},ProjectLines:{"Project Start":"Začátek projektu","Project End":"Konec projektu"},TaskTooltip:{Start:"Začátek",End:"Konec",Duration:"Doba trvání",Complete:"Dokončit"},AssignmentGrid:{Name:"Název zdroje",Units:"Jednotky",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Upravit",Indent:"Vnitřní",Outdent:"Vnější","Convert to milestone":"Převést na milník",Add:"Přidat...","New task":"Nový úkol","New milestone":"Nový milník","Task above":"Úkol výše","Task below":"Úkol níže","Delete task":"Vymazat",Milestone:"Milník","Sub-task":"Dílčí úkol",Successor:"Následník",Predecessor:"Předchůdce",changeRejected:"Nástroj pro plánování zamítl změny",linkTasks:"Přidat závislosti",unlinkTasks:"Odebrat závislosti"},EventSegments:{splitTask:"Rozdělit úkol"},Indicators:{earlyDates:"Brzký začátek/konec",lateDates:"Pozdní začátek/konec",Start:"Začátek",End:"Konec",deadlineDate:"Termín"},Versions:{indented:"S odsazením",outdented:"Vystouplý",cut:"Vyříznout",pasted:"Vložený",deletedTasks:"Smazané úkoly"}},P=r.publishLocale(S);if(typeof l.exports=="object"&&typeof i=="object"){var j=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,a)&&a!==n&&Object.defineProperty(e,a,{get:()=>t[a],enumerable:!(o=Object.getOwnPropertyDescriptor(t,a))||o.enumerable});return e};l.exports=j(l.exports,i)}return l.exports});
