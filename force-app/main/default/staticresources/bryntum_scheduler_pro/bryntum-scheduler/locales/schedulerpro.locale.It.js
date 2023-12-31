/*!
 *
 * Bryntum Scheduler Pro 5.5.1 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,t){var r=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],t);else if(typeof module=="object"&&module.exports)module.exports=t();else{var c=t(),m=r?exports:s;for(var p in c)m[p]=c[p]}})(typeof self<"u"?self:void 0,()=>{var s={},t={exports:s},r=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(e,a,o)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a)r(e,o,{get:a[o],enumerable:!0})},f=(e,a,o,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of m(a))!p.call(e,n)&&n!==o&&r(e,n,{get:()=>a[n],enumerable:!(i=c(a,n))||i.enumerable});return e},b=e=>f(r({},"__esModule",{value:!0}),e),y=(e,a,o)=>(g(e,typeof a!="symbol"?a+"":a,o),o),u={};v(u,{default:()=>E}),t.exports=b(u);var d=class{static mergeLocales(...e){let a={};return e.forEach(o=>{Object.keys(o).forEach(i=>{typeof o[i]=="object"?a[i]={...a[i],...o[i]}:a[i]=o[i]})}),a}static trimLocale(e,a){let o=(i,n)=>{e[i]&&(n?e[i][n]&&delete e[i][n]:delete e[i])};Object.keys(a).forEach(i=>{Object.keys(a[i]).length>0?Object.keys(a[i]).forEach(n=>o(i,n)):o(i)})}static normalizeLocale(e,a){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=e||a.name:a.localeName=e}else a=e;let o={};if(a.name||a.locale)o=Object.assign({localeName:a.name},a.locale),a.desc&&(o.localeDesc=a.desc),a.code&&(o.localeCode=a.code),a.path&&(o.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);o=Object.assign({},a)}for(let i of["name","desc","code","path"])o[i]&&delete o[i];if(!o.localeName)throw new Error("Locale name can not be empty");return o}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,a){let{locales:o}=globalThis.bryntum,i=d.normalizeLocale(e,a),{localeName:n}=i;return!o[n]||a===!0?o[n]=i:o[n]=this.mergeLocales(o[n]||{},i||{}),o[n]}},l=d;y(l,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},l._$name="LocaleHelper";var D={localeName:"It",localeDesc:"Italiano",localeCode:"it",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Rimuovi dipendenza"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Disattiva dipendenza"},CycleEffectDescription:{descriptionTpl:"È stato trovato un ciclo, formato da: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'Il calendario "{0}" non fornisce alcun intervallo di lavoro.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Usa il calendario di 24 ore con sabati e domeniche non lavorativi."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Usa il calendario di 8 ore (08:00-12:00, 13:00-17:00) con sabati e domeniche non lavorativi."},ConflictEffectDescription:{descriptionTpl:"È stato trovato un conflitto di programmazione: {0} è in conflitto con {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Data d’inizio del progetto {0}",endDateDescriptionTpl:"Data di fine del progetto {0}"},DependencyType:{long:["Inizio-Inizio","Inizio-Fine","Fine-Inizio","Fine-Fine"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'"{2}" programmato manualmente forza l’avvio degli elementi secondari a non prima di {0}',endDescriptionTpl:'"{2}" programmato manualmente forza la fine degli elementi secondari entro e non oltre {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Disabilita programmazione manuale per "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Dipendenza ({2}) da "{3}" a "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Rimuovi dipendenza da "{1}" a "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Disattiva dipendenza da "{1}" a "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Vincolo compito "{2}" {3} {0}',endDateDescriptionTpl:'Vincolo compito "{2}" {3} {1}',constraintTypeTpl:{startnoearlierthan:"Inizio non prima di",finishnoearlierthan:"Fine non prima di",muststarton:"Deve iniziare il",mustfinishon:"Deve finire il",startnolaterthan:"Inizio non oltre",finishnolaterthan:"Fine non oltre"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Rimuovi vincolo "{1}" del compito "{0}"'}},I=l.publishLocale(D),h={localeName:"It",localeDesc:"Italiano",localeCode:"it",Object:{Yes:"Sì",No:"No",Cancel:"Annulla",Ok:"OK",Week:"Settimana"},ColorPicker:{noColor:"Nessun colore"},Combo:{noResults:"Nessun risultato",recordNotCommitted:"Non è stato possibile aggiungere il record",addNewValue:e=>`Aggiungi ${e}`},FilePicker:{file:"File"},Field:{badInput:"Valore del campo non valido",patternMismatch:"Il valore deve corrispondere a un modello specifico",rangeOverflow:e=>`Il valore deve essere uguale o inferiore a ${e.max}`,rangeUnderflow:e=>`Il valore deve essere uguale o superiore a ${e.min}`,stepMismatch:"Il valore deve adattarsi al passo",tooLong:"Il valore deve essere più breve",tooShort:"Il valore deve essere più lungo",typeMismatch:"Il valore deve essere in un formato speciale",valueMissing:"Questo campo è obbligatorio",invalidValue:"Valore del campo non valido",minimumValueViolation:"Violazione del valore minimo",maximumValueViolation:"Violazione del valore massimo",fieldRequired:"Questo campo è obbligatorio",validateFilter:"Il valore deve essere selezionato dall’elenco"},DateField:{invalidDate:"Inserimento data non valido"},DatePicker:{gotoPrevYear:"Vai all’anno precedente",gotoPrevMonth:"Vai al mese precedente",gotoNextMonth:"Vai al mese successivo",gotoNextYear:"Vai all’anno successivo"},NumberFormat:{locale:"it",currency:"EUR"},DurationField:{invalidUnit:"Unità non valida"},TimeField:{invalidTime:"Inserimento ora non valido"},TimePicker:{hour:"Ora",minute:"Minuto",second:"Secondo"},List:{loading:"Caricamento...",selectAll:"Seleziona tutto"},GridBase:{loadMask:"Caricamento...",syncMask:"Salvataggio delle modifiche, attendere prego..."},PagingToolbar:{firstPage:"Vai alla prima pagina",prevPage:"Vai alla pagina precedente",page:"Pagina",nextPage:"Vai alla pagina successiva",lastPage:"Vai all’ultima pagina",reload:"Ricarica la pagina corrente",noRecords:"Nessun record da visualizzare",pageCountTemplate:e=>`di ${e.lastPage}`,summaryTemplate:e=>`Visualizzazione record ${e.start} - ${e.end} di ${e.allCount}`},PanelCollapser:{Collapse:"Comprimi",Expand:"Espandi"},Popup:{close:"Chiudi popup"},UndoRedo:{Undo:"Annulla",Redo:"Ripeti",UndoLastAction:"Annulla l’ultima azione",RedoLastAction:"Ripeti l’ultima azione annullata",NoActions:"Nessun elemento nella coda di annullamento"},FieldFilterPicker:{equals:"uguale",doesNotEqual:"non uguale",isEmpty:"è vuoto",isNotEmpty:"non è vuoto",contains:"contiene",doesNotContain:"non contiene",startsWith:"inizia con",endsWith:"finisce con",isOneOf:"è uno di",isNotOneOf:"non è uno di",isGreaterThan:"è maggiore di",isLessThan:"è minore di",isGreaterThanOrEqualTo:"è maggiore o uguale a",isLessThanOrEqualTo:"è minore o uguale a",isBetween:"è tra",isNotBetween:"non è tra",isBefore:"è prima",isAfter:"è dopo",isToday:"è oggi",isTomorrow:"è domani",isYesterday:"è ieri",isThisWeek:"è questa settimana",isNextWeek:"è la prossima settimana",isLastWeek:"è la settimana scorsa",isThisMonth:"è questo mese",isNextMonth:"è il prossimo mese",isLastMonth:"è il mese scorso",isThisYear:"è quest'anno",isNextYear:"è l'anno prossimo",isLastYear:"è l'anno scorso",isYearToDate:"è nell'ultimo anno",isTrue:"è vero",isFalse:"è falso",selectAProperty:"Seleziona una proprietà",selectAnOperator:"Seleziona un operatore",caseSensitive:"Distingue tra maiuscole e minuscole",and:"e",dateFormat:"D/M/YY",selectOneOrMoreValues:"Seleziona uno o più valori",enterAValue:"Inserisci un valore",enterANumber:"Inserisci un numero",selectADate:"Seleziona una data"},FieldFilterPickerGroup:{addFilter:"Aggiungi filtro"},DateHelper:{locale:"it",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisecondo",plural:"millisecondi",abbrev:"ms"},{single:"secondo",plural:"secondi",abbrev:"s"},{single:"minuto",plural:"minuti",abbrev:"min"},{single:"ora",plural:"ore",abbrev:"o"},{single:"giorno",plural:"giorni",abbrev:"g"},{single:"settimana",plural:"settimane",abbrev:"sett"},{single:"mese",plural:"mesi",abbrev:"m"},{single:"trimestre",plural:"trimestri",abbrev:"trim"},{single:"anno",plural:"anni",abbrev:"a"},{single:"decennio",plural:"decenni",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","s"],["m","m"],["o","o"],["gg"],["sett","sett"],["m","m"],["trim","trim"],["a","a"],["dec"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"°"}},F=l.publishLocale(h),T=new String,z={localeName:"It",localeDesc:"Italiano",localeCode:"it",ColumnPicker:{column:"Colonna",columnsMenu:"Colonne",hideColumn:"Nascondi colonna",hideColumnShort:"Nascondi",newColumns:"Nuove colonne"},Filter:{applyFilter:"Applica filtro",filter:"Filtra",editFilter:"Modifica filtro",on:"Il",before:"Prima",after:"Dopo",equals:"Uguale",lessThan:"Meno di",moreThan:"Più di",removeFilter:"Rimuovi filtro",disableFilter:"Disabilita filtro"},FilterBar:{enableFilterBar:"Mostra barra del filtro",disableFilterBar:"Nascondi barra del filtro"},Group:{group:"Raggruppa",groupAscending:"Gruppo ascendente",groupDescending:"Gruppo discendente",groupAscendingShort:"Ascendente",groupDescendingShort:"Discendente",stopGrouping:"Interrompi raggruppamento",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Sposta prima "${e}"`,moveAfter:e=>`Sposta dopo "${e}"`,collapseColumn:"Riduci colonna",expandColumn:"Espandi colonna"},ColumnRename:{rename:"Rinomina"},MergeCells:{mergeCells:"Unisci celle",menuTooltip:"Unisci celle con lo stesso valore se ordinate da questa colonna"},Search:{searchForValue:"Cerca valore"},Sort:{sort:"Ordina",sortAscending:"Ordine ascendente",sortDescending:"Ordine discendente",multiSort:"Ordinamento multiplo",removeSorter:"Rimuovi ordinatore",addSortAscending:"Aggiungi ordinatore ascendente",addSortDescending:"Aggiungi ordinatore discendente",toggleSortAscending:"Passa ad ascendente",toggleSortDescending:"Passa a discendente",sortAscendingShort:"Ascendente",sortDescendingShort:"Discendente",removeSorterShort:"Rimuovi",addSortAscendingShort:"+ Ascendente",addSortDescendingShort:"+ Discendente"},Split:{split:"Dividi",unsplit:"Unisci",horizontally:"Orizzontalmente",vertically:"Verticalmente",both:"Entrambi"},Column:{columnLabel:e=>`${e.text?`${e.text} colonna. `:""}SPAZIO per il menu contestuale${e.sortable?", INVIO per ordinare":""}`,cellLabel:T},Checkbox:{toggleRowSelect:"Passa a selezione righe",toggleSelection:"Passa a selezione di un intero set di dati"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`valutazione : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Caricamento dati non riuscito!",syncFailedMessage:"Sincronizzazione dati non riuscita!",unspecifiedFailure:"Errore non specificato",networkFailure:"Errore di rete",parseFailure:"Impossibile interpretare la risposta del server",serverResponse:"Risposta del server:",noRows:"Nessun record da visualizzare",moveColumnLeft:"Sposta alla sezione sinistra",moveColumnRight:"Sposta alla sezione destra",moveColumnTo:e=>`Sposta colonna a ${e}`},CellMenu:{removeRow:"Elimina"},RowCopyPaste:{copyRecord:"Copia",cutRecord:"Taglia",pasteRecord:"Incolla",rows:"righe",row:"riga"},CellCopyPaste:{copy:"Copia",cut:"Taglia",paste:"Incolla"},PdfExport:{"Waiting for response from server":"In attesa della risposta dal server...","Export failed":"Esportazione non riuscita","Server error":"Errore del server","Generating pages":"Generazione pagine...","Click to abort":"Annulla"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Esporta impostazioni",export:"Esporta",exporterType:"Controllo dell’impaginazione",cancel:"Annulla",fileFormat:"Formato del file",rows:"Righe",alignRows:"Allinea righe",columns:"Colonne",paperFormat:"Formato carta",orientation:"Orientamento",repeatHeader:"Ripeti intestazione"},ExportRowsCombo:{all:"Tutte le righe",visible:"Righe visibili"},ExportOrientationCombo:{portrait:"Ritratto",landscape:"Paesaggio"},SinglePageExporter:{singlepage:"Singola pagina"},MultiPageExporter:{multipage:"Più pagine",exportingPage:({currentPage:e,totalPages:a})=>`Esportazione pagina ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Più pagine (verticale)",exportingPage:({currentPage:e,totalPages:a})=>`Esportazione pagina ${e}/${a}`},RowExpander:{loading:"Caricamento",expand:"Espandi",collapse:"Comprimi"},TreeGroup:{group:"Raggruppa per",stopGrouping:"Interrompi raggruppamento",stopGroupingThisColumn:"Elimina raggruppamento di questa colonna"}},A=l.publishLocale(z),C={localeName:"It",localeDesc:"Italiano",localeCode:"it",Object:{newEvent:"Nuovo evento"},ResourceInfoColumn:{eventCountText:e=>e+" event"+(e!==1?"i":"o")},Dependencies:{from:"Da",to:"A",valid:"Valido",invalid:"Non valido"},DependencyType:{SS:"II",SF:"IF",FS:"FI",FF:"FF",StartToStart:"Inizio-Inizio",StartToEnd:"Inizio-Fine",EndToStart:"Fine-Inizio",EndToEnd:"Fine-Fine",short:["II","IF","FI","FF"],long:["Inizio-Inizio","Inizio-Fine","Fine-Inizio","Fine-Fine"]},DependencyEdit:{From:"Da",To:"A",Type:"Tipo",Lag:"Ritardo","Edit dependency":"Modifica dipendenza",Save:"Salva",Delete:"Elimina",Cancel:"Annulla",StartToStart:"Inizio-Inizio",StartToEnd:"Inizio-Fine",EndToStart:"Fine-Inizio",EndToEnd:"Fine-Fine"},EventEdit:{Name:"Nome",Resource:"Risorsa",Start:"Inizio",End:"Fine",Save:"Salva",Delete:"Elimina",Cancel:"Annulla","Edit event":"Modifica evento",Repeat:"Ripeti"},EventDrag:{eventOverlapsExisting:"L’evento si sovrappone a un evento esistente per questa risorsa",noDropOutsideTimeline:"L’evento non può essere lasciato completamente al di fuori della linea temporale"},SchedulerBase:{"Add event":"Aggiungi evento","Delete event":"Elimina evento","Unassign event":"Annulla l’assegnazione dell’evento",color:"Colore"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Intervallo di date",startText:"Data d’inizio",endText:"Data di fine",todayText:"Oggi"},EventCopyPaste:{copyEvent:"Copia evento",cutEvent:"Taglia evento",pasteEvent:"Incolla evento"},EventFilter:{filterEvents:"Filtra attività",byName:"Per nome"},TimeRanges:{showCurrentTimeLine:"Mostra linea temporale corrente"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Secondi"},minuteAndHour:{topDateFormat:"ddd DD/MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Giorno"},day:{name:"Giorno/ore"},week:{name:"Settimana/ore"},dayAndWeek:{displayDateFormat:"ll LST",name:"Settimana/giorni"},dayAndMonth:{name:"Mese"},weekAndDay:{displayDateFormat:"ll LST",name:"Settimana"},weekAndMonth:{name:"Settimane"},weekAndDayLetter:{name:"Settimane/giorni lavorativi"},weekDateAndMonth:{name:"Mesi/settimane"},monthAndYear:{name:"Mesi"},year:{name:"Anni"},manyYears:{name:"Più anni"}},RecurrenceConfirmationPopup:{"delete-title":"Stai per eliminare un evento","delete-all-message":"Vuoi eliminare tutte le occorrenze di questo evento?","delete-further-message":"Vuoi eliminare questa e tutte le future occorrenze di questo evento, o solo l’occorrenza selezionata?","delete-further-btn-text":"Elimina tutti gli eventi futuri","delete-only-this-btn-text":"Elimina solo questo evento","update-title":"Stai per modificare un evento ricorrente","update-all-message":"Vuoi modificare tutte le occorrenze di questo evento?","update-further-message":"Vuoi modificare solo questa occorrenza dell’evento o questa e tutte le future occorrenze?","update-further-btn-text":"Tutti gli eventi futuri","update-only-this-btn-text":"Solo questo evento",Yes:"Sì",Cancel:"Annulla",width:600},RecurrenceLegend:{" and ":" e ",Daily:"Ogni giorno","Weekly on {1}":({days:e})=>`Ogni settimana il ${e}`,"Monthly on {1}":({days:e})=>`Ogni mese il ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Ogni anno il ${e} di ${a}`,"Every {0} days":({interval:e})=>`Ogni ${e} giorni`,"Every {0} weeks on {1}":({interval:e,days:a})=>`Ogni ${e} settimane il ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>`Ogni ${e} mesi il ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:o})=>`Ogni ${e} anni il ${a} di ${o}`,position1:"il primo",position2:"il secondo",position3:"il terzo",position4:"il quarto",position5:"il quinto","position-1":"l’ultimo",day:"giorno",weekday:"giorno della settimana","weekend day":"giorno del fine settimana",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Ripeti evento",Cancel:"Annulla",Save:"Salva",Frequency:"Frequenza",Every:"Ogni",DAILYintervalUnit:"giorno/i",WEEKLYintervalUnit:"settimana/e",MONTHLYintervalUnit:"mese/i",YEARLYintervalUnit:"anno/i",Each:"Ogni","On the":"Il","End repeat":"Termina ripetizione","time(s)":"volta/e"},RecurrenceDaysCombo:{day:"giorno",weekday:"giorno della settimana","weekend day":"giorno del fine settimana"},RecurrencePositionsCombo:{position1:"primo",position2:"secondo",position3:"terzo",position4:"quarto",position5:"quinto","position-1":"ultimo"},RecurrenceStopConditionCombo:{Never:"Mai",After:"Dopo","On date":"Alla data"},RecurrenceFrequencyCombo:{None:"Nessuna ripetizione",Daily:"Ogni giorno",Weekly:"Ogni settimana",Monthly:"Ogni mese",Yearly:"Ogni anno"},RecurrenceCombo:{None:"Nessuna",Custom:"Personalizza..."},Summary:{"Summary for":e=>`Riepilogo per ${e}`},ScheduleRangeCombo:{completeview:"Programma completo",currentview:"Programma visibile",daterange:"Intervallo di date",completedata:"Programma completo (per tutti gli eventi)"},SchedulerExportDialog:{"Schedule range":"Intervallo del programma","Export from":"Da","Export to":"A"},ExcelExporter:{"No resource assigned":"Nessuna risorsa assegnata"},CrudManagerView:{serverResponseLabel:"Risposta del server:"},DurationColumn:{Duration:"Durata"}},P=l.publishLocale(C),S={localeName:"It",localeDesc:"Italiano",localeCode:"it",ConstraintTypePicker:{none:"Nessuno",assoonaspossible:"Il più presto possibile",aslateaspossible:"Il più tardi possibile",muststarton:"Deve iniziare il",mustfinishon:"Deve finire il",startnoearlierthan:"Inizio non prima di",startnolaterthan:"Inizio non oltre",finishnoearlierthan:"Fine non prima di",finishnolaterthan:"Fine non oltre"},SchedulingDirectionPicker:{Forward:"Avanti",Backward:"Indietro",inheritedFrom:"Ereditato da",enforcedBy:"Impossato da"},CalendarField:{"Default calendar":"Calendario predefinito"},TaskEditorBase:{Information:"Informazioni",Save:"Salva",Cancel:"Annulla",Delete:"Elimina",calculateMask:"Calcolo...",saveError:"Impossibile salvare, correggi prima gli errori",repeatingInfo:"Visualizzare un evento ripetitivo",editRepeating:"Modifica"},TaskEdit:{"Edit task":"Modifica attività",ConfirmDeletionTitle:"Conferma eliminazione",ConfirmDeletionMessage:"Vuoi davvero eliminare l’evento?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Generale",Name:"Nome",Resources:"Risorse","% complete":"% completato",Duration:"Durata",Start:"Inizio",Finish:"Fine",Effort:"Sforzo",Preamble:"Preambolo",Postamble:"Postfazione"},GeneralTab:{labelWidth:"6.5em",General:"Generale",Name:"Nome","% complete":"% completato",Duration:"Durata",Start:"Inizio",Finish:"Fine",Effort:"Sforzo",Dates:"Date"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Avanzato",Calendar:"Calendario","Scheduling mode":"Modalità di programmazione","Effort driven":"Basato sullo sforzo","Manually scheduled":"Programmato manualmente","Constraint type":"Tipo di vincolo","Constraint date":"Data di vincolo",Inactive:"Disattivo","Ignore resource calendar":"Ignora il calendario delle risorse"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Avanzato",Calendar:"Calendario","Scheduling mode":"Modalità di programmazione","Effort driven":"Basato sullo sforzo","Manually scheduled":"Programmato manualmente","Constraint type":"Tipo di vincolo","Constraint date":"Data di vincolo",Constraint:"Vincolo",Rollup:"Rollup",Inactive:"Disattivo","Ignore resource calendar":"Ignora il calendario delle risorse","Scheduling direction":"Direzione della pianificazione"},DependencyTab:{Predecessors:"Precedenti",Successors:"Successivi",ID:"ID",Name:"Nome",Type:"Tipo",Lag:"Ritardo",cyclicDependency:"Dipendenza ciclica",invalidDependency:"Dipendenza non valida"},NotesTab:{Notes:"Note"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Risorse",Resource:"Risorsa",Units:"Unità"},RecurrenceTab:{title:"Ripeti"},SchedulingModePicker:{Normal:"Normale","Fixed Duration":"Durata fissa","Fixed Units":"Unità fisse","Fixed Effort":"Sforzo fisso"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} di {available}</span> assegnato',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} di {available}</span> assegnato',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} di {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} di {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Il {startDate}<br><span class="{cls}">{allocated} di {available}</span> assegnato:<br>{assignments}',plusMore:"altre +{value}"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> assegnato',barTipOnDate:'<b>{event}</b> il {startDate}<br><span class="{cls}">{allocated}</span> assegnato',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} di {available}</span> assegnato:<br>{assignments}',groupBarTipOnDate:'Il {startDate}<br><span class="{cls}">{allocated} di {available}</span> assegnato:<br>{assignments}',plusMore:"altre +{value}",nameColumnText:"Risorsa / Evento"},SchedulingIssueResolutionPopup:{"Cancel changes":"Annulla la modifica e non fare nulla",schedulingConflict:"Conflitto di programmazione",emptyCalendar:"Errore di configurazione calendario",cycle:"Ciclo di programmazione",Apply:"Applica"},CycleResolutionPopup:{dependencyLabel:"Seleziona una dipendenza:",invalidDependencyLabel:"Ci sono dipendenze non valide da risolvere:"},DependencyEdit:{Active:"Attiva"},SchedulerProBase:{propagating:"Calcolo progetto",storePopulation:"Caricamento dati",finalizing:"Finalizzazione risultati"},EventSegments:{splitEvent:"Dividi evento",renameSegment:"Rinomina"},NestedEvents:{deNestingNotAllowed:"Denidificazione non consentita",nestingNotAllowed:"Nidificazione non consentita"},VersionGrid:{compare:"Confronta",description:"Descrizione",occurredAt:"Si è verificato il",rename:"Rinomina",restore:"Ripristina",stopComparing:"Interrompi confronto"},Versions:{entityNames:{TaskModel:"compito",AssignmentModel:"assegnazione",DependencyModel:"link",ProjectModel:"progetto",ResourceModel:"risorsa",other:"oggetto"},entityNamesPlural:{TaskModel:"compiti",AssignmentModel:"assegnazioni",DependencyModel:"link",ProjectModel:"progetti",ResourceModel:"risorse",other:"oggetti"},transactionDescriptions:{update:"Modificate {n} {entities}",add:"Aggiunte {n} {entities}",remove:"Rimosse {n} {entities}",move:"Spostate {n} {entities}",mixed:"Modificate {n} {entities}"},addEntity:"Aggiunto {type} **{name}**",removeEntity:"Rimosso {type} **{name}**",updateEntity:"Modificato {type} **{name}**",moveEntity:"Spostato {type} **{name}** da {from} a {to}",addDependency:"Aggiunto link da **{from}** a **{to}**",removeDependency:"Rimosso link da **{from}** a **{to}**",updateDependency:"Modificato link da **{from}** a **{to}**",addAssignment:"Assegnato **{resource}** a **{event}**",removeAssignment:"Rimossa assegnazione di **{resource}** da **{event}**",updateAssignment:"Modificata assegnazione di **{resource}** a **{event}**",noChanges:"Nessuna modifica",nullValue:"nessuno",versionDateFormat:"M/D/YYYY h:mm a",undid:"Modifiche annullate",redid:"Modifiche ripristinate",editedTask:"Proprietà compito modificate",deletedTask:"Compito eliminato",movedTask:"Compito spostato",movedTasks:"Compiti spostati"}},E=l.publishLocale(S);if(typeof t.exports=="object"&&typeof s=="object"){var R=(e,a,o,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,n)&&n!==o&&Object.defineProperty(e,n,{get:()=>a[n],enumerable:!(i=Object.getOwnPropertyDescriptor(a,n))||i.enumerable});return e};t.exports=R(t.exports,s)}return t.exports});
