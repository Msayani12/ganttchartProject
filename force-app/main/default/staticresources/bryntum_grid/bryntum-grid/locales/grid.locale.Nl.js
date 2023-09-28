/*!
 *
 * Bryntum Grid 5.5.2 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(i,n){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var d=n(),p=l?exports:i;for(var g in d)p[g]=d[g]}})(typeof self<"u"?self:void 0,()=>{var i={},n={exports:i},l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,u=(e,a,r)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,v=(e,a)=>{for(var r in a)l(e,r,{get:a[r],enumerable:!0})},b=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of p(a))!g.call(e,t)&&t!==r&&l(e,t,{get:()=>a[t],enumerable:!(o=d(a,t))||o.enumerable});return e},f=e=>b(l({},"__esModule",{value:!0}),e),h=(e,a,r)=>(u(e,typeof a!="symbol"?a+"":a,r),r),m={};v(m,{default:()=>y}),n.exports=f(m);var s=class{static mergeLocales(...e){let a={};return e.forEach(r=>{Object.keys(r).forEach(o=>{typeof r[o]=="object"?a[o]={...a[o],...r[o]}:a[o]=r[o]})}),a}static trimLocale(e,a){let r=(o,t)=>{e[o]&&(t?e[o][t]&&delete e[o][t]:delete e[o])};Object.keys(a).forEach(o=>{Object.keys(a[o]).length>0?Object.keys(a[o]).forEach(t=>r(o,t)):r(o)})}static normalizeLocale(e,a){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=e||a.name:a.localeName=e}else a=e;let r={};if(a.name||a.locale)r=Object.assign({localeName:a.name},a.locale),a.desc&&(r.localeDesc=a.desc),a.code&&(r.localeCode=a.code),a.path&&(r.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);r=Object.assign({},a)}for(let o of["name","desc","code","path"])r[o]&&delete r[o];if(!r.localeName)throw new Error("Locale name can not be empty");return r}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||s.localeName}static get locale(){return s.localeName&&this.locales[s.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,a){let{locales:r}=globalThis.bryntum,o=s.normalizeLocale(e,a),{localeName:t}=o;return!r[t]||a===!0?r[t]=o:r[t]=this.mergeLocales(r[t]||{},o||{}),r[t]}},c=s;h(c,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},c._$name="LocaleHelper";var k={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",Object:{Yes:"Ja",No:"Nee",Cancel:"Annuleren",Ok:"OK",Week:"Week"},ColorPicker:{noColor:"Geen kleur"},Combo:{noResults:"Geen resultaten",recordNotCommitted:"Record kan niet worden toegevoegd",addNewValue:e=>`${e} toevoegen`},FilePicker:{file:"Vijl"},Field:{badInput:"Ongeldige veldwaarde",patternMismatch:"Waarde moet overeenkomen met een specifiek patroon",rangeOverflow:e=>`Waarde moet kleiner zijn dan of gelijk aan ${e.max}`,rangeUnderflow:e=>`Waarde moet groter zijn dan of gelijk aan ${e.min}`,stepMismatch:"Waarde moet bij de stap passen",tooLong:"Waarde moet korter zijn",tooShort:"Waarde moet langer zijn",typeMismatch:"Waarde moet een speciaal formaat hebben",valueMissing:"Dit veld is verplicht",invalidValue:"Ongeldige veldwaarde",minimumValueViolation:"Minimale waarde schending",maximumValueViolation:"Maximale waarde schending",fieldRequired:"Dit veld is verplicht",validateFilter:"Waarde moet worden geselecteerd in de lijst"},DateField:{invalidDate:"Ongeldige datuminvoer"},DatePicker:{gotoPrevYear:"Ga naar vorig jaar",gotoPrevMonth:"Ga naar vorige maand",gotoNextMonth:"Ga naar volgende maand",gotoNextYear:"Ga naar volgend jaar"},NumberFormat:{locale:"nl",currency:"EUR"},DurationField:{invalidUnit:"Ongeldige eenheid"},TimeField:{invalidTime:"Ongeldige tijdsinvoer"},TimePicker:{hour:"Uur",minute:"Minuut",second:"Seconde"},List:{loading:"Laden...",selectAll:"Alles selecteren"},GridBase:{loadMask:"Laden...",syncMask:"Bezig met opslaan..."},PagingToolbar:{firstPage:"Ga naar de eerste pagina",prevPage:"Ga naar de vorige pagina",page:"Pagina",nextPage:"Ga naar de volgende pagina",lastPage:"Ga naar de laatste pagina",reload:"Laad huidige pagina opnieuw",noRecords:"Geen rijen om weer te geven",pageCountTemplate:e=>`van ${e.lastPage}`,summaryTemplate:e=>`Records ${e.start} - ${e.end} van ${e.allCount} worden weergegeven`},PanelCollapser:{Collapse:"Klap in",Expand:"Klap uit"},Popup:{close:"Sluiten"},UndoRedo:{Undo:"Ongedaan maken",Redo:"Opnieuw doen",UndoLastAction:"Maak de laatste actie ongedaan",RedoLastAction:"Herhaal de laatste ongedaan gemaakte actie",NoActions:"Geen items om ongedaan te maken"},FieldFilterPicker:{equals:"gelijk",doesNotEqual:"niet gelijk",isEmpty:"is leeg",isNotEmpty:"is niet leeg",contains:"bevat",doesNotContain:"bevat geen",startsWith:"begint met",endsWith:"eindigt met",isOneOf:"is een van",isNotOneOf:"is niet een van",isGreaterThan:"is groter dan",isLessThan:"is kleiner dan",isGreaterThanOrEqualTo:"is groter of gelijk aan",isLessThanOrEqualTo:"is kleiner of gelijk aan",isBetween:"zit tussen",isNotBetween:"zit niet tussen",isBefore:"is voor",isAfter:"is na",isToday:"is vandaag",isTomorrow:"is morgen",isYesterday:"is gisteren",isThisWeek:"is deze week",isNextWeek:"is volgende week",isLastWeek:"is afgelopen week",isThisMonth:"is deze maand",isNextMonth:"is volgende maand",isLastMonth:"is vorige maand",isThisYear:"is dit jaar",isNextYear:"is volgend jaar",isLastYear:"is vorige jaar",isYearToDate:"is dit jaar tot vandaag",isTrue:"is waar",isFalse:"is niet waar",selectAProperty:"Selecteer een veld",selectAnOperator:"Selecteer een operator",caseSensitive:"Hoofdletter gevoelig",and:"en",dateFormat:"D/M/YYYY",selectOneOrMoreValues:"Selecteer een of meer waarden",enterAValue:"Voer een waarde in",enterANumber:"Voer een getal in",selectADate:"Selecteer een datum"},FieldFilterPickerGroup:{addFilter:"Voeg filter toe"},DateHelper:{locale:"nl",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"ms",plural:"ms",abbrev:"ms"},{single:"seconde",plural:"seconden",abbrev:"s"},{single:"minuut",plural:"minuten",abbrev:"m"},{single:"uur",plural:"uren",abbrev:"u"},{single:"dag",plural:"dagen",abbrev:"d"},{single:"week",plural:"weken",abbrev:"w"},{single:"maand",plural:"maanden",abbrev:"ma"},{single:"kwartaal",plural:"kwartalen",abbrev:"kw"},{single:"jaar",plural:"jaren",abbrev:"j"},{single:"decennium",plural:"decennia",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["u"],["d"],["w","wk"],["ma","mnd","m"],["k","kwar","kwt","kw"],["j","jr"],["dec"]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>e}},x=c.publishLocale(k),w=new String,j={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",ColumnPicker:{column:"Kolom",columnsMenu:"Kolommen",hideColumn:"Verberg Kolom",hideColumnShort:"Verberg",newColumns:"Nieuwe kolommen"},Filter:{applyFilter:"Pas filter toe",filter:"Filter",editFilter:"Wijzig filter",on:"Aan",before:"Voor",after:"Na",equals:"Is gelijk",lessThan:"Minder dan",moreThan:"Meer dan",removeFilter:"Verwijder filter",disableFilter:"Uitschakelen filter"},FilterBar:{enableFilterBar:"Maak filterbalk zichtbaar",disableFilterBar:"Verberg filterbalk"},Group:{group:"Groepeer",groupAscending:"Groepeer oplopend",groupDescending:"Groepeer aflopend",groupAscendingShort:"Oplopend",groupDescendingShort:"Aflopend",stopGrouping:"Maak groepering ongedaan",stopGroupingShort:"Maak ongedaan"},HeaderMenu:{moveBefore:e=>`Verplaatsen naar voor "${e}"`,moveAfter:e=>`Verplaatsen naar na "${e}"`,collapseColumn:"Kolom inklappen",expandColumn:"Kolom uitklappen"},ColumnRename:{rename:"Hernoemen"},MergeCells:{mergeCells:"Cellen samenvoegen",menuTooltip:"Met deze kolom sortering cellen met dezelfde waarde samenvoegen"},Search:{searchForValue:"Zoek op term"},Sort:{sort:"Sorteer",sortAscending:"Sorteer oplopend",sortDescending:"Sorteer aflopend",multiSort:"Meerdere sorteringen",removeSorter:"Verwijder sortering",addSortAscending:"Voeg oplopende sortering toe",addSortDescending:"Voeg aflopende sortering toe",toggleSortAscending:"Sorteer oplopend",toggleSortDescending:"Sorteer aflopend",sortAscendingShort:"Oplopend",sortDescendingShort:"Aflopend",removeSorterShort:"Verwijder",addSortAscendingShort:"+ Oplopend",addSortDescendingShort:"+ Aflopend"},Split:{split:"Gesplitst",unsplit:"Ongeplitst",horizontally:"Horizontaal",vertically:"Verticaal",both:"Beide"},Column:{columnLabel:e=>`${e.text?`${e.text} kolom. `:""}SPATIEBALK voor contextmenu${e.sortable?", ENTER om te sorteren":""}`,cellLabel:w},Checkbox:{toggleRowSelect:"Rijselectie wisselen",toggleSelection:"Toggle selectie van volledige dataset"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`rating : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Laden mislukt!",syncFailedMessage:"Gegevenssynchronisatie is mislukt!",unspecifiedFailure:"Niet-gespecificeerde fout",networkFailure:"Netwerk fout",parseFailure:"Kan server response niet parsen",serverResponse:"Server reactie:",noRows:"Geen rijen om weer te geven",moveColumnLeft:"Plaats naar het linker kader",moveColumnRight:"Plaats naar het rechter kader",moveColumnTo:e=>`Kolom verplaatsen naar ${e}`},CellMenu:{removeRow:"Verwijder"},RowCopyPaste:{copyRecord:"Kopieer",cutRecord:"Knip",pasteRecord:"Plak",rows:"rijen",row:"row"},CellCopyPaste:{copy:"Kopieer",cut:"Knip",paste:"Plak"},PdfExport:{"Waiting for response from server":"Wachten op antwoord van server...","Export failed":"Export mislukt","Server error":"Serverfout","Generating pages":"Pagina's genereren...","Click to abort":"Annuleren"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Instellingen exporteren",export:"Exporteren",exporterType:"Paginering beheren",cancel:"Annuleren",fileFormat:"Bestandsformaat",rows:"Rijen",alignRows:"Rijen uitlijnen",columns:"Kolommen",paperFormat:"Papier formaat",orientation:"Oriëntatatie",repeatHeader:"Herhaal koptekst"},ExportRowsCombo:{all:"Alle rijen",visible:"Zichtbare rijen"},ExportOrientationCombo:{portrait:"Staand",landscape:"Liggend"},SinglePageExporter:{singlepage:"Enkele pagina"},MultiPageExporter:{multipage:"Meerdere pagina's",exportingPage:({currentPage:e,totalPages:a})=>`Exporteren van de pagina ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Meerdere pagina's (verticaal)",exportingPage:({currentPage:e,totalPages:a})=>`Exporteren van de pagina ${e}/${a}`},RowExpander:{loading:"Bezig met laden",expand:"Klap uit",collapse:"Klap in"},TreeGroup:{group:"Groeperen op",stopGrouping:"Stop groeperen",stopGroupingThisColumn:"Groeperen opheffen voor deze kolom"}},y=c.publishLocale(j);if(typeof n.exports=="object"&&typeof i=="object"){var P=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,t)&&t!==r&&Object.defineProperty(e,t,{get:()=>a[t],enumerable:!(o=Object.getOwnPropertyDescriptor(a,t))||o.enumerable});return e};n.exports=P(n.exports,i)}return n.exports});
