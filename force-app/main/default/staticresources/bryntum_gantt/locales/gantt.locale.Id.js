(function(s,l){var o=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var u=l(),p=o?exports:s;for(var m in u)p[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var s={},l={exports:s},o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,c=(a,e,n)=>e in a?o(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,k=(a,e)=>{for(var n in e)o(a,n,{get:e[n],enumerable:!0})},h=(a,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of p(e))!m.call(a,t)&&t!==n&&o(a,t,{get:()=>e[t],enumerable:!(i=u(e,t))||i.enumerable});return a},b=a=>h(o({},"__esModule",{value:!0}),a),y=(a,e,n)=>(c(a,typeof e!="symbol"?e+"":e,n),n),g={};k(g,{default:()=>E}),l.exports=b(g);var d=class{static mergeLocales(...a){let e={};return a.forEach(n=>{Object.keys(n).forEach(i=>{typeof n[i]=="object"?e[i]={...e[i],...n[i]}:e[i]=n[i]})}),e}static trimLocale(a,e){let n=(i,t)=>{a[i]&&(t?a[i][t]&&delete a[i][t]:delete a[i])};Object.keys(e).forEach(i=>{Object.keys(e[i]).length>0?Object.keys(e[i]).forEach(t=>n(i,t)):n(i)})}static normalizeLocale(a,e){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!e)throw new Error('"config" parameter can not be empty');e.locale?e.name=a||e.name:e.localeName=a}else e=a;let n={};if(e.name||e.locale)n=Object.assign({localeName:e.name},e.locale),e.desc&&(n.localeDesc=e.desc),e.code&&(n.localeCode=e.code),e.path&&(n.localePath=e.path);else{if(!e.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},e)}for(let i of["name","desc","code","path"])n[i]&&delete n[i];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(a){globalThis.bryntum.locales=a}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(a){globalThis.bryntum.locale=a||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,e){let{locales:n}=globalThis.bryntum,i=d.normalizeLocale(a,e),{localeName:t}=i;return!n[t]||e===!0?n[t]=i:n[t]=this.mergeLocales(n[t]||{},i||{}),n[t]}},r=d;y(r,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},r._$name="LocaleHelper";var T={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Hapus dependensi"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Nonaktifkan dependensi"},CycleEffectDescription:{descriptionTpl:"Siklus ditemukan, dibentuk oleh: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" kalender tidak menyediakan interval waktu kerja.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"gunakan kalender 24 jam dengan Sabtu dan Minggu libur."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"gunakan kalender 8 jam (08:00-12:00, 13:00-17:00) dengan Sabtu dan Minggu libur."},ConflictEffectDescription:{descriptionTpl:"Konflik penjadwalan ditemukan: {0} mengalami konflik dengan {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Tanggal mulai proyek {0}",endDateDescriptionTpl:"Tanggal selesai proyek {0}"},DependencyType:{long:["Mulai-hingga-Mulai","Mulai-hingga-Selesai","Selesai-hingga-Mulai","Selesai-hingga-Selesai"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Dijadwalkan secara manual "{2}" memaksa anak-anaknya untuk mulai secepatnya pada {0}',endDescriptionTpl:'Dijadwalkan secara manual "{2}" memaksa anak-anaknya untuk selesai selambatnya pada {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Nonaktifkan penjadwalan manual untuk "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Dependensi ({2}) dari "{3}" hingga "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Hapus dependensi dari "{1}" hingga "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Nonaktifkan dependensi dari "{1}" hingga "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Pembatas "{2}" {3} {0} tugas',endDateDescriptionTpl:'Pembatas "{2}" {3} {1} tugas',constraintTypeTpl:{startnoearlierthan:"Dimulai secepatnya pada",finishnoearlierthan:"Diselesaikan secepatnya pada",muststarton:"Harus dimulai pada",mustfinishon:"Harus diselesaikan pada",startnolaterthan:"Dimulai selambatnya pada",finishnolaterthan:"Diselesaikan selambatnya pada"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Hapus "{1}" pembatas tugas "{0}"'}},w=r.publishLocale(T),D={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",Object:{Yes:"Ya",No:"Tidak",Cancel:"Batal",Ok:"OK",Week:"Minggu"},Combo:{noResults:"Tidak ada hasil",recordNotCommitted:"Data tidak dapat ditambahkan",addNewValue:a=>`Tambahkan ${a}`},FilePicker:{file:"File"},Field:{badInput:"Nilai bidang tidak valid",patternMismatch:"Nilai harus cocok dengan pola tertentu",rangeOverflow:a=>`Nilai harus kurang dari atau sama dengan ${a.max}`,rangeUnderflow:a=>`Nilai harus lebih besar atau sama dengan ${a.min}`,stepMismatch:"Nilai harus cocok dengan langkah",tooLong:"Nilai harus lebih singkat",tooShort:"Nilai harus lebih panjang",typeMismatch:"Nilai harus dalam format khusus",valueMissing:"Bidang ini wajib diisi",invalidValue:"Nilai bidang tidak valid",minimumValueViolation:"Pelanggaran nilai minimum",maximumValueViolation:"Pelanggaran nilai maksimum",fieldRequired:"Bidang ini wajib diisi",validateFilter:"Nilai harus dipilih dari daftar"},DateField:{invalidDate:"Input data tidak valid"},DatePicker:{gotoPrevYear:"Buka tahun sebelumnya",gotoPrevMonth:"Buka bulan sebelumnya",gotoNextMonth:"Buka bulan berikutnya",gotoNextYear:"Buka tahun berikutnya"},NumberFormat:{locale:"id",currency:"IDR"},DurationField:{invalidUnit:"Unit tidak valid"},TimeField:{invalidTime:"Input waktu tidak valid"},TimePicker:{hour:"Jam",minute:"Menit",second:"Detik"},List:{loading:"Memuat..."},GridBase:{loadMask:"Memuat...",syncMask:"Menyimpan perubahan, mohon tunggu..."},PagingToolbar:{firstPage:"Buka halaman pertama",prevPage:"Buka halaman sebelumnya",page:"Halaman",nextPage:"Buka halaman berikutnya",lastPage:"Buka halaman terakhir",reload:"Muat ulang halaman saat ini",noRecords:"Tidak ada data untuk ditampilkan",pageCountTemplate:a=>`dari ${a.lastPage}`,summaryTemplate:a=>`Menampilkan data ${a.start} - ${a.end} dari ${a.allCount}`},PanelCollapser:{Collapse:"Ciutkan",Expand:"Perluas"},Popup:{close:"Tutup Sembulan"},UndoRedo:{Undo:"Urungkan",Redo:"Ulangi",UndoLastAction:"Urungkan tindakan terakhir",RedoLastAction:"Ulangi tindakan terakhir yang diurungkan",NoActions:"Tidak ada item dalam antrean yang diurungkan"},FieldFilterPicker:{equals:"sama dengan",doesNotEqual:"tidak sama dengan",isEmpty:"kosong",isNotEmpty:"tidak kosong",contains:"berisi",doesNotContain:"tidak berisi",startsWith:"diawali dengan",endsWith:"diakhiri dengan",isOneOf:"salah satu dari",isNotOneOf:"bukan salah satu dari",isGreaterThan:"lebih besar dari",isLessThan:"lebih kecil dari",isGreaterThanOrEqualTo:"lebih besar dari atau sama dengan",isLessThanOrEqualTo:"lebih kecil dari atau sama dengan",isBetween:"antara",isNotBetween:"bukan antara",isBefore:"adalah sebelum",isAfter:"adalah setelah",isToday:"adalah hari ini",isTomorrow:"adalah besok",isYesterday:"adalah kemarin",isThisWeek:"adalah minggu ini",isNextWeek:"adalah minggu depan",isLastWeek:"adalah minggu lalu",isThisMonth:"adalah bulan ini",isNextMonth:"adalah bulan depan",isLastMonth:"adalah bulan lalu",isThisYear:"adalah tahun ini",isNextYear:"adalah tahun depan",isLastYear:"adalah tahun lalu",isYearToDate:"adalah tahun berjalan",isTrue:"benar",isFalse:"salah",selectAProperty:"Pilih properti",selectAnOperator:"Pilih operator",caseSensitive:"Peka huruf besar/kecil",and:"dan",dateFormat:"D/M/YY",selectOneOrMoreValues:"Pilih satu nilai atau lebih",enterAValue:"Masukkan nilai",enterANumber:"Masukkan angka",selectADate:"Pilih tanggal"},FieldFilterPickerGroup:{addFilter:"Tambahkan filter"},DateHelper:{locale:"id",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milidetik",plural:"md",abbrev:"md"},{single:"detik",plural:"detik",abbrev:"dtk"},{single:"menit",plural:"menit",abbrev:"mnt"},{single:"jam",plural:"jam",abbrev:"j"},{single:"hari",plural:"hari",abbrev:"h"},{single:"minggu",plural:"minggu",abbrev:"m"},{single:"bulan",plural:"bulan",abbrev:"bln"},{single:"triwulan",plural:"triwulan",abbrev:"tw"},{single:"tahun",plural:"tahun",abbrev:"thn"},{single:"dekade",plural:"dekade",abbrev:"dek"}],unitAbbreviations:[["md"],["d","dtk"],["m","mnt"],["j","j"],["h"],["m","minggu"],["b","bln","bulan"],["tw","tri","triwulan"],["t","thn"],["dek"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:a=>a}},N=r.publishLocale(D),v=new String,S={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",ColumnPicker:{column:"Kolom",columnsMenu:"Kolom",hideColumn:"Sembunyikan kolom",hideColumnShort:"Sembunyikan",newColumns:"Kolom baru"},Filter:{applyFilter:"Terapkan filter",filter:"Filter",editFilter:"Edit filter",on:"Dengan",before:"Sebelum",after:"Sesudah",equals:"Sama dengan",lessThan:"Kurang dari",moreThan:"Lebih dari",removeFilter:"Hapus filter",disableFilter:"Nonaktifkan filter"},FilterBar:{enableFilterBar:"Tampilkan kolom filter",disableFilterBar:"Sembunyikan kolom filter"},Group:{group:"Kelompokkan",groupAscending:"Kelompokkan naik",groupDescending:"Kelompokkan turun",groupAscendingShort:"Naik",groupDescendingShort:"Turun",stopGrouping:"Hentikan pengelompokan",stopGroupingShort:"Hentikan"},HeaderMenu:{moveBefore:a=>`Pindahkan sebelum "${a}"`,moveAfter:a=>`Pindahkan setelah "${a}"`,collapseColumn:"Ciutkan kolom",expandColumn:"Perluas kolom"},ColumnRename:{rename:"Ganti nama"},MergeCells:{mergeCells:"Gabungkan sel",menuTooltip:"Gabungkan sel dengan nilai yang sama ketika disortir dengan kolom ini"},Search:{searchForValue:"Cari nilai"},Sort:{sort:"Sortir",sortAscending:"Sortir naik",sortDescending:"Sortir turun",multiSort:"Multi-sortir",removeSorter:"Hapus penyortir",addSortAscending:"Tambahkan penyortir naik",addSortDescending:"Tambahkan penyortir turun",toggleSortAscending:"Ubah ke naik",toggleSortDescending:"Ubah ke turun",sortAscendingShort:"Naik",sortDescendingShort:"Turun",removeSorterShort:"Hapus",addSortAscendingShort:"+ Naik",addSortDescendingShort:"+ Turun"},Column:{columnLabel:a=>`kolom ${a.text?`${a.text}. `:""}SPASI untuk menu konteks${a.sortable?", ENTER untuk menyortir":""}`,cellLabel:v},Checkbox:{toggleRowSelect:"Aktifkan/nonaktifkan pilihan baris",toggleSelection:"Aktifkan/nonaktifkan pilihan et data keseluruhan"},RatingColumn:{cellLabel:a=>{var e;return`${a.text?a.text:""} ${(e=a.location)!=null&&e.record?` penilaian : ${a.location.record[a.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Pemuatan data gagal!",syncFailedMessage:"Sinkronisasi data gagal!",unspecifiedFailure:"Kegagalan tidak ditentukan",networkFailure:"Kesalahan jaringan",parseFailure:"Gagal mengurai respons server",serverResponse:"Respons server:",noRows:"Tidak ada data untuk ditampilkan",moveColumnLeft:"Pindahkan ke bagian kiri",moveColumnRight:"Pindahkan ke bagian kanan",moveColumnTo:a=>`Pindahkan kolom ke ${a}`},CellMenu:{removeRow:"Hapus"},RowCopyPaste:{copyRecord:"Salin",cutRecord:"Potong",pasteRecord:"Tempel",rows:"baris-baris",row:"baris"},CellCopyPaste:{copy:"Salin",cut:"Potong",paste:"Tempel"},PdfExport:{"Waiting for response from server":"Menunggu respons dari server...","Export failed":"Ekspor gagal","Server error":"Kesalahan server","Generating pages":"Membuat halaman...","Click to abort":"Batalkan"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Pengaturan ekspor",export:"Ekspor",exporterType:"Mengontrol pemberian nomor halaman",cancel:"Batalkan",fileFormat:"Format file",rows:"Baris",alignRows:"Ratakan baris",columns:"Kolom",paperFormat:"Format kertas",orientation:"Orientasi",repeatHeader:"Ulangi header"},ExportRowsCombo:{all:"Semua baris",visible:"Baris yang dapat dilihat"},ExportOrientationCombo:{portrait:"Potret",landscape:"Lanskap"},SinglePageExporter:{singlepage:"Halaman tunggal"},MultiPageExporter:{multipage:"Multi-halaman",exportingPage:({currentPage:a,totalPages:e})=>`Mengekspor halaman ${a}/${e}`},MultiPageVerticalExporter:{multipagevertical:"Multi- halaman (vertikal)",exportingPage:({currentPage:a,totalPages:e})=>`Mengekspor halaman ${a}/${e}`},RowExpander:{loading:"Memuat",expand:"Perluas",collapse:"Ciutkan"}},A=r.publishLocale(S),M={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",Object:{newEvent:"Acara baru"},ResourceInfoColumn:{eventCountText:a=>a+" acara"},Dependencies:{from:"Dari",to:"Hingga",valid:"Valid",invalid:"Tidak valid"},DependencyType:{SS:"MM",SF:"MS",FS:"SM",FF:"SS",StartToStart:"Mulai-hingga-Mulai",StartToEnd:"Mulai-hingga-Selesai",EndToStart:"Selesai-hingga-Mulai",EndToEnd:"Selesai-hingga-Selesai",short:["MM","MS","SM","SS"],long:["Mulai-hingga-Mulai","Mulai-hingga-Selesai","Selesai-hingga-Selesai","Selesai-hingga-Selesai"]},DependencyEdit:{From:"Dari",To:"Hingga",Type:"Jenis",Lag:"Lag","Edit dependency":"Edit dependensi",Save:"Simpan",Delete:"Hapus",Cancel:"Batalkan",StartToStart:"Mulai hingga Mulai",StartToEnd:"Mulai hingga Selesai",EndToStart:"Selesai hingga Mulai",EndToEnd:"Selesai hingga Selesai"},EventEdit:{Name:"Nama",Resource:"Sumber daya",Start:"Mulai",End:"Akhiri",Save:"Simpan",Delete:"Hapus",Cancel:"Batalkan","Edit event":"Edit acara",Repeat:"Ulangi"},EventDrag:{eventOverlapsExisting:"Acara tumpang tindih dengan acara yang sudah ada untuk sumber daya ini",noDropOutsideTimeline:"Acara tidak dapat dibatalkan sepenuhnya di luar linimasa"},SchedulerBase:{"Add event":"Tambahkan acara","Delete event":"Hapus acara","Unassign event":"Batalkan penugasan acara"},TimeAxisHeaderMenu:{pickZoomLevel:"Perbesar",activeDateRange:"Rentang tanggal",startText:"Tanggal mulai",endText:"Tanggal berakhir",todayText:"Hari ini"},EventCopyPaste:{copyEvent:"Salin acara",cutEvent:"Potong acara",pasteEvent:"Tempel acara"},EventFilter:{filterEvents:"Filter tugas",byName:"Berdasarkan nama"},TimeRanges:{showCurrentTimeLine:"Tampilkan linimasa terkini"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Detik"},minuteAndHour:{topDateFormat:"ddd DD/MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Hari"},day:{name:"Hari/jam"},week:{name:"Minggu/jam"},dayAndWeek:{displayDateFormat:"ll LST",name:"Minggu/hari"},dayAndMonth:{name:"Bulan"},weekAndDay:{displayDateFormat:"ll LST",name:"Minggu"},weekAndMonth:{name:"Minggu-minggu"},weekAndDayLetter:{name:"Minggu/hari kerja"},weekDateAndMonth:{name:"Bulan/minggu"},monthAndYear:{name:"Bulan"},year:{name:"Tahun"},manyYears:{name:"Beberapa tahun"}},RecurrenceConfirmationPopup:{"delete-title":"Anda menghapus acara","delete-all-message":"Anda ingin menghapus semua kejadian dari acara ini?","delete-further-message":"Anda ingin menghapus kejadian ini dan semua kejadian di masa mendatang terkait acara ini, atau hanya kejadian tertentu saja?","delete-further-btn-text":"Hapus Semua Acara Di Masa Mendatang","delete-only-this-btn-text":"Hapus Hanya Acara Ini","update-title":"Anda mengganti acara rutin","update-all-message":"Anda ingin mengganti semua kejadian dari acara ini?","update-further-message":"Anda ingin hanya mengubah kejadian ini dari acara ini, atau ini dan kejadian di masa mendatang?","update-further-btn-text":"Semua Kejadian di Masa Mendatang","update-only-this-btn-text":"Hanya Acara Ini",Yes:"Iya",Cancel:"Batal",width:600},RecurrenceLegend:{" and ":" dan ",Daily:"Harian","Weekly on {1}":({days:a})=>`Mingguan pada ${a}`,"Monthly on {1}":({days:a})=>`Bulanan pada ${a}`,"Yearly on {1} of {2}":({days:a,months:e})=>`Tahunan pada ${a} dari ${e}`,"Every {0} days":({interval:a})=>`Setiap ${a} hari`,"Every {0} weeks on {1}":({interval:a,days:e})=>`Setiap ${a} minggu pada ${e}`,"Every {0} months on {1}":({interval:a,days:e})=>`Setiap ${a} bulan pada ${e}`,"Every {0} years on {1} of {2}":({interval:a,days:e,months:n})=>`Setiap ${a} tahun pada ${e} dari ${n}`,position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir",day:"hari",weekday:"hari kerja","weekend day":"akhir pekan",daysFormat:({position:a,days:e})=>`${a} ${e}`},RecurrenceEditor:{"Repeat event":"Ulangi acara",Cancel:"Batalkan",Save:"Simpan",Frequency:"Frekuensi",Every:"Setiap",DAILYintervalUnit:"hari",WEEKLYintervalUnit:"minggu",MONTHLYintervalUnit:"bulan",YEARLYintervalUnit:"tahun",Each:"Setiap","On the":"Pada","End repeat":"Akhiri pengulangan","time(s)":"kali"},RecurrenceDaysCombo:{day:"hari",weekday:"hari kerja","weekend day":"akhir pekan"},RecurrencePositionsCombo:{position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir"},RecurrenceStopConditionCombo:{Never:"Tidak",After:"Setelah","On date":"Pada tanggal"},RecurrenceFrequencyCombo:{None:"Tidak berulang",Daily:"Harian",Weekly:"Mingguan",Monthly:"Bulanan",Yearly:"Tahunan"},RecurrenceCombo:{None:"Tidak ada",Custom:"Kustom..."},Summary:{"Summary for":a=>`Ringkasan untuk ${a}`},ScheduleRangeCombo:{completeview:"Jadwal lengkap",currentview:"Jadwal terlihat",daterange:"Rentang tanggal",completedata:"Jadwal lengkap (untuk semua acara)"},SchedulerExportDialog:{"Schedule range":"Rentang jadwal","Export from":"Dari","Export to":"Hingga"},ExcelExporter:{"No resource assigned":"Tidak ada sumber daya yang ditugaskan"},CrudManagerView:{serverResponseLabel:"Respons server:"},DurationColumn:{Duration:"Durasi"}},j=r.publishLocale(M),f={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",ConstraintTypePicker:{none:"Tidak ada",muststarton:"Harus dimulai pada",mustfinishon:"Harus diselesaikan pada",startnoearlierthan:"Dimulai secepatnya pada",startnolaterthan:"Dimulai selambatnya pada",finishnoearlierthan:"Diselesaikan secepatnya pada",finishnolaterthan:"Diselesaikan selambatnya pada"},CalendarField:{"Default calendar":"Kalender default"},TaskEditorBase:{Information:"Informasi",Save:"Simpan",Cancel:"Batalkan",Delete:"Hapus",calculateMask:"Menghitung...",saveError:"Tidak dapat menyimpan, perbaiki kesalahan dulu",repeatingInfo:"Melihat peristiwa yang berulang",editRepeating:"Mengedit"},TaskEdit:{"Edit task":"Edit tugas",ConfirmDeletionTitle:"Konfirmasi penghapusan",ConfirmDeletionMessage:"Anda ingin menghapus acara?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Umum",Name:"Nama",Resources:"Sumber daya","% complete":"% selesai",Duration:"Durasi",Start:"Mulai",Finish:"Selesaikan",Effort:"Upaya",Preamble:"Pembuka",Postamble:"Penutup"},GeneralTab:{labelWidth:"6.5em",General:"Umum",Name:"Nama","% complete":"% selesai",Duration:"Durasi",Start:"Mulai",Finish:"Selesaikan",Effort:"Upaya",Dates:"Tanggal"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Lanjutan",Calendar:"Kalender","Scheduling mode":"Mode penjadwalan","Effort driven":"Upaya yang dilakukan","Manually scheduled":"Dijadwalkan secara manual","Constraint type":"Jenis batasan","Constraint date":"Tanggal batasan",Inactive:"Tidak aktif","Ignore resource calendar":"Mengabaikan kalender resource"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Lanjutan",Calendar:"Kalender","Scheduling mode":"Mode penjadwalan","Effort driven":"Upaya yang dilakukan","Manually scheduled":"Dijadwalkan secara manual","Constraint type":"Jenis batasan","Constraint date":"Tanggal batasan",Constraint:"Batasan",Rollup:"Penggabungan",Inactive:"Tidak aktif","Ignore resource calendar":"Mengabaikan kalender resource"},DependencyTab:{Predecessors:"Pendahulu",Successors:"Penerus",ID:"ID",Name:"Nama",Type:"Jenis",Lag:"Lag",cyclicDependency:"Dependensi siklik",invalidDependency:"Dependensi tidak valid"},NotesTab:{Notes:"Catatan"},ResourcesTab:{unitsTpl:({value:a})=>`${a}%`,Resources:"Sumber daya",Resource:"Sumber daya",Units:"Unit"},RecurrenceTab:{title:"Mengulangi"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Durasi Tetap","Fixed Units":"Unit Tetap","Fixed Effort":"Upaya Tetap"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} dari {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan:<br>{assignments}',groupBarTipOnDate:'Pada {startDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan:<br>{assignments}',plusMore:"+{value} lagi"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> yang dialokasikan',barTipOnDate:'<b>{event}</b> pada {startDate}<br><span class="{cls}">{allocated}</span> yang dialokasikan',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan:<br>{assignments}',groupBarTipOnDate:'Pada {startDate}<br><span class="{cls}">{allocated} dari {available}</span> yang dialokasikan:<br>{assignments}',plusMore:"+{value} lagi",nameColumnText:"Sumber daya/Acara"},SchedulingIssueResolutionPopup:{"Cancel changes":"Batalkan perubahan dan jangan terapkan apa pun",schedulingConflict:"Konflik penjadwalan",emptyCalendar:"Kesalahan konfigurasi kalender",cycle:"Siklus penjadwalan",Apply:"Terapkan"},CycleResolutionPopup:{dependencyLabel:"Pilih dependensi:",invalidDependencyLabel:"Ada dependensi tidak valid yang terlibat yang harus ditangani:"},DependencyEdit:{Active:"Aktif"},SchedulerProBase:{propagating:"Menghitung proyek",storePopulation:"Memuat data",finalizing:"Memfinalisasi hasil"},EventSegments:{splitEvent:"Bagikan peristiwa",renameSegment:"Ganti nama"},NestedEvents:{deNestingNotAllowed:"De-nesting tidak diizinkan",nestingNotAllowed:"Nesting tidak diizinkan"},VersionGrid:{compare:"Bandingkan",description:"Deskripsi",occurredAt:"Terjadi pada",rename:"Ganti nama",restore:"Pulihkan",stopComparing:"Berhenti membandingkan"},Versions:{entityNames:{TaskModel:"tugas",AssignmentModel:"penugasan",DependencyModel:"tautan",ProjectModel:"proyek",ResourceModel:"resource",other:"objek"},entityNamesPlural:{TaskModel:"tugas",AssignmentModel:"penugasan",DependencyModel:"tautan",ProjectModel:"proyek",ResourceModel:"resource",other:"objek"},transactionDescriptions:{update:"Mengubah {n} {entities}",add:"Menambahkan {n} {entities}",remove:"Menghapus {n} {entities}",move:"Memindahkan {n} {entities}",mixed:"Mengubah {n} {entities}"},addEntity:"Menambahkan {type} **{name}**",removeEntity:"Menghapus {type} **{name}**",updateEntity:"Mengubah {type} **{name}**",moveEntity:"Memindahkan {type} **{name}** dari {from} ke {to}",addDependency:"Menambahkan tautan dari **{from}** ke **{to}**",removeDependency:"Menghapus tautan dari **{from}** ke **{to}**",updateDependency:"Mengedit tautan dari **{from}** ke **{to}**",addAssignment:"Menugaskan **{resource}** ke **{event}**",removeAssignment:"Menghapus penugasan **{resource}** dari **{event}**",updateAssignment:"Mengedit penugasan **{resource}** ke **{event}**",noChanges:"Tidak ada perubahan",nullValue:"tidak ada",versionDateFormat:"M/D/YYYY h:mm a",undid:"Mengurungkan perubahan",redid:"Mengulangi perubahan",editedTask:"Mengedit properti tugas",deletedTask:"Menghapus tugas",movedTask:"Memindahkan tugas",movedTasks:"Memindahkan tugas-tugas"}},R=r.publishLocale(f),C={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",Object:{Save:"Simpan"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Mengabaikan kalender resource"},InactiveColumn:{Inactive:"Tidak aktif"},AddNewColumn:{"New Column":"Kolom baru"},CalendarColumn:{Calendar:"Kalender"},EarlyStartDateColumn:{"Early Start":"Mulai Lebih Awal"},EarlyEndDateColumn:{"Early End":"Akhiri Lebih Awal"},LateStartDateColumn:{"Late Start":"Mulai Lebih Akhir"},LateEndDateColumn:{"Late End":"Selesao Lebih Akhir"},TotalSlackColumn:{"Total Slack":"Kelelahan total"},ConstraintDateColumn:{"Constraint Date":"Tanggal Batasan"},ConstraintTypeColumn:{"Constraint Type":"Jenis Batasan"},DeadlineDateColumn:{Deadline:"Tenggat Waktu"},DependencyColumn:{"Invalid dependency":"Dependensi tidak valid"},DurationColumn:{Duration:"Durasi"},EffortColumn:{Effort:"Upaya"},EndDateColumn:{Finish:"Selesaikan"},EventModeColumn:{"Event mode":"Mode acara",Manual:"Manual",Auto:"Otomatis"},ManuallyScheduledColumn:{"Manually scheduled":"Dijadwalkan secara manual"},MilestoneColumn:{Milestone:"Tonggak pencapaian"},NameColumn:{Name:"Nama"},NoteColumn:{Note:"Catatan"},PercentDoneColumn:{"% Done":"% Selesai"},PredecessorColumn:{Predecessors:"Pendahulu"},ResourceAssignmentColumn:{"Assigned Resources":"Sumber daya yang ditugaskan","more resources":"sumber daya lainnya"},RollupColumn:{Rollup:"Penggabungan"},SchedulingModeColumn:{"Scheduling Mode":"Mode Penjadwalan"},SequenceColumn:{Sequence:"Urutan"},ShowInTimelineColumn:{"Show in timeline":"Tampilkan di linimasa"},StartDateColumn:{Start:"Mulai"},SuccessorColumn:{Successors:"Penerus"},TaskCopyPaste:{copyTask:"Salin",cutTask:"Potong",pasteTask:"Tempel"},WBSColumn:{WBS:"WBS",renumber:"Menomori ulang"},DependencyField:{invalidDependencyFormat:"Format dependensi tidak valid"},ProjectLines:{"Project Start":"Proyek dimulai","Project End":"Proyek berakhir"},TaskTooltip:{Start:"Mulai",End:"Berakhir",Duration:"Durasi",Complete:"Selesai"},AssignmentGrid:{Name:"Nama sumber daya",Units:"Unit",unitsTpl:({value:a})=>a?a+"%":""},Gantt:{Edit:"Sunting",Indent:"Indentasi",Outdent:"Outdentasi","Convert to milestone":"Ubah ke Tonggak pencapaian",Add:"Tambahkan...","New task":"Tugas baru","New milestone":"Tonggak pencapaian baru","Task above":"Tugas di atas","Task below":"Tugas di bawah","Delete task":"Hapus",Milestone:"Tonggak pencapaian","Sub-task":"Sub tugas",Successor:"Penerus",Predecessor:"Pendahulu",changeRejected:"Mesin penjadwalan menolak perubahan",linkTasks:"Tambahkan dependensi",unlinkTasks:"Hapus dependensi"},EventSegments:{splitTask:"Bagi tugas"},Indicators:{earlyDates:"Dimulai/diakhiri lebih awal",lateDates:"Dimulai/diakhiri lebih akhir",Start:"Mulai",End:"Berakhir",deadlineDate:"Tenggat Waktu"},Versions:{indented:"Indentasi",outdented:"Outdentasi",cut:"Memotong",pasted:"Menyalin",deletedTasks:"Menghapus tugas"}},E=r.publishLocale(C);if(typeof l.exports=="object"&&typeof s=="object"){var P=(a,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Object.getOwnPropertyNames(e))!Object.prototype.hasOwnProperty.call(a,t)&&t!==n&&Object.defineProperty(a,t,{get:()=>e[t],enumerable:!(i=Object.getOwnPropertyDescriptor(e,t))||i.enumerable});return a};l.exports=P(l.exports,s)}return l.exports});
