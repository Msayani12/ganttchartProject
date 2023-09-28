/*!
 *
 * Bryntum Grid 5.5.2 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(n,l){var i=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var c=l(),m=i?exports:n;for(var p in c)m[p]=c[p]}})(typeof self<"u"?self:void 0,()=>{var n={},l={exports:n},i=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,d=(e,o,a)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,b=(e,o)=>{for(var a in o)i(e,a,{get:o[a],enumerable:!0})},h=(e,o,a,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of m(o))!p.call(e,t)&&t!==a&&i(e,t,{get:()=>o[t],enumerable:!(r=c(o,t))||r.enumerable});return e},f=e=>h(i({},"__esModule",{value:!0}),e),y=(e,o,a)=>(d(e,typeof o!="symbol"?o+"":o,a),a),g={};b(g,{default:()=>P}),l.exports=f(g);var s=class{static mergeLocales(...e){let o={};return e.forEach(a=>{Object.keys(a).forEach(r=>{typeof a[r]=="object"?o[r]={...o[r],...a[r]}:o[r]=a[r]})}),o}static trimLocale(e,o){let a=(r,t)=>{e[r]&&(t?e[r][t]&&delete e[r][t]:delete e[r])};Object.keys(o).forEach(r=>{Object.keys(o[r]).length>0?Object.keys(o[r]).forEach(t=>a(r,t)):a(r)})}static normalizeLocale(e,o){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=e||o.name:o.localeName=e}else o=e;let a={};if(o.name||o.locale)a=Object.assign({localeName:o.name},o.locale),o.desc&&(a.localeDesc=o.desc),o.code&&(a.localeCode=o.code),o.path&&(a.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},o)}for(let r of["name","desc","code","path"])a[r]&&delete a[r];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||s.localeName}static get locale(){return s.localeName&&this.locales[s.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,o){let{locales:a}=globalThis.bryntum,r=s.normalizeLocale(e,o),{localeName:t}=r;return!a[t]||o===!0?a[t]=r:a[t]=this.mergeLocales(a[t]||{},r||{}),a[t]}},u=s;y(u,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},u._$name="LocaleHelper";var v={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",Object:{Yes:"Да",No:"Нет",Cancel:"Отмена",Ok:"OK",Week:"Неделя"},ColorPicker:{noColor:"Нет цвета"},Combo:{noResults:"Нет результатов",recordNotCommitted:"Запись не может быть добавлена",addNewValue:e=>`добавить ${e}`},FilePicker:{file:"Файл"},Field:{badInput:"Недопустимое значение поля",patternMismatch:"Значение должно соответствовать определенному шаблону",rangeOverflow:e=>`Значение должно быть меньше или равно ${e.max}`,rangeUnderflow:e=>`Значение должно быть больше или равно ${e.min}`,stepMismatch:"Значение должно соответствовать шагу",tooLong:"Значение должно быть короче",tooShort:"Значение должно быть длиннее",typeMismatch:"Значение должно быть в специальном формате",valueMissing:"Поле не может быть пустым",invalidValue:"Недопустимое значение поля",minimumValueViolation:"Нарушение минимального значения",maximumValueViolation:"Нарушение максимального значения",fieldRequired:"Поле не может быть пустым",validateFilter:"Выберите значение из списка"},DateField:{invalidDate:"Неверный формат даты"},DatePicker:{gotoPrevYear:"Перейти к предыдущему году",gotoPrevMonth:"Перейти к предыдущему месяцу",gotoNextMonth:"Перейти в следующий месяц",gotoNextYear:"Перейти в следующий год"},NumberFormat:{locale:"ru",currency:"RUB"},DurationField:{invalidUnit:"Неверные единицы"},TimeField:{invalidTime:"Неверный формат времени"},TimePicker:{hour:"Час",minute:"Минуты",second:"секунда"},List:{loading:"Загрузка...",selectAll:"Выбрать все"},GridBase:{loadMask:"Загрузка...",syncMask:"Сохраняю данные, пожалуйста подождите..."},PagingToolbar:{firstPage:"Перейти на первую страницу",prevPage:"Перейти на предыдущую страницу",page:"страница",nextPage:"Перейти на следующую страницу",lastPage:"Перейти на последнюю страницу",reload:"Перезагрузить текущую страницу",noRecords:"Нет записей для отображения",pageCountTemplate:e=>`из ${e.lastPage}`,summaryTemplate:e=>`Показаны записи ${e.start} - ${e.end} из ${e.allCount}`},PanelCollapser:{Collapse:"Свернуть",Expand:"Развернуть"},Popup:{close:"Закрыть"},UndoRedo:{Undo:"Отменить",Redo:"Повторить",UndoLastAction:"Отменить последнее действие",RedoLastAction:"Повторить последнее отмененное действие",NoActions:"Нет записей в очереди отмены"},FieldFilterPicker:{equals:"равен",doesNotEqual:"не равен",isEmpty:"пустой",isNotEmpty:"не пустой",contains:"содержит",doesNotContain:"не содержит",startsWith:"начинается c",endsWith:"заканчивается с",isOneOf:"входит в",isNotOneOf:"не входит в",isGreaterThan:"больше чем",isLessThan:"меньше чем",isGreaterThanOrEqualTo:"больше или равен",isLessThanOrEqualTo:"меньше или равен",isBetween:"между",isNotBetween:"не между",isBefore:"до",isAfter:"после",isToday:"сегодня",isTomorrow:"завтра",isYesterday:"вчера",isThisWeek:"эта неделя",isNextWeek:"следующая неделя",isLastWeek:"последняя неделя",isThisMonth:"этот месяц",isNextMonth:"следующий месяц",isLastMonth:"последний месяц",isThisYear:"этот год",isNextYear:"следующий год",isLastYear:"последний год",isYearToDate:"год по дате",isTrue:"правда",isFalse:"ложь",selectAProperty:"Выбор свойства",selectAnOperator:"Выбор оператора",caseSensitive:"С учетом регистра",and:"и",dateFormat:"D/M/YYYY",selectOneOrMoreValues:"Выберите одно или несколько значений",enterAValue:"Введите значение",enterANumber:"Введите число",selectADate:"Выберите дату"},FieldFilterPickerGroup:{addFilter:"Добавить фильтр"},DateHelper:{locale:"ru",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"миллисек",plural:"миллисек",abbrev:"мс"},{single:"секунда",plural:"секунд",abbrev:"с"},{single:"минута",plural:"минут",abbrev:"мин"},{single:"час",plural:"часов",abbrev:"ч"},{single:"день",plural:"дней",abbrev:"д"},{single:"неделя",plural:"недели",abbrev:"нед"},{single:"месяц",plural:"месяцев",abbrev:"мес"},{single:"квартал",plural:"кварталов",abbrev:"квар"},{single:"год",plural:"лет",abbrev:"г"},{single:"десятилетие",plural:"десятилетия",abbrev:"дес"}],unitAbbreviations:[["мс","мил"],["с","сек"],["м","мин"],["ч"],["д","ден","дне"],["н","нед"],["мес"],["к","квар","квр"],["г"],["дес"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>`${e}-й`}},w=u.publishLocale(v),x=new String,C={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",ColumnPicker:{column:"Колонка",columnsMenu:"Колонки",hideColumn:"Спрятать колонку",hideColumnShort:"Спрятать",newColumns:"Новые столбцы"},Filter:{applyFilter:"Применить фильтр",filter:"Фильтр",editFilter:"Изменить фильтр",on:"В этот день",before:"До",after:"После",equals:"Равно",lessThan:"Меньше, чем",moreThan:"Больше, чем",removeFilter:"Убрать фильтр",disableFilter:"Отключить фильтр"},FilterBar:{enableFilterBar:"Показать панель фильтров",disableFilterBar:"Спрятать панель фильтров"},Group:{group:"Группа",groupAscending:"Группа по возрастанию",groupDescending:"Группа по убыванию",groupAscendingShort:"Возрастание",groupDescendingShort:"Убывание",stopGrouping:"Убрать группу",stopGroupingShort:"Убрать"},HeaderMenu:{moveBefore:e=>`Расположить перед "${e}"`,moveAfter:e=>`Расположить после "${e}"`,collapseColumn:"Свернуть колонку",expandColumn:"Развернуть колонку"},ColumnRename:{rename:"Переименовать"},MergeCells:{mergeCells:"Объединить ячейки",menuTooltip:"Объединить ячейки с одинаковыми значениями при сортировке по этому столбцу"},Search:{searchForValue:"Найти значение"},Sort:{sort:"Сортировка",sortAscending:"Сортировать по возрастанию",sortDescending:"Сортировать по убыванию",multiSort:"Сложная сортировка",removeSorter:"Убрать сортировку",addSortAscending:"Добавить сортировку по возрастанию",addSortDescending:"Добавить сортировку по убыванию",toggleSortAscending:"Сортировать по возрастанию",toggleSortDescending:"Сортировать по убыванию",sortAscendingShort:"Возрастание",sortDescendingShort:"Убывание",removeSorterShort:"Убрать",addSortAscendingShort:"+ Возраст...",addSortDescendingShort:"+ Убыв..."},Split:{split:"Разделить",unsplit:"Неразделенный",horizontally:"Горизонтально",vertically:"Вертикально",both:"Оба"},Column:{columnLabel:e=>`${e.text?`${e.text} столбец. `:""}ПРОБЕЛ для контекстного меню${e.sortable?", ENTER для сортировки":""}`,cellLabel:x},Checkbox:{toggleRowSelect:"Переключить выделение строки",toggleSelection:"Переключить выбор всего набора данных"},RatingColumn:{cellLabel:e=>{var o;return`${e.text?e.text:""} ${(o=e.location)!=null&&o.record?`rating : ${e.location.record.get(e.field)||0} || 0`:""}`}},GridBase:{loadFailedMessage:"Не удалось загрузить!",syncFailedMessage:"Не удалось синхронизировать!",unspecifiedFailure:"Неуказанная ошибка",networkFailure:"Ошибка сети",parseFailure:"Не удалось разобрать ответ сервера",serverResponse:"Ответ сервера:",noRows:"Нет записей для отображения",moveColumnLeft:"Передвинуть в левую секцию",moveColumnRight:"Передвинуть в правую секцию",moveColumnTo:e=>`Переместить колонку в секцию ${e}`},CellMenu:{removeRow:"Удалить"},RowCopyPaste:{copyRecord:"Копировать",cutRecord:"Вырезать",pasteRecord:"Вставить",rows:"строки",row:"строка"},CellCopyPaste:{copy:"Копировать",cut:"Вырезать",paste:"Вставить"},PdfExport:{"Waiting for response from server":"Ожидание ответа от сервера...","Export failed":"Не удалось экспортировать","Server error":"На сервере произошла ошибка","Generating pages":"Генерация страниц...","Click to abort":"Отмена"},ExportDialog:{width:"40em",labelWidth:"13em",exportSettings:"Настройки",export:"Экспорт",exporterType:"Разбивка на страницы",cancel:"Отмена",fileFormat:"Формат файла",rows:"Строки",alignRows:"Выровнять строки",columns:"Колонки",paperFormat:"Размер листа",orientation:"Ориентация",repeatHeader:"Повторять заголовок"},ExportRowsCombo:{all:"Все строки",visible:"Видимые строки"},ExportOrientationCombo:{portrait:"Портретная",landscape:"Ландшафтная"},SinglePageExporter:{singlepage:"Одна страница"},MultiPageExporter:{multipage:"Многостраничный",exportingPage:({currentPage:e,totalPages:o})=>`Экспорт страницы ${e}/${o}`},MultiPageVerticalExporter:{multipagevertical:"Многостраничный (по вертикали)",exportingPage:({currentPage:e,totalPages:o})=>`Экспорт страницы ${e}/${o}`},RowExpander:{loading:"Загрузка",expand:"Развернуть",collapse:"Свернуть"},TreeGroup:{group:"Группировать по",stopGrouping:"Прекратить группировку",stopGroupingThisColumn:"Прекратить группировку этого столбца"}},P=u.publishLocale(C);if(typeof l.exports=="object"&&typeof n=="object"){var T=(e,o,a,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of Object.getOwnPropertyNames(o))!Object.prototype.hasOwnProperty.call(e,t)&&t!==a&&Object.defineProperty(e,t,{get:()=>o[t],enumerable:!(r=Object.getOwnPropertyDescriptor(o,t))||r.enumerable});return e};l.exports=T(l.exports,n)}return l.exports});
