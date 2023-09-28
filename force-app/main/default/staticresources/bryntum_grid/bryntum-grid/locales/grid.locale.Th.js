/*!
 *
 * Bryntum Grid 5.5.2 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(n,l){var i=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var c=l(),m=i?exports:n;for(var p in c)m[p]=c[p]}})(typeof self<"u"?self:void 0,()=>{var n={},l={exports:n},i=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,d=(e,o,a)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,b=(e,o)=>{for(var a in o)i(e,a,{get:o[a],enumerable:!0})},h=(e,o,a,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of m(o))!p.call(e,r)&&r!==a&&i(e,r,{get:()=>o[r],enumerable:!(t=c(o,r))||t.enumerable});return e},f=e=>h(i({},"__esModule",{value:!0}),e),y=(e,o,a)=>(d(e,typeof o!="symbol"?o+"":o,a),a),g={};b(g,{default:()=>T}),l.exports=f(g);var s=class{static mergeLocales(...e){let o={};return e.forEach(a=>{Object.keys(a).forEach(t=>{typeof a[t]=="object"?o[t]={...o[t],...a[t]}:o[t]=a[t]})}),o}static trimLocale(e,o){let a=(t,r)=>{e[t]&&(r?e[t][r]&&delete e[t][r]:delete e[t])};Object.keys(o).forEach(t=>{Object.keys(o[t]).length>0?Object.keys(o[t]).forEach(r=>a(t,r)):a(t)})}static normalizeLocale(e,o){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=e||o.name:o.localeName=e}else o=e;let a={};if(o.name||o.locale)a=Object.assign({localeName:o.name},o.locale),o.desc&&(a.localeDesc=o.desc),o.code&&(a.localeCode=o.code),o.path&&(a.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},o)}for(let t of["name","desc","code","path"])a[t]&&delete a[t];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||s.localeName}static get locale(){return s.localeName&&this.locales[s.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,o){let{locales:a}=globalThis.bryntum,t=s.normalizeLocale(e,o),{localeName:r}=t;return!a[r]||o===!0?a[r]=t:a[r]=this.mergeLocales(a[r]||{},t||{}),a[r]}},u=s;y(u,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},u._$name="LocaleHelper";var v={localeName:"Th",localeDesc:"ไทย",localeCode:"th",Object:{Yes:"ใช่",No:"ไม่ใช่",Cancel:"ยกเลิก",Ok:"ตกลง",Week:"สัปดาห์"},ColorPicker:{noColor:"ไม่มีสี"},Combo:{noResults:"ไม่พบผลลัพธ์",recordNotCommitted:"ไม่สามารถเพิ่มบันทึกได้",addNewValue:e=>`เพิ่ม ${e}`},FilePicker:{file:"ไฟล์"},Field:{badInput:"ค่าในช่องไม่ถูกต้อง",patternMismatch:"ค่าควรตรงกับรูปแบบที่เฉพาะเจาะจง",rangeOverflow:e=>`ค่าควรน้อยกว่าหรือเท่ากับ ${e.max}`,rangeUnderflow:e=>`ค่าควรมากกว่าหรือเท่ากับ ${e.min}`,stepMismatch:"ค่าควรสอดคล้องกับการก้าวกระโดด",tooLong:"ค่าควรสั้นกว่านี้",tooShort:"ค่าควรยาวกว่านี้",typeMismatch:"ค่าต้องอยู่ในรูปแบบพิเศษ",valueMissing:"จำเป็นต้องกรอกช่องนี้",invalidValue:"ค่าในช่องไม่ถูกต้อง",minimumValueViolation:"ค่าน้อยกว่าค่าต่ำสุด",maximumValueViolation:"ค่ามากกว่าค่าสูงสุด",fieldRequired:"ช่องนี้จำเป็นต้องกรอก",validateFilter:"ต้องเลือกค่าจากรายการ"},DateField:{invalidDate:"วันที่ที่กรอกไม่ถูกต้อง"},DatePicker:{gotoPrevYear:"ไปที่ปีก่อนหน้า",gotoPrevMonth:"ไปที่เดือนก่อนหน้า",gotoNextMonth:"ไปที่เดือนถัดไป",gotoNextYear:"ไปที่ปีถัดไป"},NumberFormat:{locale:"th",currency:"บาท"},DurationField:{invalidUnit:"หน่วยไม่ถูกต้อง"},TimeField:{invalidTime:"เวลาที่กรอกไม่ถูกต้อง"},TimePicker:{hour:"ชั่วโมง",minute:"นาที",second:"วินาที"},List:{loading:"กำลังโหลด...",selectAll:"เลือกทั้งหมด"},GridBase:{loadMask:"กำลังโหลด...",syncMask:"กำลังบันทึกการเปลี่ยนแปลง กรุณารอสักครู่..."},PagingToolbar:{firstPage:"ไปที่หน้าแรก",prevPage:"ไปที่หน้าก่อนหน้า",page:"หน้า",nextPage:"ไปที่หน้าถัดไป",lastPage:"ไปที่หน้าสุดท้าย",reload:"โหลดซ้ำหน้าปัจจุบัน",noRecords:"ไม่มีบันทึกที่ต้องแสดง",pageCountTemplate:e=>`จาก ${e.lastPage}`,summaryTemplate:e=>`บันทึกที่แสดง ${e.start} - ${e.end} จาก ${e.allCount}`},PanelCollapser:{Collapse:"ย่อ",Expand:"ขยาย"},Popup:{close:"ปิดป๊อปอัป"},UndoRedo:{Undo:"เลิกทำ",Redo:"ทำซ้ำ",UndoLastAction:"เลิกทำการกระทำล่าสุด",RedoLastAction:"ทำซ้ำการกระทำที่ถูกยกเลิก",NoActions:"ไม่มีการกระทำในรายการเลิกทำ"},FieldFilterPicker:{equals:"เท่ากับ",doesNotEqual:"ไม่เท่ากับ",isEmpty:"ว่างเปล่า",isNotEmpty:"ไม่ว่างเปล่า",contains:"มี",doesNotContain:"ไม่มี",startsWith:"เริ่มต้นด้วย",endsWith:"ลงท้ายด้วย",isOneOf:"เป็นหนึ่งใน",isNotOneOf:"ไม่ได้เป็นหนึ่งใน",isGreaterThan:"มากกว่า",isLessThan:"น้อยกว่า",isGreaterThanOrEqualTo:"มากกว่าหรือเท่ากับ",isLessThanOrEqualTo:"น้อยกว่าหรือเท่ากับ",isBetween:"อยู่ระหว่าง",isNotBetween:"ไม่อยู่ระหว่าง",isBefore:"ก่อน",isAfter:"หลังจาก",isToday:"เป็นวันนี้",isTomorrow:"เป็นวันพรุ่งนี้",isYesterday:"เป็นเมื่อวานนี้",isThisWeek:"เป็นสัปดาห์นี้",isNextWeek:"เป็นสัปดาห์หน้า",isLastWeek:"เป็นสัปดาห์ที่แล้ว",isThisMonth:"เป็นเดือนนี้",isNextMonth:"เป็นเดือนหน้า",isLastMonth:"เป็นเดือนที่แล้ว",isThisYear:"เป็นปีนี้",isNextYear:"เป็นปีหน้า",isLastYear:"เป็นปีที่แล้ว",isYearToDate:"เป็นปีจนถึงปัจจุบัน",isTrue:"เป็นจริง",isFalse:"เป็นเท็จ",selectAProperty:"เลือกคุณสมบัติ",selectAnOperator:"เลือกผู้ปฏิบัติการ",caseSensitive:"การบังคับใช้ตัวอักษรเล็ก/ใหญ่",and:"และ",dateFormat:"D/M/YY",selectOneOrMoreValues:"เลือกหนึ่งค่าหรือมากกว่า",enterAValue:"ป้อนค่า",enterANumber:"ป้อนหมายเลข",selectADate:"เลือกวันที่"},FieldFilterPickerGroup:{addFilter:"เพิ่มตัวกรอง"},DateHelper:{locale:"th",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"มิลลิวินาที",plural:"มิลลิวินาที",abbrev:"มิลลิวินาที"},{single:"วินาที",plural:"วินาที",abbrev:"วินาที"},{single:"นาที",plural:"นาที",abbrev:"น."},{single:"ชั่วโมง",plural:"ชั่วโมง",abbrev:"ชม."},{single:"วัน",plural:"วัน",abbrev:"ว."},{single:"สัปดาห์",plural:"สัปดาห์",abbrev:"สัปดาห์"},{single:"เดือน",plural:"เดือน",abbrev:"ด."},{single:"ไตรมาส",plural:"ไตรมาส",abbrev:"ไตรมาส"},{single:"ปี",plural:"ปี",abbrev:"ป."},{single:"ทศวรรษ",plural:"ทศวรรษ",abbrev:"ทศวรรษ"}],unitAbbreviations:[["มิลลิวินาที"],["วินาที","วินาที"],["น.","น."],["ชม.","ชม."],["วัน"],["สัปดาห์","สัปดาห์"],["ด.","ด.","ด."],["ไตรมาส","ไตรมาส","ไตรมาส"],["ป.","ป."],["ทศวรรษ"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e}},w=u.publishLocale(v),x=new String,C={localeName:"Th",localeDesc:"ไทย",localeCode:"th",ColumnPicker:{column:"คอลัมน์",columnsMenu:"คอลัมน์",hideColumn:"ซ่อนคอลัมน์",hideColumnShort:"ซ่อน",newColumns:"คอลัมน์ใหม่"},Filter:{applyFilter:"ใช้ตัวกรอง",filter:"ตัวกรอง",editFilter:"แก้ไขตัวกรอง",on:"ในเงื่อนไข",before:"ก่อน",after:"หลัง",equals:"เท่ากับ",lessThan:"น้อยกว่า",moreThan:"มากกว่า",removeFilter:"นำตัวกรองออก",disableFilter:"ปิดใช้งานตัวกรอง"},FilterBar:{enableFilterBar:"แสดงแถบตัวกรอง",disableFilterBar:"ซ่อนแถบตัวกรอง"},Group:{group:"จัดกลุ่ม",groupAscending:"จัดกลุ่มจากน้อยไปมาก",groupDescending:"จัดกลุ่มจากมากไปน้อย",groupAscendingShort:"จากน้อยไปมาก",groupDescendingShort:"จากมากไปน้อย",stopGrouping:"หยุดการจัดกลุ่ม",stopGroupingShort:"หยุด"},HeaderMenu:{moveBefore:e=>`ย้ายก่อนหน้า "${e}"`,moveAfter:e=>`ย้ายหลังจาก "${e}"`,collapseColumn:"ยุบคอลัมน์",expandColumn:"ขยายคอลัมน์"},ColumnRename:{rename:"เปลี่ยนชื่อ"},MergeCells:{mergeCells:"ผสานเซลล์",menuTooltip:"ผสานเซลล์ที่มีค่าเท่ากันเมื่อจัดเรียงตามคอลัมน์นี้"},Search:{searchForValue:"ค้นหาค่า"},Sort:{sort:"จัดเรียง",sortAscending:"จัดเรียงจากน้อยไปมาก",sortDescending:"จัดเรียงจากมากไปน้อย",multiSort:"จัดเรียงตามหลายคุณลักษณะ",removeSorter:"นำตัวจัดเรียงออก",addSortAscending:"เพิ่มตัวจัดเรียงจากน้อยไปมาก",addSortDescending:"เพิ่มตัวจัดเรียงจากมากไปน้อย",toggleSortAscending:"เปลี่ยนเป็นจากน้อยไปมาก",toggleSortDescending:"เปลี่ยนเป็นจากมากไปน้อย",sortAscendingShort:"จากน้อยไปมาก",sortDescendingShort:"จากมากไปน้อย",removeSorterShort:"นำออก",addSortAscendingShort:"+ จากน้อยไปมาก",addSortDescendingShort:"+ จากมากไปน้อย"},Split:{split:"แยก",unsplit:"ไม่แยก",horizontally:"แนวนอน",vertically:"แนวตั้ง",both:"ทั้งสอง"},Column:{columnLabel:e=>`${e.text?`${e.text} คอลัมน์. `:""}แตะ SPACE สำหรับเมนูบริบท${e.sortable?", กดปุ่ม ENTER เพื่อจัดเรียง":""}`,cellLabel:x},Checkbox:{toggleRowSelect:"สลับการเลือกแถว",toggleSelection:"สลับการเลือกชุดข้อมูลทั้งหมด"},RatingColumn:{cellLabel:e=>{var o;return`${e.text?e.text:""} ${(o=e.location)!=null&&o.record?`คะแนน : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"การโหลดข้อมูลล้มเหลว!",syncFailedMessage:"การซิงค์ข้อมูลล้มเหลว!",unspecifiedFailure:"การล้มเหลวที่ไม่ระบุ",networkFailure:"ข้อผิดพลาดของเครือข่าย",parseFailure:"การวิเคราะห์การตอบสนองของเซิร์ฟเวอร์ล้มเหลว",serverResponse:"การตอบสนองของเซิร์ฟเวอร์:",noRows:"ไม่มีบันทึกที่จะแสดง",moveColumnLeft:"ย้ายไปที่ส่วนซ้าย",moveColumnRight:"ย้ายไปที่ส่วนขวา",moveColumnTo:e=>`ย้ายคอลัมน์ไปที่ ${e}`},CellMenu:{removeRow:"ลบ"},RowCopyPaste:{copyRecord:"คัดลอก",cutRecord:"ตัด",pasteRecord:"วาง",rows:"หลายแถว",row:"แถว"},CellCopyPaste:{copy:"คัดลอก",cut:"ตัด",paste:"วาง"},PdfExport:{"Waiting for response from server":"กำลังรอการตอบสนองจากเซิร์ฟเวอร์...","Export failed":"การส่งออกล้มเหลว","Server error":"พบข้อผิดพลาดที่เซิร์ฟเวอร์","Generating pages":"กำลังสร้างหน้าข้อมูล...","Click to abort":"ยกเลิก"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"การตั้งค่าสำหรับการส่งออก",export:"การส่งออก",exporterType:"ควบคุมการแบ่งข้อมูลเป็นหน้า",cancel:"ยกเลิก",fileFormat:"รูปแบบของไฟล์",rows:"แถว",alignRows:"จัดแนวแถว",columns:"คอลัมน์",paperFormat:"รูปแบบกระดาษ",orientation:"การวางแนว",repeatHeader:"ทำซ้ำหัวตาราง"},ExportRowsCombo:{all:"แถวทั้งหมด",visible:"แถวที่มองเห็น"},ExportOrientationCombo:{portrait:"แนวตั้ง",landscape:"แนวนอน"},SinglePageExporter:{singlepage:"หน้าเดียว"},MultiPageExporter:{multipage:"หลายหน้า",exportingPage:({currentPage:e,totalPages:o})=>`กำลังส่งออกหน้า ${e}/${o}`},MultiPageVerticalExporter:{multipagevertical:"หลายหน้า (แนวตั้ง)",exportingPage:({currentPage:e,totalPages:o})=>`กำลังส่งออกหน้า ${e}/${o}`},RowExpander:{loading:"กำลังโหลด",expand:"ขยาย",collapse:"ย่อ"},TreeGroup:{group:"จัดกลุ่มตาม",stopGrouping:"หยุดการจัดกลุ่ม",stopGroupingThisColumn:"ยกเลิกการจัดกลุ่มคอลัมน์นี้"}},T=u.publishLocale(C);if(typeof l.exports=="object"&&typeof n=="object"){var P=(e,o,a,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Object.getOwnPropertyNames(o))!Object.prototype.hasOwnProperty.call(e,r)&&r!==a&&Object.defineProperty(e,r,{get:()=>o[r],enumerable:!(t=Object.getOwnPropertyDescriptor(o,r))||t.enumerable});return e};l.exports=P(l.exports,n)}return l.exports});
