/*!
 *
 * Bryntum Scheduler Pro 5.5.1 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,r){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var d=r(),m=l?exports:s;for(var p in d)m[p]=d[p]}})(typeof self<"u"?self:void 0,()=>{var s={},r={exports:s},l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of m(t))!p.call(e,n)&&n!==a&&l(e,n,{get:()=>t[n],enumerable:!(o=d(t,n))||o.enumerable});return e},v=e=>b(l({},"__esModule",{value:!0}),e),h=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a),u={};y(u,{default:()=>R}),r.exports=v(u);var c=class{static mergeLocales(...e){let t={};return e.forEach(a=>{Object.keys(a).forEach(o=>{typeof a[o]=="object"?t[o]={...t[o],...a[o]}:t[o]=a[o]})}),t}static trimLocale(e,t){let a=(o,n)=>{e[o]&&(n?e[o][n]&&delete e[o][n]:delete e[o])};Object.keys(t).forEach(o=>{Object.keys(t[o]).length>0?Object.keys(t[o]).forEach(n=>a(o,n)):a(o)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let o of["name","desc","code","path"])a[o]&&delete a[o];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:a}=globalThis.bryntum,o=c.normalizeLocale(e,t),{localeName:n}=o;return!a[n]||t===!0?a[n]=o:a[n]=this.mergeLocales(a[n]||{},o||{}),a[n]}},i=c;h(i,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},i._$name="LocaleHelper";var D={localeName:"Ja",localeDesc:"日本語",localeCode:"ja",RemoveDependencyCycleEffectResolution:{descriptionTpl:"依存関係を削除する"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"依存関係を無効にする"},CycleEffectDescription:{descriptionTpl:"サイクルが発見されました。サイクルを形成するのは:{0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" の日程表には、稼働時間中の休憩時間が全くありません。'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"土日休みの24時間の日程表を使ってください。"},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"土日休みの8時間の日程表（08:00-12:00、13:00-17:00）を使ってください。"},ConflictEffectDescription:{descriptionTpl:"スケジュール上の矛盾が発見されました：{0}が{1}と矛盾しています。"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"プロジェクト開始日{0}",endDateDescriptionTpl:"プロジェクト終了日{0}"},DependencyType:{long:["開始 – 開始","開始 – 終了","終了 – 開始","終了 – 終了"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'手動スケジュール"{2}"は、その子が{0}以降に開始することを強制します',endDescriptionTpl:'手動スケジュール"{2}"は、その子が{1}までに終了することを強制します'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'"{0}"の手動スケジューリングを無効にする'},DependencyConstraintIntervalDescription:{descriptionTpl:'"{3}"から"{4}"までの依存関係({2})'},RemoveDependencyResolution:{descriptionTpl:'"{1}"から"{2}"までの依存関係を削除する'},DeactivateDependencyResolution:{descriptionTpl:'"{1}"から"{2}"までの依存関係を無効にする'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'タスク"{2}" {3} {0} 制約',endDateDescriptionTpl:'タスク"{2}" {3} {1} 制約',constraintTypeTpl:{startnoearlierthan:"指定日以降に開始",finishnoearlierthan:"指定日以降に終了",muststarton:"指定日に開始",mustfinishon:"指定日に終了",startnolaterthan:"指定日までに開始",finishnolaterthan:"指定日までに終了"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'タスク"{0}"の制約"{1}"を削除する'}},x=i.publishLocale(D),f={localeName:"Ja",localeDesc:"日本語",localeCode:"ja",Object:{Yes:"はい",No:"いいえ",Cancel:"取り消す",Ok:"OK",Week:"週"},ColorPicker:{noColor:"色なし"},Combo:{noResults:"結果がありません",recordNotCommitted:"レコードは追加できませんでした",addNewValue:e=>`${e} を追加`},FilePicker:{file:"ファイル"},Field:{badInput:"無効なフィールド値です",patternMismatch:"値は特定のパターンに一致する必要があります",rangeOverflow:e=>`値は${e.max}以下である必要があります`,rangeUnderflow:e=>`値は${e.min}以上である必要があります`,stepMismatch:"値はステップと合っている必要があります",tooLong:"値が長すぎます",tooShort:"値が短すぎます",typeMismatch:"値は特殊な形式である必要があります",valueMissing:"このフィールドは必須です",invalidValue:"無効なフィールド値です",minimumValueViolation:"最低値エラーです",maximumValueViolation:"最高値エラーです",fieldRequired:"このフィールドは必須です",validateFilter:"リストから値を選択してください"},DateField:{invalidDate:"無効な日付が入力されました"},DatePicker:{gotoPrevYear:"前年へ行く",gotoPrevMonth:"前月へ行く",gotoNextMonth:"翌月へ行く",gotoNextYear:"翌年へ行く"},NumberFormat:{locale:"ja",currency:"JPY"},DurationField:{invalidUnit:"無効な単位です"},TimeField:{invalidTime:"無効な時間が入力されました"},TimePicker:{hour:"時間",minute:"分",second:"秒"},List:{loading:"読み込み中です",selectAll:"すべて選択"},GridBase:{loadMask:"読み込み中です",syncMask:"変更を保存中です。お待ちください。"},PagingToolbar:{firstPage:"先頭ページへ行く",prevPage:"前のページへ行く",page:"ページ",nextPage:"次のページへ行く",lastPage:"最終ページへ行く",reload:"現在のページを再読み込みする",noRecords:"表示するレコードがありません",pageCountTemplate:e=>` ${e.lastPage}件のうち`,summaryTemplate:e=>`${e.allCount}件のうち ${e.start} - ${e.end} 件を表示 `},PanelCollapser:{Collapse:"縮小する",Expand:"拡張する"},Popup:{close:"ポップアップを閉じる"},UndoRedo:{Undo:"取り消す",Redo:"やり直す",UndoLastAction:"最後のアクションを取り消す",RedoLastAction:"最後に取り消したアクションをやり直す",NoActions:"取り消しキューにアイテムがありません"},FieldFilterPicker:{equals:"に等しい",doesNotEqual:"に等しくない",isEmpty:"は空である",isNotEmpty:"は空でない",contains:"を含む",doesNotContain:"を含まない",startsWith:"で始まる",endsWith:"で終わる",isOneOf:"のひとつである",isNotOneOf:"のひとつでない",isGreaterThan:"より大きい",isLessThan:"より小さい",isGreaterThanOrEqualTo:"以上である",isLessThanOrEqualTo:"以下である",isBetween:"との間である",isNotBetween:"との間ではない",isBefore:"より前である",isAfter:"より後である",isToday:"今日である",isTomorrow:"明日である",isYesterday:"昨日である",isThisWeek:"今週である",isNextWeek:"来週である",isLastWeek:"先週である",isThisMonth:"今月である",isNextMonth:"来月である",isLastMonth:"先月である",isThisYear:"今年である",isNextYear:"来年である",isLastYear:"昨年である",isYearToDate:"今年の始めから今日までである",isTrue:"は真実である",isFalse:"は偽りである",selectAProperty:"プロパティを選択する",selectAnOperator:"オペレーターを選択する",caseSensitive:"ケースセンシティブ",and:"および",dateFormat:"YY/M/DD a",selectOneOrMoreValues:"ひとつ以上の値を選択する",enterAValue:"値を入力する",enterANumber:"数字を入力する",selectADate:"日付を選択する"},FieldFilterPickerGroup:{addFilter:"フィルタ―を追加する"},DateHelper:{locale:"ja",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"ミリ秒",plural:"ミリ秒",abbrev:"ms"},{single:"秒",plural:"秒",abbrev:"s"},{single:"分",plural:"分",abbrev:"min"},{single:"時間",plural:"時間",abbrev:"h"},{single:"日",plural:"日",abbrev:"d"},{single:"週",plural:"週",abbrev:"w"},{single:"月",plural:"月",abbrev:"mon"},{single:"四半期",plural:"四半期",abbrev:"q"},{single:"年",plural:"年",abbrev:"yr"},{single:"十年",plural:"十年",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"],["dec"]],parsers:{L:"YYYY年MM月DD日",LT:"HH:mm A",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"位"}},w=i.publishLocale(f),T=new String,E={localeName:"Ja",localeDesc:"日本語",localeCode:"ja",ColumnPicker:{column:"列",columnsMenu:"列",hideColumn:"列を非表示にする",hideColumnShort:"非表示",newColumns:"新しい列"},Filter:{applyFilter:"フィルターをかける",filter:"フィルター",editFilter:"フィルターを編集する",on:"条件",before:"前",after:"後",equals:"同じ",lessThan:"より少ない",moreThan:"より多い",removeFilter:"フィルターを解除する",disableFilter:"フィルタを無効にする"},FilterBar:{enableFilterBar:"フィルターバーを表示する",disableFilterBar:"フィルターバーを非表示にする"},Group:{group:"グループ",groupAscending:"グループ昇順",groupDescending:"グループ降順",groupAscendingShort:"昇順",groupDescendingShort:"降順",stopGrouping:"グループ化を解除する",stopGroupingShort:"解除する"},HeaderMenu:{moveBefore:e=>`前に移動する "${e}"`,moveAfter:e=>`後に移動する "${e}"`,collapseColumn:"列を折りたたむ",expandColumn:"列を展開する"},ColumnRename:{rename:"名前を変更する"},MergeCells:{mergeCells:"セルを結合する",menuTooltip:"この列で並び替えたとき同じ値のセルを結合する"},Search:{searchForValue:"値を探す"},Sort:{sort:"並び替える",sortAscending:"昇順に並び替える",sortDescending:"降順に並び替える",multiSort:"複数並び替え",removeSorter:"並び替えを解除する",addSortAscending:"昇順並び替えを追加する",addSortDescending:"降順並び替えを追加する",toggleSortAscending:"昇順に変更する",toggleSortDescending:"降順に変更する",sortAscendingShort:"昇順",sortDescendingShort:"降順",removeSorterShort:"解除する",addSortAscendingShort:"＋昇順",addSortDescendingShort:"＋降順"},Split:{split:"分割する",unsplit:"結合する",horizontally:"横方向に",vertically:"縦方向に",both:"両方"},Column:{columnLabel:e=>`${e.text?`${e.text} 列. `:""}コンテキストメニューの「SPACE」キーを押します${e.sortable?", ENTERキーを押して並び替える":""}`,cellLabel:T},Checkbox:{toggleRowSelect:"行選択を切り替える",toggleSelection:"データセット全体の選択を切り替える"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`評価 : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"データの読み込みに失敗しました",syncFailedMessage:"データの同期に失敗しました",unspecifiedFailure:"エラーを特定できません",networkFailure:"ネットワークエラー",parseFailure:"サーバーの応答の解析に失敗しました",serverResponse:"サーバーの応答:",noRows:"表示するレコードがありません",moveColumnLeft:"左セクションに移動する",moveColumnRight:"右セクションに移動する",moveColumnTo:e=>`列を ${e}に移動する`},CellMenu:{removeRow:"削除する"},RowCopyPaste:{copyRecord:"コピーする",cutRecord:"切り取る",pasteRecord:"貼り付ける",rows:"複数の行",row:"行"},CellCopyPaste:{copy:"コピーする",cut:"切り取る",paste:"貼り付ける"},PdfExport:{"Waiting for response from server":"サーバーの応答を待っています。","Export failed":"エクスポートに失敗しました","Server error":"サーバーエラー","Generating pages":"ページを生成しています。","Click to abort":"取り消す"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"設定をエクスポートする",export:"エクスポート",exporterType:"ページ設定を管理する",cancel:"取り消す",fileFormat:"ファイル形式",rows:"行",alignRows:"行を揃える",columns:"列",paperFormat:"用紙形式",orientation:"向き",repeatHeader:"ヘッダーを繰り返す"},ExportRowsCombo:{all:"すべての行",visible:"表示可能な行"},ExportOrientationCombo:{portrait:"縦長",landscape:"横長"},SinglePageExporter:{singlepage:"単一ページ"},MultiPageExporter:{multipage:"複数ページ",exportingPage:({currentPage:e,totalPages:t})=>`ページ ${e}/${t} をエクスポートしています`},MultiPageVerticalExporter:{multipagevertical:"複数ページ（縦）",exportingPage:({currentPage:e,totalPages:t})=>`ページ ${e}/${t} をエクスポートしています`},RowExpander:{loading:"読み込み中",expand:"拡張する",collapse:"縮小する"},TreeGroup:{group:"グループ化",stopGrouping:"グループ化の解除",stopGroupingThisColumn:"この列のグループ化を解除"}},P=i.publishLocale(E),C={localeName:"Ja",localeDesc:"日本語",localeCode:"ja",Object:{newEvent:"新しいイベント"},ResourceInfoColumn:{eventCountText:e=>e+" イベント"},Dependencies:{from:"から",to:"まで",valid:"有効",invalid:"無効"},DependencyType:{SS:"SS",SF:"SF",FS:"FS",FF:"FF",StartToStart:"開始 – 開始",StartToEnd:"開始 – 終了",EndToStart:"終了 – 開始",EndToEnd:"終了 – 終了",short:["SS","SF","FS","FF"],long:["開始 – 開始","開始 – 終了","終了 – 開始","終了 – 終了"]},DependencyEdit:{From:"から",To:"まで",Type:"種類",Lag:"ラグ","Edit dependency":"依存関係を編集する",Save:"保存する",Delete:"削除する",Cancel:"取り消す",StartToStart:"開始 – 開始",StartToEnd:"開始 – 終了",EndToStart:"終了 – 開始",EndToEnd:"終了 – 終了"},EventEdit:{Name:"名前",Resource:"リソース",Start:"開始",End:"終了",Save:"保存する",Delete:"削除する",Cancel:"取り消す","Edit event":"イベントを編集する",Repeat:"繰り返す"},EventDrag:{eventOverlapsExisting:"イベントはこのリソースの既存イベントと重複しています",noDropOutsideTimeline:"イベントはタイムラインの外に完全にドロップすることはできません"},SchedulerBase:{"Add event":"イベントを追加する","Delete event":"イベントを削除する","Unassign event":"イベントを割り当て解除する",color:"色"},TimeAxisHeaderMenu:{pickZoomLevel:"ズーム",activeDateRange:"日付範囲",startText:"開始日",endText:"終了日",todayText:"今日"},EventCopyPaste:{copyEvent:"イベントをコピーする",cutEvent:"イベントを切り取る",pasteEvent:"イベントを貼り付ける"},EventFilter:{filterEvents:"タスクをフィルターする",byName:"名前"},TimeRanges:{showCurrentTimeLine:"現在のタイムラインを表示する"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"秒"},minuteAndHour:{topDateFormat:"ddd MM月DD日, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM月DD日",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"日"},day:{name:"日/時間"},week:{name:"週/時間"},dayAndWeek:{displayDateFormat:"ll LST",name:"週/日"},dayAndMonth:{name:"月"},weekAndDay:{displayDateFormat:"ll LST",name:"週"},weekAndMonth:{name:"週"},weekAndDayLetter:{name:"週/平日"},weekDateAndMonth:{name:"月/週"},monthAndYear:{name:"月"},year:{name:"年"},manyYears:{name:"複数の年"}},RecurrenceConfirmationPopup:{"delete-title":"イベントを削除しようとしています","delete-all-message":"このイベントのすべての出来事を削除しますか？","delete-further-message":"イベントのこの出来事と将来のすべての出来事を削除しますか、それとも選択された出来事のみ削除しますか？","delete-further-btn-text":"将来のすべてのイベントを削除する","delete-only-this-btn-text":"このイベントのみ削除する","update-title":"繰り返しイベントを変更しようとしています","update-all-message":"このイベントのすべての出来事を変更しますか？","update-further-message":"イベントのこの出来事のみ変更しますか、それともこの出来事と将来のすべての出来事を変更しますか？","update-further-btn-text":"将来のすべてのイベント","update-only-this-btn-text":"このイベントのみ",Yes:"はい",Cancel:"取り消す",width:600},RecurrenceLegend:{" and ":" と ",Daily:"毎日","Weekly on {1}":({days:e})=>`毎週 ${e}`,"Monthly on {1}":({days:e})=>`毎月 ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>` 毎年${t}${e}`,"Every {0} days":({interval:e})=>`各 ${e} 日ごと`,"Every {0} weeks on {1}":({interval:e,days:t})=>`各 ${e} 週ごとの ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`各 ${e} カ月ごとの ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`各 ${e} 年ごとの ${a}${t}`,position1:"第1",position2:"第２",position3:"第３",position4:"第4",position5:"第5","position-1":"最後の",day:"日",weekday:"ウィークデイ","weekend day":"週末",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"イベントを繰り返す",Cancel:"取り消す",Save:"保存する",Frequency:"頻度",Every:"各",DAILYintervalUnit:"日",WEEKLYintervalUnit:"週",MONTHLYintervalUnit:"月",YEARLYintervalUnit:"年",Each:"各","On the":"の","End repeat":"繰り返しを終了する","time(s)":"期間"},RecurrenceDaysCombo:{day:"日",weekday:"平日","weekend day":"週末"},RecurrencePositionsCombo:{position1:"第1",position2:"第2",position3:"第3",position4:"第4",position5:"第5","position-1":"最後の"},RecurrenceStopConditionCombo:{Never:"決して",After:"後で","On date":"指定日"},RecurrenceFrequencyCombo:{None:"繰り返しなし",Daily:"毎日",Weekly:"毎週",Monthly:"毎月",Yearly:"毎年"},RecurrenceCombo:{None:"なし",Custom:"ユーザー…"},Summary:{"Summary for":e=>` ${e}の概要`},ScheduleRangeCombo:{completeview:"スケジュール全体",currentview:"表示中のスケジュール",daterange:"日付範囲",completedata:"スケジュール全体（すべてのイベント用）"},SchedulerExportDialog:{"Schedule range":"スケジュール範囲","Export from":"から","Export to":"まで"},ExcelExporter:{"No resource assigned":"リソースが割り当てられていません"},CrudManagerView:{serverResponseLabel:"サーバーの応答:"},DurationColumn:{Duration:"期間"}},k=i.publishLocale(C),S={localeName:"Ja",localeDesc:"日本語",localeCode:"ja",ConstraintTypePicker:{none:"なし",assoonaspossible:"できるだけ早く",aslateaspossible:"できるだけ遅く",muststarton:"指定日に開始",mustfinishon:"指定日に終了",startnoearlierthan:"指定日以降に開始",startnolaterthan:"指定日までに開始",finishnoearlierthan:"指定日以降に終了",finishnolaterthan:"指定日までに終了"},SchedulingDirectionPicker:{Forward:"前進",Backward:"後退",inheritedFrom:"継承された",enforcedBy:"強制された"},CalendarField:{"Default calendar":"既定の予定表"},TaskEditorBase:{Information:"情報",Save:"保存する",Cancel:"取り消す",Delete:"削除する",calculateMask:"計算中",saveError:"保存できません。まずエラーを修正してください",repeatingInfo:"繰り返しイベントを表示",editRepeating:"編集する"},TaskEdit:{"Edit task":"タスクを編集する",ConfirmDeletionTitle:"削除を確認する",ConfirmDeletionMessage:"イベントを本当に削除しますか？"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"33em"},SchedulerGeneralTab:{labelWidth:"6em",General:"全般",Name:"名前",Resources:"リソース","% complete":"％完了",Duration:"期間",Start:"開始",Finish:"終了",Effort:"工数",Preamble:"プリアンブル",Postamble:"ポストアンブル"},GeneralTab:{labelWidth:"6.5em",General:"全般",Name:"名前","% complete":"％完了",Duration:"期間",Start:"開始",Finish:"終了",Effort:"工数",Dates:"日付"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"アドバンスト",Calendar:"予定表","Scheduling mode":"スケジュールモード","Effort driven":"存作業の優先","Manually scheduled":"スケジュール","Constraint type":"制約タイプ","Constraint date":"制約日",Inactive:"非アクティブ","Ignore resource calendar":"リソースカレンダーを無視する"},AdvancedTab:{labelWidth:"11.5em",Advanced:"アドバンスト",Calendar:"予定表","Scheduling mode":"スケジュールモード","Effort driven":"存作業の優先","Manually scheduled":"手動スケジュール","Constraint type":"制約タイプ","Constraint date":"制約日",Constraint:"制約",Rollup:"ロールアップ",Inactive:"非アクティブ","Ignore resource calendar":"リソースカレンダーを無視する","Scheduling direction":"スケジュールの方向"},DependencyTab:{Predecessors:"先行タスク",Successors:"後続タスク",ID:"ID",Name:"名前",Type:"種類",Lag:"ラグ",cyclicDependency:"循環依存関係",invalidDependency:"無効な依存関係"},NotesTab:{Notes:"備考"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"リソース",Resource:"リソース",Units:"単位"},RecurrenceTab:{title:"繰り返す"},SchedulingModePicker:{Normal:"普通","Fixed Duration":"期間固定","Fixed Units":"単位数固定","Fixed Effort":"工数固定"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} の {available}</span> 割り当て済',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} の {available}</span> 割り当て済',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} の {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} の {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'に {startDate}<br><span class="{cls}">{allocated} の {available}</span> 割り当て済:<br>{assignments}',plusMore:"+{value} 増"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> 割り当て済',barTipOnDate:'<b>{event}</b> に {startDate}<br><span class="{cls}">{allocated}</span> 割り当て済',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} の {available}</span> 割り当て済:<br>{assignments}',groupBarTipOnDate:'に {startDate}<br><span class="{cls}">{allocated} の {available}</span> 割り当て済:<br>{assignments}',plusMore:"+{value} 増",nameColumnText:"リソース／イベント"},SchedulingIssueResolutionPopup:{"Cancel changes":"変更を取り消し、何もしない",schedulingConflict:"スケジュール上の矛盾",emptyCalendar:"予定表設定のエラー",cycle:"スケジュールサイクル",Apply:"適用する"},CycleResolutionPopup:{dependencyLabel:"依存関係を選択してください:",invalidDependencyLabel:"対処すべき無効な依存関係があります:"},DependencyEdit:{Active:"アクティブ"},SchedulerProBase:{propagating:"プロジェクト計算中",storePopulation:"データ読み込み中",finalizing:"確定中"},EventSegments:{splitEvent:"イベントを分割する",renameSegment:"名前を変更する"},NestedEvents:{deNestingNotAllowed:"入れ子の解除はできません",nestingNotAllowed:"入れ子はできません"},VersionGrid:{compare:"比較",description:"説明",occurredAt:"発生日時",rename:"名前を変更",restore:"復元する",stopComparing:"比較を停止する"},Versions:{entityNames:{TaskModel:"タスク",AssignmentModel:"割り当て",DependencyModel:"リンク",ProjectModel:"プロジェクト",ResourceModel:"リソース",other:"対象"},entityNamesPlural:{TaskModel:"複数のタスク",AssignmentModel:"複数の割り当て",DependencyModel:"複数のリンク",ProjectModel:"複数のプロジェクト",ResourceModel:"複数のリソース",other:"複数の対象"},transactionDescriptions:{update:" {n} {entities}を変更した",add:" {n} {entities}を追加した",remove:" {n} {entities}を削除した",move:" {n} {entities}を移動した",mixed:" {n} {entities}を変更した"},addEntity:"{type} **{name}**を追加した",removeEntity:"{type} **{name}**を削除した",updateEntity:"{type} **{name}**を変更した",moveEntity:"{from} から {to}　へ{type} **{name}**を移動した",addDependency:"**{from}** から **{to}**　へのリンクを追加した",removeDependency:"**{from}** から **{to}**　へのリンクを削除した",updateDependency:"**{from}** から **{to}**　へのリンクを編集した",addAssignment:"**{resource}** を **{event}**　に割り当てた",removeAssignment:"**{event}**　から　**{resource}**　の割り当てを削除した",updateAssignment:"**{event}**　へ　**{resource}**　の割り当てを編集した",noChanges:"変更なし",nullValue:"なし",versionDateFormat:"M/D/YYYY h:mm a",undid:"変更を取り消す",redid:"変更をやり直す",editedTask:"タスクプロパティを編集した",deletedTask:"ひとつのタスクを削除した",movedTask:"ひとつのタスクを移動した",movedTasks:"複数のタスクを移動した"}},R=i.publishLocale(S);if(typeof r.exports=="object"&&typeof s=="object"){var F=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==a&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(o=Object.getOwnPropertyDescriptor(t,n))||o.enumerable});return e};r.exports=F(r.exports,s)}return r.exports});
