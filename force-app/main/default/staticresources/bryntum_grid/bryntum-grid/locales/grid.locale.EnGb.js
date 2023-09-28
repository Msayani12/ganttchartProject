/*!
 *
 * Bryntum Grid 5.5.2 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(i,l){var n=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var c=l(),p=n?exports:i;for(var d in c)p[d]=c[d]}})(typeof self<"u"?self:void 0,()=>{var i={},l={exports:i},n=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,m=(e,o,t)=>o in e?n(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,h=(e,o)=>{for(var t in o)n(e,t,{get:o[t],enumerable:!0})},b=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of p(o))!d.call(e,r)&&r!==t&&n(e,r,{get:()=>o[r],enumerable:!(a=c(o,r))||a.enumerable});return e},f=e=>b(n({},"__esModule",{value:!0}),e),v=(e,o,t)=>(m(e,typeof o!="symbol"?o+"":o,t),t),g={};h(g,{default:()=>x}),l.exports=f(g);var s=class{static mergeLocales(...e){let o={};return e.forEach(t=>{Object.keys(t).forEach(a=>{typeof t[a]=="object"?o[a]={...o[a],...t[a]}:o[a]=t[a]})}),o}static trimLocale(e,o){let t=(a,r)=>{e[a]&&(r?e[a][r]&&delete e[a][r]:delete e[a])};Object.keys(o).forEach(a=>{Object.keys(o[a]).length>0?Object.keys(o[a]).forEach(r=>t(a,r)):t(a)})}static normalizeLocale(e,o){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=e||o.name:o.localeName=e}else o=e;let t={};if(o.name||o.locale)t=Object.assign({localeName:o.name},o.locale),o.desc&&(t.localeDesc=o.desc),o.code&&(t.localeCode=o.code),o.path&&(t.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);t=Object.assign({},o)}for(let a of["name","desc","code","path"])t[a]&&delete t[a];if(!t.localeName)throw new Error("Locale name can not be empty");return t}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||s.localeName}static get locale(){return s.localeName&&this.locales[s.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,o){let{locales:t}=globalThis.bryntum,a=s.normalizeLocale(e,o),{localeName:r}=a;return!t[r]||o===!0?t[r]=a:t[r]=this.mergeLocales(t[r]||{},a||{}),t[r]}},u=s;v(u,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},u._$name="LocaleHelper";var y={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",Object:{Yes:"Yes",No:"No",Cancel:"Cancel",Ok:"OK",Week:"Week"},ColorPicker:{noColor:"No colour"},Combo:{noResults:"No results",recordNotCommitted:"Record could not be added",addNewValue:e=>`Add ${e}`},FilePicker:{file:"File"},Field:{badInput:"Invalid field value",patternMismatch:"Value should match a specific pattern",rangeOverflow:e=>`Value must be less than or equal to ${e.max}`,rangeUnderflow:e=>`Value must be greater than or equal to ${e.min}`,stepMismatch:"Value should fit the step",tooLong:"Value should be shorter",tooShort:"Value should be longer",typeMismatch:"Value is required to be in a special format",valueMissing:"This field is required",invalidValue:"Invalid field value",minimumValueViolation:"Minimum value violation",maximumValueViolation:"Maximum value violation",fieldRequired:"This field is required",validateFilter:"Value must be selected from the list"},DateField:{invalidDate:"Invalid date input"},DatePicker:{gotoPrevYear:"Go to previous year",gotoPrevMonth:"Go to previous month",gotoNextMonth:"Go to next month",gotoNextYear:"Go to next year"},NumberFormat:{locale:"en-GB",currency:"GBP"},DurationField:{invalidUnit:"Invalid unit"},TimeField:{invalidTime:"Invalid time input"},TimePicker:{hour:"Hour",minute:"Minute",second:"Second"},List:{loading:"Loading...",selectAll:"Select All"},GridBase:{loadMask:"Loading...",syncMask:"Saving changes, please wait..."},PagingToolbar:{firstPage:"Go to first page",prevPage:"Go to previous page",page:"Page",nextPage:"Go to next page",lastPage:"Go to last page",reload:"Reload current page",noRecords:"No records to display",pageCountTemplate:e=>`of ${e.lastPage}`,summaryTemplate:e=>`Displaying records ${e.start} - ${e.end} of ${e.allCount}`},PanelCollapser:{Collapse:"Collapse",Expand:"Expand"},Popup:{close:"Close Popup"},UndoRedo:{Undo:"Undo",Redo:"Redo",UndoLastAction:"Undo last action",RedoLastAction:"Redo last undone action",NoActions:"No items in the undo queue"},FieldFilterPicker:{equals:"equals",doesNotEqual:"does not equal",isEmpty:"is empty",isNotEmpty:"is not empty",contains:"contains",doesNotContain:"does not contain",startsWith:"starts with",endsWith:"ends with",isOneOf:"is one of",isNotOneOf:"is not one of",isGreaterThan:"is greater than",isLessThan:"is less than",isGreaterThanOrEqualTo:"is greater than or equal to",isLessThanOrEqualTo:"is less than or equal to",isBetween:"is between",isNotBetween:"is not between",isBefore:"is before",isAfter:"is after",isToday:"is today",isTomorrow:"is tomorrow",isYesterday:"is yesterday",isThisWeek:"is this week",isNextWeek:"is next week",isLastWeek:"is last week",isThisMonth:"is this month",isNextMonth:"is next month",isLastMonth:"is last month",isThisYear:"is this year",isNextYear:"is next year",isLastYear:"is last year",isYearToDate:"is year to date",isTrue:"is true",isFalse:"is false",selectAProperty:"Select a property",selectAnOperator:"Select an operator",caseSensitive:"Case-sensitive",and:"and",dateFormat:"D/M/YY",selectOneOrMoreValues:"Select one or more values",enterAValue:"Enter a value",enterANumber:"Enter a number",selectADate:"Select a date"},FieldFilterPickerGroup:{addFilter:"Add filter"},DateHelper:{locale:"en-GB",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisecond",plural:"ms",abbrev:"ms"},{single:"second",plural:"seconds",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"hour",plural:"hours",abbrev:"h"},{single:"day",plural:"days",abbrev:"d"},{single:"week",plural:"weeks",abbrev:"w"},{single:"month",plural:"months",abbrev:"mon"},{single:"quarter",plural:"quarters",abbrev:"q"},{single:"year",plural:"years",abbrev:"yr"},{single:"decade",plural:"decades",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"],["dec"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm A",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let o=["11","12","13"].find(a=>e.endsWith(a)),t="th";if(!o){let a=e[e.length-1];t={1:"st",2:"nd",3:"rd"}[a]||"th"}return e+t}}},P=u.publishLocale(y),w=new String,C={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",ColumnPicker:{column:"Column",columnsMenu:"Columns",hideColumn:"Hide column",hideColumnShort:"Hide",newColumns:"New columns"},Filter:{applyFilter:"Apply filter",filter:"Filter",editFilter:"Edit filter",on:"On",before:"Before",after:"After",equals:"Equals",lessThan:"Less than",moreThan:"More than",removeFilter:"Remove filter",disableFilter:"Disable filter"},FilterBar:{enableFilterBar:"Show filter bar",disableFilterBar:"Hide filter bar"},Group:{group:"Group",groupAscending:"Group ascending",groupDescending:"Group descending",groupAscendingShort:"Ascending",groupDescendingShort:"Descending",stopGrouping:"Stop grouping",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Move before "${e}"`,moveAfter:e=>`Move after "${e}"`,collapseColumn:"Collapse column",expandColumn:"Expand column"},ColumnRename:{rename:"Rename"},MergeCells:{mergeCells:"Merge cells",menuTooltip:"Merge cells with same value when sorted by this column"},Search:{searchForValue:"Search for value"},Sort:{sort:"Sort",sortAscending:"Sort ascending",sortDescending:"Sort descending",multiSort:"Multi sort",removeSorter:"Remove sorter",addSortAscending:"Add ascending sorter",addSortDescending:"Add descending sorter",toggleSortAscending:"Change to ascending",toggleSortDescending:"Change to descending",sortAscendingShort:"Ascending",sortDescendingShort:"Descending",removeSorterShort:"Remove",addSortAscendingShort:"+ Ascending",addSortDescendingShort:"+ Descending"},Split:{split:"Split",unsplit:"Unsplit",horizontally:"Horizontally",vertically:"Vertically",both:"Both"},Column:{columnLabel:e=>`${e.text?`${e.text} column. `:""}SPACE for context menu${e.sortable?", ENTER to sort":""}`,cellLabel:w},Checkbox:{toggleRowSelect:"Toggle row selection",toggleSelection:"Toggle selection of entire dataset"},RatingColumn:{cellLabel:e=>{var o;return`${e.text?e.text:""} ${(o=e.location)!=null&&o.record?`rating : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Data loading failed!",syncFailedMessage:"Data synchronisation failed!",unspecifiedFailure:"Unspecified failure",networkFailure:"Network error",parseFailure:"Failed to parse server response",serverResponse:"Server response:",noRows:"No records to display",moveColumnLeft:"Move to left section",moveColumnRight:"Move to right section",moveColumnTo:e=>`Move column to ${e}`},CellMenu:{removeRow:"Delete"},RowCopyPaste:{copyRecord:"Copy",cutRecord:"Cut",pasteRecord:"Paste",rows:"rows",row:"row"},CellCopyPaste:{copy:"Copy",cut:"Cut",paste:"Paste"},PdfExport:{"Waiting for response from server":"Waiting for response from server...","Export failed":"Export failed","Server error":"Server error","Generating pages":"Generating pages...","Click to abort":"Cancel"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Export settings",export:"Export",exporterType:"Control pagination",cancel:"Cancel",fileFormat:"File format",rows:"Rows",alignRows:"Align rows",columns:"Columns",paperFormat:"Paper format",orientation:"Orientation",repeatHeader:"Repeat header"},ExportRowsCombo:{all:"All rows",visible:"Visible rows"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Landscape"},SinglePageExporter:{singlepage:"Single page"},MultiPageExporter:{multipage:"Multiple pages",exportingPage:({currentPage:e,totalPages:o})=>`Exporting page ${e}/${o}`},MultiPageVerticalExporter:{multipagevertical:"Multiple pages (vertical)",exportingPage:({currentPage:e,totalPages:o})=>`Exporting page ${e}/${o}`},RowExpander:{loading:"Loading",expand:"Expand",collapse:"Collapse"},TreeGroup:{group:"Group by",stopGrouping:"Stop grouping",stopGroupingThisColumn:"Ungroup column"}},x=u.publishLocale(C);if(typeof l.exports=="object"&&typeof i=="object"){var S=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Object.getOwnPropertyNames(o))!Object.prototype.hasOwnProperty.call(e,r)&&r!==t&&Object.defineProperty(e,r,{get:()=>o[r],enumerable:!(a=Object.getOwnPropertyDescriptor(o,r))||a.enumerable});return e};l.exports=S(l.exports,i)}return l.exports});
