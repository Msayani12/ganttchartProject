/*!
 *
 * Bryntum Scheduler Pro 5.5.1 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,r){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var d=r(),u=l?exports:s;for(var p in d)u[p]=d[p]}})(typeof self<"u"?self:void 0,()=>{var s={},r={exports:s},l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of u(t))!p.call(e,n)&&n!==a&&l(e,n,{get:()=>t[n],enumerable:!(o=d(t,n))||o.enumerable});return e},h=e=>b(l({},"__esModule",{value:!0}),e),v=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a),m={};y(m,{default:()=>R}),r.exports=h(m);var c=class{static mergeLocales(...e){let t={};return e.forEach(a=>{Object.keys(a).forEach(o=>{typeof a[o]=="object"?t[o]={...t[o],...a[o]}:t[o]=a[o]})}),t}static trimLocale(e,t){let a=(o,n)=>{e[o]&&(n?e[o][n]&&delete e[o][n]:delete e[o])};Object.keys(t).forEach(o=>{Object.keys(t[o]).length>0?Object.keys(t[o]).forEach(n=>a(o,n)):a(o)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let o of["name","desc","code","path"])a[o]&&delete a[o];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:a}=globalThis.bryntum,o=c.normalizeLocale(e,t),{localeName:n}=o;return!a[n]||t===!0?a[n]=o:a[n]=this.mergeLocales(a[n]||{},o||{}),a[n]}},i=c;v(i,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},i._$name="LocaleHelper";var D={localeName:"Hi",localeDesc:"हिन्दी",localeCode:"hi",RemoveDependencyCycleEffectResolution:{descriptionTpl:"निर्भरता हटाएं"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"निर्भरता निष्क्रिय करें"},CycleEffectDescription:{descriptionTpl:"एक साइकिल मिला है, निर्माता: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" कैलेन्डर कोई कामकाजी समय अंतराल नहीं प्रदान करता है।'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"गैर-कामकाजी शनिवारों और रविवारों के साथ 24 घंटों वाला कैलेन्डर उपयोग करें।"},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"गैर-कामकाजी शनिवारों और रविवारों के साथ 8 घंटों वाला कैलेन्डर (08:00-12:00, 13:00-17:00) उपयोग करें।"},ConflictEffectDescription:{descriptionTpl:"कोई शेड्यूलिंग संघर्ष मिला है: {0}  का {1} के साथ संघर्ष हो रहा है।"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"प्रोजेक्ट आरंभ तारीख {0}",endDateDescriptionTpl:"प्रोजेक्ट अंत तारीख {0}"},DependencyType:{long:["आरंभ से आरंभ तक","आरंभ से अंत तक","अंत से आरंभ तक","अंत से अंत तक"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'मैनुअल रूप से शेड्यूल किया गया "{2}" इसके बच्चों को {0} से पहले कतई आरंभ नही करने देता है ',endDescriptionTpl:'मैनुअल रूप से शेड्यूल किया गया "{2}" इसके बच्चों को {1} से पहले कतई अंत नही करने देता है'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'"{0}" के मैनुअल शेड्यूलिंग अक्षम करें'},DependencyConstraintIntervalDescription:{descriptionTpl:'"{3}" से "{4}" पर निर्भरता ({2})'},RemoveDependencyResolution:{descriptionTpl:'"{1}" से "{2}" पर निर्भरता हटाएं'},DeactivateDependencyResolution:{descriptionTpl:'"{1}" से "{2}" पर निर्भरता निष्क्रिय करें'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'टास्क "{2}" {3} {0} बाधा',endDateDescriptionTpl:'टास्क "{2}" {3} {1} बाधा',constraintTypeTpl:{startnoearlierthan:"से पहले शुरू न हो",finishnoearlierthan:"से पहले समाप्त न हो",muststarton:"पर शुरू होना चाहिए",mustfinishon:"पर समाप्त होना चाहिए",startnolaterthan:"के बाद शुरू न हो",finishnolaterthan:"के बाद समाप्त न हो"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'टास्क "{0}" की "{1}" बाधा हटाएं'}},P=i.publishLocale(D),f={localeName:"Hi",localeDesc:"हिन्दी",localeCode:"hi",Object:{Yes:"हाँ",No:"नहीं",Cancel:"रद्द करें",Ok:"ओके",Week:"सप्ताह"},ColorPicker:{noColor:"कोई रंग नहीं"},Combo:{noResults:"कोई परिणाम नहीं",recordNotCommitted:"रिकॉर्ड जोड़ा नहीं जा सका",addNewValue:e=>`जोड़ें  ${e}`},FilePicker:{file:"फाइल"},Field:{badInput:"अमान्य फील्ड मान",patternMismatch:"मान को विशिष्ट पैटर्न के अनुरूप होना चाहिए",rangeOverflow:e=>`मान को ${e.max} से कम या बराबर होना चाहिए`,rangeUnderflow:e=>`मान को ${e.min} से अधिक या बराबर होना चाहिए `,stepMismatch:"मान इस स्टेप से फिट होना चाहिए",tooLong:"मान छोटा होना चाहिए",tooShort:"मान अधिक लंबा होना चाहिए",typeMismatch:"मान को विशेष फार्मेट में होना चाहिए",valueMissing:"यह फील्ड आवश्यक है",invalidValue:"अमान्य फील्ड मान",minimumValueViolation:"न्यूनतम मान उल्लंघन",maximumValueViolation:"अधिकतम मान उल्लंघन",fieldRequired:"यह फील्ड आवश्यक है",validateFilter:"इस सूची के लिए मान चुना जाना चाहिए"},DateField:{invalidDate:"अमान्य तारीख इनपुट"},DatePicker:{gotoPrevYear:"पिछले साल पर जाएं",gotoPrevMonth:"पिछले महीने पर जाएं",gotoNextMonth:"अगले महीने पर जाएं",gotoNextYear:"अगले साल पर जाएं"},NumberFormat:{locale:"hi",currency:"INR"},DurationField:{invalidUnit:"अमान्य इकाई"},TimeField:{invalidTime:"अमान्य समय इनपुट"},TimePicker:{hour:"साल",minute:"मिनट",second:"सेकंड"},List:{loading:"लोड कर रहा है...",selectAll:"सभी का चयन करें"},GridBase:{loadMask:"लोड कर रहा है...",syncMask:"बदलाव सहेज रहा है, कृपया प्रतीक्षा करें..."},PagingToolbar:{firstPage:"पहले पेज पर जाएं",prevPage:"पिछले पेज पर जाएं",page:"पेज",nextPage:"अगले पेज पर जाएं",lastPage:"पिछले पेज पर जाएं",reload:"वर्तमान पेज रीलोड करें",noRecords:"दर्शाने के लिए कोई रिकॉर्ड नहीं",pageCountTemplate:e=>`${e.lastPage} का`,summaryTemplate:e=>`${e.allCount} का ${e.start} - ${e.end} का रिकॉर्ड दर्शा रहा है`},PanelCollapser:{Collapse:"समेटें",Expand:"फैलाएं"},Popup:{close:"पॉपअप बंद करें"},UndoRedo:{Undo:"अनडू करें",Redo:"रीडू करें",UndoLastAction:"पिछला ऐक्शन अनडू करें",RedoLastAction:"पिछला ऐक्शन रीडू करें",NoActions:"कतार अनडू करें में कोई आइटम नहीं है"},FieldFilterPicker:{equals:"बराबर है",doesNotEqual:"बराबर नहीं है",isEmpty:"खाली है",isNotEmpty:"खाली नहीं है",contains:"शामिल है",doesNotContain:"शामिल नहीं है",startsWith:"के साथ शुरू होता है",endsWith:"के साथ अंत होता है",isOneOf:"इनमें से एक है",isNotOneOf:"इनमें से एक नहीं है",isGreaterThan:"इससे बड़ा है",isLessThan:"इससे छोटा है",isGreaterThanOrEqualTo:"इसके बराबर या बड़ा है",isLessThanOrEqualTo:"इसके बराबर या छोटा है",isBetween:"बीच में है",isNotBetween:"बीच में नहीं है",isBefore:"पहले है",isAfter:"बाद में है",isToday:"आज है",isTomorrow:"आगामी कल है",isYesterday:"बीते कल है",isThisWeek:"इस सप्ताह है",isNextWeek:"अगले सप्ताह है",isLastWeek:"पिछले सप्ताह हैं",isThisMonth:"इस माह है",isNextMonth:"अगले माह है",isLastMonth:"पिछले माह है",isThisYear:"इस साल है",isNextYear:"अगले साल है",isLastYear:"पिछले साल है",isYearToDate:"साल से आज तक है",isTrue:"सच है",isFalse:"असत्य है",selectAProperty:"कोई गुण चुनें",selectAnOperator:"कोई ऑपरेटर चुनें",caseSensitive:"केस-संवेदी",and:"और",dateFormat:"D/M/YY",selectOneOrMoreValues:"एक या अधिक मान चुनें",enterAValue:"एक मान दर्ज करें",enterANumber:"एक संख्या दर्ज करें",selectADate:"एक तारीख चुनें"},FieldFilterPickerGroup:{addFilter:"फिल्टर जोड़ें"},DateHelper:{locale:"hi",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"मिलीसेकंड",plural:"मिलीसेकंड",abbrev:"मिसे"},{single:"सेकंड",plural:"सेकंड",abbrev:"से"},{single:"मिनट",plural:"मिनट",abbrev:"मि"},{single:"घंटा",plural:"घंटे",abbrev:"घं"},{single:"दिन",plural:"दिन",abbrev:"दि"},{single:"हफ्ता",plural:"हफ्ते",abbrev:"ह"},{single:"महीना",plural:"महीने",abbrev:"माह"},{single:"तिमाही",plural:"तिमाही",abbrev:"ति"},{single:"साल",plural:"साल",abbrev:"सा"},{single:"दशक",plural:"दशक",abbrev:"द"}],unitAbbreviations:[["मिसे"],["से","से"],["मि","मि"],["घं","घं"],["दि"],["ह","ह"],["माह","माह","माह"],["ति","ति","ति"],["सा","सा"],["द"]],parsers:{L:"MM/DD/YYYY",LT:"HH:mm A",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t={1:"",2:"",3:"",4:"",6:"",7:"",8:"",9:""}[e]||"वां";return e+t}}},w=i.publishLocale(f),T=new String,E={localeName:"Hi",localeDesc:"हिन्दी",localeCode:"hi",ColumnPicker:{column:"कॉलम",columnsMenu:"कॉलम",hideColumn:"कॉलम छिपाएं",hideColumnShort:"छिपाएं",newColumns:"नए कॉलम"},Filter:{applyFilter:"फिल्टर लागू करें",filter:"फिल्टर",editFilter:"फिल्टर संपादित करें",on:"पर",before:"पहले",after:"बाद में",equals:"के बराबर",lessThan:"से कम",moreThan:"से अधिक",removeFilter:"फिल्टर हटाएं",disableFilter:"फिल्टर अक्षम करें"},FilterBar:{enableFilterBar:"फिल्टर बार दिखाएं",disableFilterBar:"फिल्टर बार छिपाएं"},Group:{group:"समूहित करें",groupAscending:"आरोही समूहित करें",groupDescending:"अवरोही समूहित करें",groupAscendingShort:"आरोही",groupDescendingShort:"अवरोही",stopGrouping:"समूहित करना बंद करें",stopGroupingShort:"बंद करें"},HeaderMenu:{moveBefore:e=>`"${e}" से पहले ले जाएं`,moveAfter:e=>`"${e}" के बाद ले जाएं`,collapseColumn:"कॉलम कोलैप्स करें",expandColumn:"कॉलम फैलाएं"},ColumnRename:{rename:"नाम बदलें"},MergeCells:{mergeCells:"सेल मर्ज करें",menuTooltip:"इस कॉलम द्वारा छांटते समय समान मान वाले सेल मर्ज करें"},Search:{searchForValue:"मान की खोज करें"},Sort:{sort:"छांटें",sortAscending:"आरोही छांटें",sortDescending:"अवरोही छांटें",multiSort:"एकाधिक छांटें",removeSorter:"छांटने वाला निकालें",addSortAscending:"आरोही छांटने वाला जोड़ें",addSortDescending:"अवरोही छांटने वाला जोड़ें",toggleSortAscending:"आरोही में बदलें",toggleSortDescending:"अवरोही में बदलें",sortAscendingShort:"आरोही",sortDescendingShort:"अवरोही",removeSorterShort:"हटाएं",addSortAscendingShort:"+ आरोही",addSortDescendingShort:"+ अवरोही"},Split:{split:"विभाजित",unsplit:"अविभाजित",horizontally:"क्षैतिजता से",vertically:"लंबवत",both:"दोनों"},Column:{columnLabel:e=>`${e.text?`${e.text} कॉलम. `:""}प्रसंग मेनू के लिए SPACE पर टैप करें${e.sortable?", सॉर्ट करने के लिए ENTER":""}`,cellLabel:T},Checkbox:{toggleRowSelect:"पंक्ति चयन टॉगल करें",toggleSelection:"पूरे डेटासेट का चयन टॉगल करें"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?` रेटिंग : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"डेटा लोडिंग विफल रहा!",syncFailedMessage:"डेटा सिक्रोनाइजेशन विफल रहा!",unspecifiedFailure:"अनिर्दिष्ट विफलता",networkFailure:"नेटवर्क त्रुटि",parseFailure:"सर्वर प्रतिक्रिया पार्स करना विफल रहा",serverResponse:"सर्वर प्रतिक्रिया:",noRows:"दर्शाने के लिए कोई रिकॉर्ड नहीं है",moveColumnLeft:"बाएं सेक्शन पर जाएं",moveColumnRight:"दाएं सेक्शन पर जाएं",moveColumnTo:e=>`कॉलम को ${e} पर ले जाएं`},CellMenu:{removeRow:"हटाएं"},RowCopyPaste:{copyRecord:"कॉपी करें",cutRecord:"कट करें",pasteRecord:"पेस्ट करें",rows:"पंक्तियां",row:"पंक्ति"},CellCopyPaste:{copy:"कॉपी करें",cut:"कट करें",paste:"पेस्ट करें"},PdfExport:{"Waiting for response from server":"सर्वर प्रतिक्रिया की प्रतीक्षा कर रहा है...","Export failed":"एक्सपोर्ट विफल रहा","Server error":"सर्वर त्रुटि","Generating pages":"पेजों को जनरेट कर रहा है...","Click to abort":"रद्द करें"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"सेटिंग्स निर्यात करें",export:"एक्सपोर्ट करें",exporterType:"पेजिनेशन नियंत्रित करें",cancel:"रद्द करें",fileFormat:"फाइल फार्मेट",rows:"पंक्तियां",alignRows:"पंक्तियां संरेखित करें",columns:"कॉलम",paperFormat:"पेपर फार्मेट",orientation:"अभिविन्यास",repeatHeader:"हेडर दोहराएं"},ExportRowsCombo:{all:"सभी पंक्तियां",visible:"दिखने वाली पंक्तियां"},ExportOrientationCombo:{portrait:"पोर्ट्रेट",landscape:"लैंडस्केप"},SinglePageExporter:{singlepage:"एकल पेज"},MultiPageExporter:{multipage:"एकाधिक पेज",exportingPage:({currentPage:e,totalPages:t})=>`निर्यात पृष्ठ ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"एकाधिक पेज (लंबवत)",exportingPage:({currentPage:e,totalPages:t})=>`निर्यात पृष्ठ ${e}/${t}`},RowExpander:{loading:"लोडिंग",expand:"फैलाएं",collapse:"समेटें"},TreeGroup:{group:"द्वारा समूह बनाएं",stopGrouping:"समूह बनाना बंद करें",stopGroupingThisColumn:"इस स्तंभ का समूह विस्थापित न करें"}},M=i.publishLocale(E),C={localeName:"Hi",localeDesc:"हिन्दी",localeCode:"hi",Object:{newEvent:"नया ईवेंट"},ResourceInfoColumn:{eventCountText:e=>e+" ईवेंट"},Dependencies:{from:"से",to:"तक",valid:"मान्य",invalid:"अमान्य"},DependencyType:{SS:"भ-भ",SF:"त-भ",FS:"भ-त",FF:"त-त",StartToStart:"आरंभ से आरंभ तक",StartToEnd:"आरंभ से अंत तक",EndToStart:"अंत से आरंभ तक",EndToEnd:"अंत से अंत तक",short:["भ-भ","त-भ","भ-त","त-त"],long:["आरंभ से आरंभ तक","आरंभ से अंत तक","अंत से आरंभ तक","अंत से अंत तक"]},DependencyEdit:{From:"से",To:"तक",Type:"प्रकार",Lag:"पिछड़ाव","Edit dependency":"निर्भरता संपादित करें",Save:"सहेजें",Delete:"हटाएं",Cancel:"रद्द करें",StartToStart:"आरंभ से आरंभ तक",StartToEnd:"आरंभ से अंत तक",EndToStart:"अंत से आरंभ तक",EndToEnd:"अंत से अंत तक"},EventEdit:{Name:"नाम",Resource:"संसाधन",Start:"आरंभ",End:"अंत",Save:"सहेजें",Delete:"हटाएं",Cancel:"रद्द करें","Edit event":"ईवेंट संपादित करें",Repeat:"दोहराएं"},EventDrag:{eventOverlapsExisting:"इवेंट इस संसाधन के लिए मौजूदा ईवेंट को ओवरलैप करता है",noDropOutsideTimeline:"इवेंट को पूरी तरह से टाइमलाइन के बाहर नहीं छोड़ा जा सकता"},SchedulerBase:{"Add event":"ईवेंट जोड़ें","Delete event":"ईवेंट हटाएं","Unassign event":"ईवेंट असाइनमेंट निकालें",color:"रंग"},TimeAxisHeaderMenu:{pickZoomLevel:"ज़ूम करें",activeDateRange:"तारीख की रेंज",startText:"आरंभ तारीख",endText:"समापन तारीख",todayText:"आज"},EventCopyPaste:{copyEvent:"ईवेंट कॉपी करें",cutEvent:"ईवेंट कट करें",pasteEvent:"ईवेंट पेस्ट करें"},EventFilter:{filterEvents:"टास्क फिल्टर करें",byName:"नाम के आधार पर"},TimeRanges:{showCurrentTimeLine:"वर्तमान टाइमलाइन दिखाएं"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"सेकंड"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"दिन"},day:{name:"दिन/घंटे"},week:{name:"सप्ताह/घंटे"},dayAndWeek:{displayDateFormat:"ll LST",name:"सप्ताह/दिन"},dayAndMonth:{name:"माह"},weekAndDay:{displayDateFormat:"ll LST",name:"सप्ताह"},weekAndMonth:{name:"सप्ताह"},weekAndDayLetter:{name:"सप्ताह/सप्ताहांत"},weekDateAndMonth:{name:"माह/सप्ताह"},monthAndYear:{name:"माह"},year:{name:"साल"},manyYears:{name:"एकाधिक साल"}},RecurrenceConfirmationPopup:{"delete-title":"आप एक ईवेंट हटा रहे हैं","delete-all-message":"क्या आप इस ईवेंट की सभी घटनाएं हटाना चाहते हैं?","delete-further-message":"क्या आप इसे और इस ईवेंट की भविष्य की सभी घटनाओं को हटाना चाहते हैं, या केवल चयनित ईवेंट को हटाना चाहते हैं?","delete-further-btn-text":"भविष्य के सभी ईवेंट हटाएं","delete-only-this-btn-text":"केवल यह ईवेंट हटाएं","update-title":"आप एक दोहराव वाले ईवेंट को बदल रहे हैं","update-all-message":"क्या आप इस ईवेंट की सभी घटनाएं हटाना चाहते हैं?","update-further-message":"क्या आप केवल इस ईवेंट की घटना को बदलना चाहते हैं, या यह और भविष्य के सभी ईवेंट बदलना चाहते हैं?","update-further-btn-text":"भविष्य के सभी ईवेंट","update-only-this-btn-text":"केवल यह ईवेंट",Yes:"हाँ",Cancel:"रद्द करें",width:600},RecurrenceLegend:{" and ":" और ",Daily:"दैनिक","Weekly on {1}":({days:e})=>`${e} पर साप्ताहिक`,"Monthly on {1}":({days:e})=>`${e} पर मासिक`,"Yearly on {1} of {2}":({days:e,months:t})=>` ${t} के ${e} सलाना`,"Every {0} days":({interval:e})=>`प्रत्येक ${e} दिनों के अंतराल पर`,"Every {0} weeks on {1}":({interval:e,days:t})=>`प्रत्येक ${e} सप्ताह के अंतराल पर ${t} को`,"Every {0} months on {1}":({interval:e,days:t})=>`प्रत्येक ${e} महीनो के अंतराल पर  ${t} को`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`प्रत्येक ${e} सालों के अंतराल पर ${a} के ${t} को`,position1:"पहला",position2:"दूसरा",position3:"तीसरा",position4:"चौथा",position5:"पांचवां","position-1":"अंतिम",day:"दिन",weekday:"सप्ताह का दिन","weekend day":"सप्ताहांत का दिन",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"ईवेंट दोहराएं",Cancel:"रद्द करें",Save:"सहेजें",Frequency:"आवृत्ति",Every:"हर",DAILYintervalUnit:"दिन",WEEKLYintervalUnit:"हफ्ता(ते)",MONTHLYintervalUnit:"महीना(ने)",YEARLYintervalUnit:"साल",Each:"प्रत्येक","On the":"पर","End repeat":"अंत दोहराव","time(s)":"बार"},RecurrenceDaysCombo:{day:"दिन",weekday:"सप्ताह का दिन","weekend day":"सप्ताहांत का दिन"},RecurrencePositionsCombo:{position1:"पहला",position2:"दूसरा",position3:"तीसरा",position4:"चौथा",position5:"पांचवां","position-1":"अंतिम"},RecurrenceStopConditionCombo:{Never:"कभी नहीं",After:"के बाद","On date":"इस तारीख को"},RecurrenceFrequencyCombo:{None:"कोई दोहराव नहीं",Daily:"दैनिक",Weekly:"साप्ताहिक",Monthly:"मासिक",Yearly:"वार्षिक"},RecurrenceCombo:{None:"कोई नहीं",Custom:"कस्टम..."},Summary:{"Summary for":e=>` ${e} का सारांश`},ScheduleRangeCombo:{completeview:"पूरा शेड्यूल",currentview:"दिखने वाला शेड्यूल",daterange:"तारीख की रेंज",completedata:"पूरा शेड्यूल(सभी ईवेंट के लिए)"},SchedulerExportDialog:{"Schedule range":"शेड्यूल रेंज","Export from":"से","Export to":"तक"},ExcelExporter:{"No resource assigned":"कोई संसाधन असाइन नहीं"},CrudManagerView:{serverResponseLabel:"सर्वर प्रतिक्रिया:"},DurationColumn:{Duration:"अवधि"}},k=i.publishLocale(C),S={localeName:"Hi",localeDesc:"हिन्दी",localeCode:"hi",ConstraintTypePicker:{none:"कोई नहीं",assoonaspossible:"जल्द से जल्द",aslateaspossible:"जितनी देर हो सके",muststarton:"पर शुरू होना चाहिए",mustfinishon:"पर समाप्त होना चाहिए",startnoearlierthan:"से पहले शुरू न हो",startnolaterthan:"के बाद शुरू न हो",finishnoearlierthan:"से पहले समाप्त न हो",finishnolaterthan:"के बाद समाप्त न हो"},SchedulingDirectionPicker:{Forward:"आगे",Backward:"पीछे",inheritedFrom:"वंशानुक्रम से",enforcedBy:"ज़बरदस्ती से"},CalendarField:{"Default calendar":"डिफॉल्ट कैलेन्डर"},TaskEditorBase:{Information:"जानकारी",Save:"सहेजें",Cancel:"रद्द करें",Delete:"हटाएं",calculateMask:"गणना कर रहा है...",saveError:"नहीं सहेज सकता है, कृपया पहले त्रुटियां सही करें",repeatingInfo:"दोहराव वाले ईवेंट को देखना",editRepeating:"संपादित करें"},TaskEdit:{"Edit task":"टास्क संपादित करें",ConfirmDeletionTitle:"हटाने की पुष्टि करें",ConfirmDeletionMessage:"क्या आप वाकई इस ईवेंट को हटाना चाहते हैं?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"33em"},SchedulerGeneralTab:{labelWidth:"6em",General:"सामान्य",Name:"नाम",Resources:"संसाधन","% complete":"% पूर्ण",Duration:"अवधि",Start:"शुरु करें",Finish:"समाप्त करें",Effort:"प्रयास",Preamble:"प्रस्तावना",Postamble:"समापन कथन"},GeneralTab:{labelWidth:"6.5em",General:"समान्य",Name:"नाम","% complete":"% पूर्ण",Duration:"अवधि",Start:"शुरु करें",Finish:"समाप्त करें",Effort:"प्रयास",Dates:"तारीखें"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"उन्नत",Calendar:"कैलेन्डर","Scheduling mode":"शेड्यूलिंग मोड","Effort driven":"प्रयास चलित","Manually scheduled":"मैनुअल रूप से शेड्यूल","Constraint type":"बाधा प्रकार","Constraint date":"बाधा की तारीख",Inactive:"निष्क्रिय","Ignore resource calendar":"संसाधन कैलेंडर नजरअंदाज करें"},AdvancedTab:{labelWidth:"11.5em",Advanced:"उन्नत",Calendar:"कैलेन्डर","Scheduling mode":"शेड्यूलिंग मोड","Effort driven":"प्रयास चलित","Manually scheduled":"मैनुअल रूप से शेड्यूल","Constraint type":"बाधा प्रकार","Constraint date":"बाधा तारीख",Constraint:"बाधा",Rollup:"रोलअप करें",Inactive:"निष्क्रिय","Ignore resource calendar":"संसाधन कैलेंडर नजरअंदाज करें","Scheduling direction":"अनुसूची दिशा"},DependencyTab:{Predecessors:"पूर्ववर्ती",Successors:"उत्तराधिकारी",ID:"ID",Name:"नाम",Type:"प्रकार",Lag:"पिछड़ाव",cyclicDependency:"चक्रीय निर्भरता",invalidDependency:"अमान्य निर्भरता"},NotesTab:{Notes:"नोट्स"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"संसाधन",Resource:"संसाधन",Units:"इकाइयां"},RecurrenceTab:{title:"दोहराएं"},SchedulingModePicker:{Normal:"सामान्य","Fixed Duration":"नियत अवधि","Fixed Units":"नियत इकाइयां","Fixed Effort":"नियत प्रयास"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{available} का {allocated}</span> आवंटित',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{available} का {allocated}</span> आवंटित',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{available} का {allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{available} का {allocated}</span> आवंटित:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}"> पर {available} का {allocated}</span> आवंटित:<br>{assignments}',plusMore:"+{value} और"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> आवंटित',barTipOnDate:'<b>{event}</b> {startDate}<br><span class="{cls}"> पर {allocated}</span> आवंटित',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{available} का {allocated}</span> आवंटित:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}"> पर {available} का {allocated}</span> आवंटित:<br>{assignments}',plusMore:"+{value} और",nameColumnText:"संसाधन / ईवेंट"},SchedulingIssueResolutionPopup:{"Cancel changes":"बदलाव रद्द करें और कुछ न करें",schedulingConflict:"शेड्यूलिंग संघर्ष",emptyCalendar:"कैलेन्डर कॉन्फिगरेशन त्रुटि",cycle:"शेड्यूलिंग चक्र",Apply:"लागू करें"},CycleResolutionPopup:{dependencyLabel:"कृपया निर्भरता को चुनें:",invalidDependencyLabel:"अमान्य निर्भरताएं शामिल हैं जिन्हें ठीक करने की जरूरत है:"},DependencyEdit:{Active:"सक्रिय"},SchedulerProBase:{propagating:"प्रोजेक्ट की गणना करना",storePopulation:"डेटा लोड करना",finalizing:"परिणामों को अंतिम रूप देना"},EventSegments:{splitEvent:"ईवेंट स्प्लिट करें",renameSegment:"नाम बदलें"},NestedEvents:{deNestingNotAllowed:"नेस्टिंग से निकलने की अनुमति नहीं है",nestingNotAllowed:"नेस्टिंग की अनुमति नहीं है"},VersionGrid:{compare:"तुलना करें",description:"विवरण",occurredAt:"घटित हुआ था",rename:"नाम बदलें",restore:"पुनः स्थापित करें",stopComparing:"तुलना बंद करें"},Versions:{entityNames:{TaskModel:"टास्क",AssignmentModel:"असाइनमेंट",DependencyModel:"लिंक",ProjectModel:"प्रोजेक्ट",ResourceModel:"संसाधन",other:"वस्तु"},entityNamesPlural:{TaskModel:"टास्क",AssignmentModel:"असाइनमेंट्स",DependencyModel:"लिंक्स",ProjectModel:"प्रोजेक्ट्स",ResourceModel:"संसाधन",other:"वस्तुएं"},transactionDescriptions:{update:"{n} {entities} बदलीं",add:"{n} {entities} जोड़ी",remove:"{n} {entities} हटायी",move:"{n} {entities} मूव की",mixed:"{n} {entities} बदली"},addEntity:"{type} **{name} जोड़ा**",removeEntity:"{type} **{name} हटाया**",updateEntity:"{type} **{name} बदला**",moveEntity:"{type} **{name}** को  {from}से {to} पर मूव किया",addDependency:"**{from} से** **{to}पर  लिंक जोड़ा**",removeDependency:"**{from}** से **{to}** तक लिंक हटाया",updateDependency:"**{from}** से **{to}** तक लिंक संपादित किया",addAssignment:"**{resource}** को **{event}** ईवेंट पर असाइन किया",removeAssignment:"**{resource}** से **{event}** पर असाइनमेंट हटाया",updateAssignment:"**{resource}** से **{event}** पर असाइनमेंट संपादित किया",noChanges:"कोई बदलाव नहीं",nullValue:"कोई नहीं",versionDateFormat:"M/D/YYYY h:mm a",undid:"बदलाव पूर्ववत किए",redid:"बदलाव बदले",editedTask:"टास्क गुणों को संपादित किया",deletedTask:"एक टास्क हटाया",movedTask:"एक टास्क मूव किया",movedTasks:"टास्क मूव किए"}},R=i.publishLocale(S);if(typeof r.exports=="object"&&typeof s=="object"){var x=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==a&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(o=Object.getOwnPropertyDescriptor(t,n))||o.enumerable});return e};r.exports=x(r.exports,s)}return r.exports});
