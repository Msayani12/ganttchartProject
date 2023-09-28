/*!
 *
 * Bryntum Scheduler Pro 5.5.1 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,l){var i=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var c=l(),g=i?exports:s;for(var p in c)g[p]=c[p]}})(typeof self<"u"?self:void 0,()=>{var s={},l={exports:s},i=Object.defineProperty,c=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of g(t))!p.call(e,n)&&n!==a&&i(e,n,{get:()=>t[n],enumerable:!(r=c(t,n))||r.enumerable});return e},f=e=>b(i({},"__esModule",{value:!0}),e),k=(e,t,a)=>(u(e,typeof t!="symbol"?t+"":t,a),a),m={};v(m,{default:()=>A}),l.exports=f(m);var d=class{static mergeLocales(...e){let t={};return e.forEach(a=>{Object.keys(a).forEach(r=>{typeof a[r]=="object"?t[r]={...t[r],...a[r]}:t[r]=a[r]})}),t}static trimLocale(e,t){let a=(r,n)=>{e[r]&&(n?e[r][n]&&delete e[r][n]:delete e[r])};Object.keys(t).forEach(r=>{Object.keys(t[r]).length>0?Object.keys(t[r]).forEach(n=>a(r,n)):a(r)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let r of["name","desc","code","path"])a[r]&&delete a[r];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:a}=globalThis.bryntum,r=d.normalizeLocale(e,t),{localeName:n}=r;return!a[n]||t===!0?a[n]=r:a[n]=this.mergeLocales(a[n]||{},r||{}),a[n]}},o=d;k(o,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},o._$name="LocaleHelper";var y={localeName:"SvSE",localeDesc:"Svenska",localeCode:"sv-SE",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Ta bort beroende"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Avaktivera beroende"},CycleEffectDescription:{descriptionTpl:"En cyklisk sekvens upptäcktes av följande uppgifter: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:"Kalender “{0}” innehåller inga arbetstidsintervall."},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Använd 24-timmarskalender (måndag-fredag)."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Använd 8-timmarskalender  (måndag-fredag 08:00-12:00, 13:00-17:00)"},ConflictEffectDescription:{descriptionTpl:"En schemaläggningskonflikt har uppstått, {0} är oförenlig med {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Projektets startdatum {0}",endDateDescriptionTpl:"Projektets slutdatum {0}"},DependencyType:{long:["Start-Till-Start","Start-Till-Avslut","Avslut-Till-Start","Avslut-Till-Avslut"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manuellt planerade "{2}" tvingar dess underaktiviteter att inte starta tidigare än den {0}',endDescriptionTpl:'Manuellt planerade "{2}" tvingar dess underaktiviteter att inte sluta senare än den {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Inaktivera manuell planering för "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Beroende ({2}) från "{3}" till "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Ta bort beroende från "{1}" till "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Avaktivera beroende från "{1}" till "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Aktivitet "{2}" {3} {0} villkor',endDateDescriptionTpl:'Aktivitet "{2}" {3} {1} villkor',constraintTypeTpl:{startnoearlierthan:"Starta-tidigast",finishnoearlierthan:"Avsluta-tidigast",muststarton:"Måste-starta",mustfinishon:"Måste-avslutas",startnolaterthan:"Starta-senast",finishnolaterthan:"Avsluta-senast"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Ta bort "{1}" villkoret för aktiviteten "{0}"'}},F=o.publishLocale(y),h={localeName:"SvSE",localeDesc:"Svenska",localeCode:"sv-SE",Object:{Yes:"Ja",No:"Nej",Cancel:"Avbryt",Ok:"OK",Week:"Vecka"},ColorPicker:{noColor:"Ingen färg"},Combo:{noResults:"Inga resultat",recordNotCommitted:"Post kunde inte läggas till",addNewValue:e=>`Lägg till ${e}`},FilePicker:{file:"Fil"},Field:{badInput:"Ogiltigt värde",patternMismatch:"Värdet ska matcha ett specifikt mönster",rangeOverflow:e=>`Värdet måste vara mindre än eller lika med ${e.max}`,rangeUnderflow:e=>`Värdet måste vara större än eller lika med ${e.min}`,stepMismatch:"Värdet bör passa steget",tooLong:"Värdet för långt",tooShort:"Värdet för kort",typeMismatch:"Värdet är inte i förväntat format",valueMissing:"Detta fält är obligatoriskt",invalidValue:"Ogiltigt värde",minimumValueViolation:"För lågt värde",maximumValueViolation:"För högt värde",fieldRequired:"Detta fält är obligatoriskt",validateFilter:"Värdet måste väljas från listan"},DateField:{invalidDate:"Ogiltigt datum"},DatePicker:{gotoPrevYear:"Gå till föregående år",gotoPrevMonth:"Gå till föregående månad",gotoNextMonth:"Gå till nästa månad",gotoNextYear:"Gå till nästa år"},NumberFormat:{locale:"sv-SE",currency:"SEK"},DurationField:{invalidUnit:"Ogiltig enhet"},TimeField:{invalidTime:"Ogiltig tid"},TimePicker:{hour:"Timme",minute:"Minut",second:"sekund"},List:{loading:"Laddar...",selectAll:"Välj alla"},GridBase:{loadMask:"Laddar...",syncMask:"Sparar ändringar, vänligen vänta..."},PagingToolbar:{firstPage:"Gå till första sidan",prevPage:"Gå till föregående sida",page:"Sida",nextPage:"Gå till nästa sida",lastPage:"Gå till sista sidan",reload:"Ladda om den aktuella sidan",noRecords:"Inga rader att visa",pageCountTemplate:e=>`av ${e.lastPage}`,summaryTemplate:e=>`Visar poster ${e.start} - ${e.end} av ${e.allCount}`},PanelCollapser:{Collapse:"Fäll ihop",Expand:"Expandera"},Popup:{close:"Stäng"},UndoRedo:{Undo:"Ångra",Redo:"Gör om",UndoLastAction:"Ångra senaste åtgärden",RedoLastAction:"Gör om senast ångrade åtgärden",NoActions:"Inga åtgärder inspelade"},FieldFilterPicker:{equals:"är lika med",doesNotEqual:"är inte lika med",isEmpty:"är tom",isNotEmpty:"är inte tom",contains:"innehåller",doesNotContain:"innehåller inte",startsWith:"börjar med",endsWith:"slutar med",isOneOf:"är en av",isNotOneOf:"är inte en av",isGreaterThan:"är större än",isLessThan:"är mindre än",isGreaterThanOrEqualTo:"är större än eller lika med",isLessThanOrEqualTo:"är mindre än eller lika med",isBetween:"är mellan",isNotBetween:"är inte mellan",isBefore:"är före",isAfter:"är efter",isToday:"är idag",isTomorrow:"är imorgon",isYesterday:"är igår",isThisWeek:"är denna vecka",isNextWeek:"är nästa vecka",isLastWeek:"är föregående vecka",isThisMonth:"är denna månad",isNextMonth:"är nästa månad",isLastMonth:"är föregående månad",isThisYear:"är i år",isNextYear:"är nästa år",isLastYear:"är föregående år",isYearToDate:"är i år fram till idag",isTrue:"är sant",isFalse:"är falskt",selectAProperty:"Välj ett fält",selectAnOperator:"Välj en jämförelseoperator",caseSensitive:"Skiftlägeskänslig",and:"och",dateFormat:"YYYY-MM-DD",selectOneOrMoreValues:"Välj ett eller flera värden",enterAValue:"Ange ett värde",enterANumber:"Ange ett nummer",selectADate:"Välj ett datum"},FieldFilterPickerGroup:{addFilter:"Lägg till filter"},DateHelper:{locale:"sv-SE",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisekund",plural:"millisekunder",abbrev:"ms"},{single:"sekund",plural:"sekunder",abbrev:"s"},{single:"minut",plural:"minuter",abbrev:"min"},{single:"timme",plural:"timmar",abbrev:"tim"},{single:"dag",plural:"dagar",abbrev:"d"},{single:"vecka",plural:"vecka",abbrev:"v"},{single:"månad",plural:"månader",abbrev:"mån"},{single:"kvartal",plural:"kvartal",abbrev:"kv"},{single:"år",plural:"år",abbrev:"år"},{single:"årtionde",plural:"årtionden",abbrev:"årtionden"}],unitAbbreviations:[["ms","mil"],["s","sek"],["m","min"],["t","tim","h"],["d"],["v","ve"],["må","mån"],["kv","kva"],[],[]],parsers:{L:"YYYY-MM-DD",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>{let t=e[e.length-1];return e+(e!=="11"&&e!=="12"&&(t==="1"||t==="2")?"a":"e")}}},M=o.publishLocale(h),S=new String,T={localeName:"SvSE",localeDesc:"Svenska",localeCode:"sv-SE",ColumnPicker:{column:"Kolumn",columnsMenu:"Kolumner",hideColumn:"Dölj kolumn",hideColumnShort:"Dölj",newColumns:"Nya kolumner"},Filter:{applyFilter:"Använd filter",filter:"Filter",editFilter:"Redigera filter",on:"På",before:"Före",after:"Efter",equals:"Lika med",lessThan:"Mindre än",moreThan:"Större än",removeFilter:"Ta bort filter",disableFilter:"Inaktivera filter"},FilterBar:{enableFilterBar:"Visa filterrad",disableFilterBar:"Dölj filterrad"},Group:{group:"Gruppera",groupAscending:"Gruppera stigande",groupDescending:"Gruppera fallande",groupAscendingShort:"Stigande",groupDescendingShort:"Fallande",stopGrouping:"Sluta gruppera",stopGroupingShort:"Sluta"},HeaderMenu:{moveBefore:e=>`Flytta före "${e}"`,moveAfter:e=>`Flytta efter "${e}"`,collapseColumn:"Expandera kolumn",expandColumn:"Fäll ihop kolumn"},ColumnRename:{rename:"Byt namn"},MergeCells:{mergeCells:"Slå ihop celler",menuTooltip:"Slå ihop celler när kolumnen är sorterad"},Search:{searchForValue:"Sök efter värde"},Sort:{sort:"Sortera",sortAscending:"Sortera stigande",sortDescending:"Sortera fallande",multiSort:"Multisortering",removeSorter:"Ta bort sorterare",addSortAscending:"Lägg till stigande",addSortDescending:"Lägg till fallande",toggleSortAscending:"Ändra till stigande",toggleSortDescending:"Ändra till fallande",sortAscendingShort:"Stigande",sortDescendingShort:"Fallande",removeSorterShort:"Ta bort",addSortAscendingShort:"+ Stigande",addSortDescendingShort:"+ Fallande"},Split:{split:"Dela",unsplit:"Odelat",horizontally:"Horisontellt",vertically:"Vertikalt",both:"Båda"},Column:{columnLabel:e=>`${e.text?`${e.text} kolumn. `:""}SPACE för snabbmenyn${e.sortable?", ENTER för att sortera":""}`,cellLabel:S},Checkbox:{toggleRowSelect:"Växla radval",toggleSelection:"Växla val av hela datamängden"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`rating : ${e.location.record.get(e.field)||0} || 0`:""}`}},GridBase:{loadFailedMessage:"Ett fel har uppstått, vänligen försök igen!",syncFailedMessage:"Datasynkronisering misslyckades!",unspecifiedFailure:"Ospecificerat fel",networkFailure:"Nätverksfel",parseFailure:"Det gick inte att bearbeta serversvaret",serverResponse:"Serversvar:",noRows:"Inga rader att visa",moveColumnLeft:"Flytta till vänstra sektionen",moveColumnRight:"Flytta till högra sektionen",moveColumnTo:e=>`Flytta kolumn till ${e}`},CellMenu:{removeRow:"Ta bort"},RowCopyPaste:{copyRecord:"Kopiera",cutRecord:"Klipp ut",pasteRecord:"Klistra in",rows:"rader",row:"rad"},CellCopyPaste:{copy:"Kopiera",cut:"Klipp",paste:"Klistra"},PdfExport:{"Waiting for response from server":"Väntar på svar från servern...","Export failed":"Export misslyckades","Server error":"Serverfel","Generating pages":"Genererar sidor...","Click to abort":"Avbryt"},ExportDialog:{width:"40em",labelWidth:"13em",exportSettings:"Exportera inställningar",export:"Exportera",exporterType:"Styra sidbrytningarna",cancel:"Avbryt",fileFormat:"Filformat",rows:"Кader",alignRows:"Anpassa raderna",columns:"Kolumner",paperFormat:"Pappersformat",orientation:"Orientering",repeatHeader:"Upprepa rubriken"},ExportRowsCombo:{all:"Alla rader",visible:"Synliga rader"},ExportOrientationCombo:{portrait:"Stående",landscape:"Liggande"},SinglePageExporter:{singlepage:"En sida"},MultiPageExporter:{multipage:"Flera sidor",exportingPage:({currentPage:e,totalPages:t})=>`Exporterar sidan ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Flera sidor (lodrätt)",exportingPage:({currentPage:e,totalPages:t})=>`Exporterar sidan ${e}/${t}`},RowExpander:{loading:"Laddar",expand:"Expandera",collapse:"Fäll ihop"},TreeGroup:{group:"Gruppera efter",stopGrouping:"Avsluta gruppering",stopGroupingThisColumn:"Avgruppera kolumn"}},R=o.publishLocale(T),D={localeName:"SvSE",localeDesc:"Svenska",localeCode:"sv-SE",Object:{newEvent:"Ny händelse"},ResourceInfoColumn:{eventCountText:e=>e+" händelse"+(e!==1?"r":"")},Dependencies:{from:"Från",to:"Till",valid:"Giltig",invalid:"Ogiltig"},DependencyType:{SS:"SS",SF:"SA",FS:"AS",FF:"AA",StartToStart:"Start-Till-Start",StartToEnd:"Start-Till-Avslut",EndToStart:"Avslut-Till-Start",EndToEnd:"Avslut-Till-Avslut",short:["SS","SA","AS","AA"],long:["Start-Till-Start","Start-Till-Avslut","Avslut-Till-Start","Avslut-Till-Avslut"]},DependencyEdit:{From:"Från",To:"Till",Type:"Typ",Lag:"Fördröjning","Edit dependency":"Ändra beroende",Save:"Spara",Delete:"Ta bort",Cancel:"Avbryt",StartToStart:"Start till Start",StartToEnd:"Start till Slut",EndToStart:"Slut till Start",EndToEnd:"Slut till Slut"},EventEdit:{Name:"Namn",Resource:"Resurs",Start:"Start",End:"Slut",Save:"Spara",Delete:"Ta bort",Cancel:"Avbryt","Edit event":"Redigera bokning",Repeat:"Upprepa"},EventDrag:{eventOverlapsExisting:"Överlappar befintlig händelse för den här resursen",noDropOutsideTimeline:"Händelsen kan inte släppas utanför tidsaxeln"},SchedulerBase:{"Add event":"Lägg till bokning","Delete event":"Ta bort bokning","Unassign event":"Ta bort resurskoppling",color:"Färg"},TimeAxisHeaderMenu:{pickZoomLevel:"Välj zoomnivå",activeDateRange:"Aktivt datumintervall",startText:"Start datum",endText:"Slut datum",todayText:"I dag"},EventCopyPaste:{copyEvent:"Kopiera bokning",cutEvent:"Klipp ut bokning",pasteEvent:"Klistra in bokning"},EventFilter:{filterEvents:"Filtrera händelser",byName:"Med namn"},TimeRanges:{showCurrentTimeLine:"Visa aktuell tidslinje"},PresetManager:{secondAndMinute:{name:"Sekunder"},minuteAndHour:{topDateFormat:"ddd, DD/MM, h:mm"},hourAndDay:{topDateFormat:"ddd DD/MM",name:"Dag"},day:{name:"Dag"},week:{name:"Vecka/timmar"},dayAndWeek:{name:"Vecka/dagar"},dayAndMonth:{name:"Månad"},weekAndDay:{displayDateFormat:"HH:mm",name:"Vecka"},weekAndMonth:{name:"Veckor"},weekAndDayLetter:{name:"Veckor/veckodagar"},weekDateAndMonth:{name:"Månader/veckor"},monthAndYear:{name:"Månader"},year:{name:"År"},manyYears:{name:"Flera år"}},RecurrenceConfirmationPopup:{"delete-title":"Borttagning av bokning","delete-all-message":"Vill du ta bort alla instanser av denna bokning?","delete-further-message":"Vill du ta bort denna och alla framtida instanser av denna bokning, eller bara denna?","delete-further-btn-text":"Ta bort alla framtida","delete-only-this-btn-text":"Ta bort endast denna","update-title":"Redigering av upprepad bokning","update-all-message":"Vill du ändra alla instanser av denna bokning?","update-further-message":"Vill du ändra på endast denna instans, eller denna och alla framtida?","update-further-btn-text":"Alla framtida","update-only-this-btn-text":"Endast denna",Yes:"Ja",Cancel:"Avbryt",width:500},RecurrenceLegend:{" and ":" och ",Daily:"Daglig","Weekly on {1}":({days:e})=>`Veckovis på ${e}`,"Monthly on {1}":({days:e})=>`Måntaligen den ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Årligen ${e} ${t}`,"Every {0} days":({interval:e})=>`Var ${e} dag`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Var ${e} vecka på ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Var ${e} månad ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`Var ${e} år på ${t} av ${a}`,position1:"den första",position2:"den andra",position3:"den tredje",position4:"den fjärde",position5:"den femte","position-1":"den sista",day:"dagen",weekday:"veckodagen","weekend day":"dagen i veckoslut",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Upprepa bokning",Cancel:"Avbryt",Save:"Spara",Frequency:"Frekvens",Every:"Var",DAILYintervalUnit:"dag",WEEKLYintervalUnit:"vecka",MONTHLYintervalUnit:"månad",YEARLYintervalUnit:"år",Each:"Varje","On the":"På den","End repeat":"Avsluta upprepning","time(s)":"upprepningar"},RecurrenceDaysCombo:{day:"dagen",weekday:"veckodagen","weekend day":"dagen i veckoslutet"},RecurrencePositionsCombo:{position1:"första",position2:"andra",position3:"tredje",position4:"fjärde",position5:"femte","position-1":"sista"},RecurrenceStopConditionCombo:{Never:"Aldrig",After:"Efter","On date":"På datum"},RecurrenceFrequencyCombo:{None:"Ingen upprepning",Daily:"Daglig",Weekly:"Veckovis",Monthly:"Månatlig",Yearly:"Årlig"},RecurrenceCombo:{None:"Ingen",Custom:"Anpassad..."},Summary:{"Summary for":e=>`Sammanfattning för ${e}`},ScheduleRangeCombo:{completeview:"Hela schemat",currentview:"Aktuell vy",daterange:"Datumintervall",completedata:"Hela schemat (alla aktiviteter)"},SchedulerExportDialog:{"Schedule range":"Tidsintervall","Export from":"Från","Export to":"Till"},ExcelExporter:{"No resource assigned":"Ingen resurs tilldelad"},CrudManagerView:{serverResponseLabel:"Serversvar:"},DurationColumn:{Duration:"Varaktighet"}},x=o.publishLocale(D),E={localeName:"SvSE",localeDesc:"Svenska",localeCode:"sv-SE",ConstraintTypePicker:{none:"Ingen",assoonaspossible:"Så snart som möjligt",aslateaspossible:"Så sent som möjligt",muststarton:"Måste starta",mustfinishon:"Måste avslutas",startnoearlierthan:"Starta tidigast",startnolaterthan:"Starta senast",finishnoearlierthan:"Avsluta tidigast",finishnolaterthan:"Avsluta senast"},SchedulingDirectionPicker:{Forward:"Framåt",Backward:"Bakåt",inheritedFrom:"Ärvd från",enforcedBy:"Tvingad av"},CalendarField:{"Default calendar":"Standardkalender"},TaskEditorBase:{Information:"Information",Save:"Spara",Cancel:"Avbryt",Delete:"Ta bort",calculateMask:"Beräknar...",saveError:"Kan inte spara, vänligen korrigera fel först",repeatingInfo:"Visar upprepad bokning",editRepeating:"Redigera"},TaskEdit:{"Edit task":"Redigera uppgift",ConfirmDeletionTitle:"Bekräfta borttagning",ConfirmDeletionMessage:"Är du säker på att du vill ta bort händelsen?"},GanttTaskEditor:{editorWidth:"46em"},SchedulerTaskEditor:{editorWidth:"36em"},SchedulerGeneralTab:{labelWidth:"8em",General:"Allmänt",Name:"Namn",Resources:"Resurser","% complete":"% Färdig",Duration:"Varaktighet",Start:"Start",Finish:"Slut",Effort:"Arbetsinsats",Preamble:"Inledning",Postamble:"Avslutning"},GeneralTab:{labelWidth:"8em",General:"Allmänt",Name:"Namn","% complete":"% Färdig",Duration:"Varaktighet",Start:"Start",Finish:"Slut",Effort:"Arbetsinsats",Dates:"Datum"},SchedulerAdvancedTab:{labelWidth:"11em",Advanced:"Avancerat",Calendar:"Kalender","Scheduling mode":"Aktivitetstyp","Effort driven":"Insatsdriven","Manually scheduled":"Manuellt planerad","Constraint type":"Villkorstyp","Constraint date":"Måldatum",Inactive:"Inaktiv","Ignore resource calendar":"Ignorera resurskalender"},AdvancedTab:{labelWidth:"11em",Advanced:"Avancerat",Calendar:"Kalender","Scheduling mode":"Aktivitetstyp","Effort driven":"Insatsdriven","Manually scheduled":"Manuellt planerad","Constraint type":"Villkorstyp","Constraint date":"Måldatum",Constraint:"Villkor",Rollup:"Upplyft",Inactive:"Inaktiv","Ignore resource calendar":"Ignorera resurskalender","Scheduling direction":"Planeringsriktning"},DependencyTab:{Predecessors:"Föregångare",Successors:"Efterföljare",ID:"ID",Name:"Namn",Type:"Typ",Lag:"Fördröjning",cyclicDependency:"Cykliskt beroende",invalidDependency:"Ogiltigt beroende"},NotesTab:{Notes:"Anteckning"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Resurser",Resource:"Resurs",Units:"Enheter"},RecurrenceTab:{title:"Upprepa"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Fast varaktighet","Fixed Units":"Fasta enheter","Fixed Effort":"Fast arbete"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade',barTipOnDate:'<b>{resource}</b> på {startDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} av {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade:<br>{assignments}',groupBarTipOnDate:'On {startDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade:<br>{assignments}',plusMore:"+{value} more"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> allokerade',barTipOnDate:'<b>{event}</b> på {startDate}<br><span class="{cls}">{allocated}</span> allokerade',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade:<br>{assignments}',groupBarTipOnDate:'På {startDate}<br><span class="{cls}">{allocated} av {available}</span> allokerade:<br>{assignments}',plusMore:"+{value} more",nameColumnText:"Resurs / Bokning"},SchedulingIssueResolutionPopup:{"Cancel changes":"Avbryt ändringen",schedulingConflict:"Schemaläggningskonflikt",emptyCalendar:"Felaktig kalendarkonfiguration",cycle:"Cyklisk sekvens",Apply:"Utför"},CycleResolutionPopup:{dependencyLabel:"Välj ett beroende att ändra enligt nedanstående:",invalidDependencyLabel:"Det finns ogiltiga beroenden som måste korrigeras:"},DependencyEdit:{Active:"Aktiv"},SchedulerProBase:{propagating:"Beräknar",storePopulation:"Laddar data",finalizing:"Slutför"},EventSegments:{splitEvent:"Dela bokning",renameSegment:"Byt namn"},NestedEvents:{deNestingNotAllowed:"Av-nästling ej tillåten",nestingNotAllowed:"Nästling ej tillåten"},VersionGrid:{compare:"Jämför",description:"Beskrivning",occurredAt:"Inträffade vid",rename:"Döp om",restore:"Återställa",stopComparing:"Sluta jämföra"},Versions:{entityNames:{TaskModel:"aktivitet",AssignmentModel:"tilldelning",DependencyModel:"beroende",ProjectModel:"projekt",ResourceModel:"resurs",other:"objekt"},entityNamesPlural:{TaskModel:"aktiviteter",AssignmentModel:"tilldelningar",DependencyModel:"beroenden",ProjectModel:"projekt",ResourceModel:"resurser",other:"objekt"},transactionDescriptions:{update:"Ändrade {n} {entities}",add:"La till {n} {entities}",remove:"Tog bort {n} {entities}",move:"Flyttade {n} {entities}",mixed:"Uppdaterade {n} {entities}"},addEntity:"La till {type} {name}",removeEntity:"Tog bort {type} {name}",updateEntity:"Ändrade {type} {name}",moveEntity:"Flyttade {type} {name} från {from} till {to}",addDependency:"La till beroende från {from} till {to}",removeDependency:"Tog bort bereonde från {from} till {to}",updateDependency:"Ändrade beroende från {from} till {to}",addAssignment:"Tilldelade {resource} till {event}",removeAssignment:"Tog bort tilldelning av {resource} från {event}",updateAssignment:"Ändrade tilldelning av {resource} till {event}",noChanges:"Inga ändringar",nullValue:"ingen",versionDateFormat:"YYYY-MM-DD HH:mm",undid:"Ångrade ändringar",redid:"Gjorde om ändringar",editedTask:"Redigerade en aktivitet",deletedTask:"Tog bort en aktivitet",movedTask:"Flyttade en aktivitet",movedTasks:"Flyttade aktiviteter"}},A=o.publishLocale(E);if(typeof l.exports=="object"&&typeof s=="object"){var C=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==a&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(r=Object.getOwnPropertyDescriptor(t,n))||r.enumerable});return e};l.exports=C(l.exports,s)}return l.exports});
