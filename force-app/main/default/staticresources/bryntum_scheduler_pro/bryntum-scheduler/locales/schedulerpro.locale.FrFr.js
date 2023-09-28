/*!
 *
 * Bryntum Scheduler Pro 5.5.1 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,o){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],o);else if(typeof module=="object"&&module.exports)module.exports=o();else{var c=o(),p=l?exports:s;for(var d in c)p[d]=c[d]}})(typeof self<"u"?self:void 0,()=>{var s={},o={exports:s},l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,v=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t)l(e,n,{get:t[n],enumerable:!0})},g=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of p(t))!d.call(e,a)&&a!==n&&l(e,a,{get:()=>t[a],enumerable:!(r=c(t,a))||r.enumerable});return e},b=e=>g(l({},"__esModule",{value:!0}),e),h=(e,t,n)=>(v(e,typeof t!="symbol"?t+"":t,n),n),m={};f(m,{default:()=>S}),o.exports=b(m);var u=class{static mergeLocales(...e){let t={};return e.forEach(n=>{Object.keys(n).forEach(r=>{typeof n[r]=="object"?t[r]={...t[r],...n[r]}:t[r]=n[r]})}),t}static trimLocale(e,t){let n=(r,a)=>{e[r]&&(a?e[r][a]&&delete e[r][a]:delete e[r])};Object.keys(t).forEach(r=>{Object.keys(t[r]).length>0?Object.keys(t[r]).forEach(a=>n(r,a)):n(r)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let n={};if(t.name||t.locale)n=Object.assign({localeName:t.name},t.locale),t.desc&&(n.localeDesc=t.desc),t.code&&(n.localeCode=t.code),t.path&&(n.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},t)}for(let r of["name","desc","code","path"])n[r]&&delete n[r];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||u.localeName}static get locale(){return u.localeName&&this.locales[u.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:n}=globalThis.bryntum,r=u.normalizeLocale(e,t),{localeName:a}=r;return!n[a]||t===!0?n[a]=r:n[a]=this.mergeLocales(n[a]||{},r||{}),n[a]}},i=u;h(i,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},i._$name="LocaleHelper";var D={localeName:"FrFr",localeDesc:"Français (France)",localeCode:"fr-FR",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Retirer la dépendance"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Désactiver la dépendance"},CycleEffectDescription:{descriptionTpl:"Un cycle a été trouvé, formé de : {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" le calendrier ne propose aucun intervalle de temps de travail.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Utiliser le calendrier de 24 heures avec les samedis et dimanches non travaillés."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Utiliser le calendrier de 8 heures (08:00-12:00, 13:00-17:00) avec les samedis et dimanches non travaillés."},ConflictEffectDescription:{descriptionTpl:"Un conflit de planification a été trouvé : {0} est en conflit avec {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Date de début du projet {0}",endDateDescriptionTpl:"Date de fin du projet {0}"},DependencyType:{long:["Du début au début","Du début à la fin","De la fin au début","De la fin à la fin"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'"{2}" planifié manuellement contraint ses enfants à commencer au plus tôt le {0}',endDescriptionTpl:'"{2}" planifié manuellement contraint ses enfants à finir au plus tard le {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Désactiver la planification manuelle pour "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Dépendance ({2}) du "{3}" au "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Retirer la dépendance du "{1}" au "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Désactiver la dépendance du "{1}" au "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Tâche "{2}" {3} {0} contrainte',endDateDescriptionTpl:'Tâche "{2}" {3} {1} contrainte',constraintTypeTpl:{startnoearlierthan:"Début au plus tôt le",finishnoearlierthan:"Fin au plus tôt le",muststarton:"Doit débuter le",mustfinishon:"Doit finir le",startnolaterthan:"Début au plus tard le",finishnolaterthan:"Fin au plus tard le"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Retirer "{1}" contrainte de tâche "{0}"'}},R=i.publishLocale(D),y={localeName:"FrFr",localeDesc:"Français (France)",localeCode:"fr-FR",Object:{Yes:"Oui",No:"Non",Cancel:"Annuler",Ok:"OK",Week:"Semaine"},ColorPicker:{noColor:"Pas de couleur"},Combo:{noResults:"Aucun résultat",recordNotCommitted:"L'enregistrement n'a pas pu être ajouté",addNewValue:e=>`Ajouter ${e}`},FilePicker:{file:"Fichier"},Field:{badInput:"Valeur de champ invalide",patternMismatch:"La valeur doit correspondre à un modèle spécifique",rangeOverflow:e=>`La valeur doit être inférieure ou égale à ${e.max}`,rangeUnderflow:e=>`La valeur doit être supérieure ou égale à ${e.min}`,stepMismatch:"La valeur doit correspondre au pas",tooLong:"La valeur doit être plus courte",tooShort:"La valeur doit être plus longue",typeMismatch:"La valeur doit respecter un format spécial",valueMissing:"Ce champ est requis",invalidValue:"Valeur de champ invalide",minimumValueViolation:"Non-respect de la valeur minimale",maximumValueViolation:"Non-respect de la valeur maximale",fieldRequired:"Ce champ est requis",validateFilter:"La valeur doit être sélectionnée dans la liste"},DateField:{invalidDate:"Saisie de la date invalide"},DatePicker:{gotoPrevYear:"Aller à l'année précédente",gotoPrevMonth:"Aller au mois précédent",gotoNextMonth:"Aller au mois suivant",gotoNextYear:"Aller à l'année suivante"},NumberFormat:{locale:"fr-FR",currency:"EUR"},DurationField:{invalidUnit:"Unité invalide"},TimeField:{invalidTime:"Saisie de l'heure invalide"},TimePicker:{hour:"Heure",minute:"Minute",second:"Seconde"},List:{loading:"Chargement en cours...",selectAll:"Tout sélectionner"},GridBase:{loadMask:"Chargement en cours...",syncMask:"Modifications en cours d'enregistrement, veuillez patienter..."},PagingToolbar:{firstPage:"Aller à la première page",prevPage:"Aller à la page précédente",page:"Page",nextPage:"Aller à la page suivante",lastPage:"Aller à la dernière page",reload:"Recharger la page en cours",noRecords:"Aucun enregistrement à afficher",pageCountTemplate:e=>`sur ${e.lastPage}`,summaryTemplate:e=>`Affichage des enregistrements ${e.start} - ${e.end} sur ${e.allCount}`},PanelCollapser:{Collapse:"Réduire",Expand:"Développer"},Popup:{close:"Fermer la fenêtre Popup"},UndoRedo:{Undo:"Annuler",Redo:"Rétablir",UndoLastAction:"Annuler la dernière action",RedoLastAction:"Rétablir la dernière action annulée",NoActions:"Aucun élément dans la file d'attente Annuler"},FieldFilterPicker:{equals:"est égal à",doesNotEqual:"n'est pas égal à",isEmpty:"est vide",isNotEmpty:"n'est pas vide",contains:"contient",doesNotContain:"ne contient pas",startsWith:"commence par",endsWith:"finit par",isOneOf:"est l'un de",isNotOneOf:"n'est pas l'un de",isGreaterThan:"est supérieur à",isLessThan:"est inférieur à",isGreaterThanOrEqualTo:"est supérieur ou égal à",isLessThanOrEqualTo:"est inférieur ou égal à",isBetween:"est entre",isNotBetween:"n'est pas entre",isBefore:"est avant",isAfter:"est après",isToday:"est aujourd'hui",isTomorrow:"est demain",isYesterday:"est hier",isThisWeek:"est cette semaine",isNextWeek:"est la semaine prochaine",isLastWeek:"est la semaine dernière",isThisMonth:"est ce mois",isNextMonth:"est le mois prochain",isLastMonth:"est le mois dernier",isThisYear:"est cette année",isNextYear:"est l'anné prochaine",isLastYear:"est l'année dernière",isYearToDate:"est l'année à ce jour",isTrue:"est vrai",isFalse:"est faux",selectAProperty:"Sélectionnez une propriété",selectAnOperator:"Sélectionnez un opérateur",caseSensitive:"Sensible à la casse",and:"et",dateFormat:"D/M/YY",selectOneOrMoreValues:"Sélectionnez une ou plusieurs valeurs",enterAValue:"Entrez une valeur",enterANumber:"Entrez un nombre",selectADate:"Sélectionnez une date"},FieldFilterPickerGroup:{addFilter:"Ajouter un filtre"},DateHelper:{locale:"fr-FR",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milliseconde",plural:"millisecondes",abbrev:"ms"},{single:"seconde",plural:"secondes",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"heure",plural:"heures",abbrev:"h"},{single:"jour",plural:"jours",abbrev:"j"},{single:"semaine",plural:"semaines",abbrev:"s"},{single:"mois",plural:"mois",abbrev:"m"},{single:"trimestre",plural:"trimestres",abbrev:"t"},{single:"année",plural:"années",abbrev:"a"},{single:"décennie",plural:"décennies",abbrev:"déc"}],unitAbbreviations:[["ms"],["s","s"],["m","min"],["h","h"],["j"],["s","sem"],["m","mon"],["T","trim"],["a","an"],["déc"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t={1:"er"}[e]||"ème";return e+t}}},P=i.publishLocale(y),T=new String,C={localeName:"FrFr",localeDesc:"Français (France)",localeCode:"fr-FR",ColumnPicker:{column:"Colonne",columnsMenu:"Colonnes",hideColumn:"Masquer la colonne",hideColumnShort:"Masquer",newColumns:"Nouvelles colonnes"},Filter:{applyFilter:"Appliquer le filtre",filter:"Filtre",editFilter:"Éditer le filtre",on:"Le",before:"Avant",after:"Après",equals:"Égal à",lessThan:"Inférieur à",moreThan:"Supérieur à",removeFilter:"Supprimer le filtre",disableFilter:"Désactiver le filtre"},FilterBar:{enableFilterBar:"Afficher la barre de filtre",disableFilterBar:"Masquer la barre de filtre"},Group:{group:"Regrouper",groupAscending:"Grouper par ordre croissant",groupDescending:"Grouper par ordre décroissant",groupAscendingShort:"Croissant",groupDescendingShort:"Décroissant",stopGrouping:"Arrêter le regroupement",stopGroupingShort:"Arrêter"},HeaderMenu:{moveBefore:e=>`Déplacer avant "${e}"`,moveAfter:e=>`Déplacer après "${e}"`,collapseColumn:"Réduire la colonne",expandColumn:"Développer la colonne"},ColumnRename:{rename:"Renommer"},MergeCells:{mergeCells:"Fusionner les cellules",menuTooltip:"Fusionner les cellules de même valeur quand elles sont triées dans cette colonne"},Search:{searchForValue:"Rechercher la valeur"},Sort:{sort:"Trier",sortAscending:"Trier par ordre croissant",sortDescending:"Trier par ordre décroissant",multiSort:"Tri multiple",removeSorter:"Supprimer le tri",addSortAscending:"Ajouter un triage par ordre croissant",addSortDescending:"Ajouter un triage par ordre décroissant",toggleSortAscending:"Passer en ordre croissant",toggleSortDescending:"Passer en ordre décroissant",sortAscendingShort:"Croissant",sortDescendingShort:"Décroissant",removeSorterShort:"Retirer",addSortAscendingShort:"+ Croissant",addSortDescendingShort:"+ Décroissant"},Split:{split:"Diviser",unsplit:"Non divisé",horizontally:"Horizontalement",vertically:"Verticalement",both:"Les deux"},Column:{columnLabel:e=>`${e.text?`${e.text} colonne. `:""}ESPACE pour le menu contextuel${e.sortable?", ENTRÉE pour trier":""}`,cellLabel:T},Checkbox:{toggleRowSelect:"Basculer la sélection de ligne",toggleSelection:"Basculer la sélection du jeu de données complet"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`évaluation : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Échec de chargement des données !",syncFailedMessage:"Échec de synchronisation des données !",unspecifiedFailure:"Erreur non spécifiée",networkFailure:"Erreur réseau",parseFailure:"Erreur de décryptage de la réponse du serveur",serverResponse:"Réponse du serveur :",noRows:"Aucun enregistrement à afficher",moveColumnLeft:"Déplacer vers la section de gauche",moveColumnRight:"Déplacer vers la section de droite",moveColumnTo:e=>`Déplacer la colonne vers ${e}`},CellMenu:{removeRow:"Supprimer"},RowCopyPaste:{copyRecord:"Copier",cutRecord:"Couper",pasteRecord:"Coller",rows:"lignes",row:"ligne"},CellCopyPaste:{copy:"Copier",cut:"Couper",paste:"Coller"},PdfExport:{"Waiting for response from server":"En attente de la réponse du serveur...","Export failed":"Échec de l'export","Server error":"Erreur serveur","Generating pages":"Génération de pages en cours...","Click to abort":"Annuler"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Exporter les paramètres",export:"Exporter",exporterType:"Contrôle de la pagination",cancel:"Annuler",fileFormat:"Format de fichier",rows:"Lignes",alignRows:"Aligner les lignes",columns:"Colonnes",paperFormat:"Format du papier",orientation:"Orientation",repeatHeader:"Répéter l'en-tête"},ExportRowsCombo:{all:"Toutes les lignes",visible:"Lignes visibles"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Paysage"},SinglePageExporter:{singlepage:"Une seule page"},MultiPageExporter:{multipage:"Plusieurs pages",exportingPage:({currentPage:e,totalPages:t})=>`Export de la page ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Plusieurs pages (en vertical)",exportingPage:({currentPage:e,totalPages:t})=>`Export de la page ${e}/${t}`},RowExpander:{loading:"Chargement en cours",expand:"Développer",collapse:"Réduire"},TreeGroup:{group:"Regrouper par",stopGrouping:"Arrêter le regroupement",stopGroupingThisColumn:"Annuler le regroupement de cette colonne"}},M=i.publishLocale(C),E={localeName:"FrFr",localeDesc:"Français (France)",localeCode:"fr-FR",Object:{newEvent:"Nouvel événement"},ResourceInfoColumn:{eventCountText:e=>e+" événement"+(e!==1?"s":"")},Dependencies:{from:"De",to:"à",valid:"Valide",invalid:"Invalide"},DependencyType:{SS:"DD",SF:"DF",FS:"FD",FF:"FF",StartToStart:"Du début au début",StartToEnd:"Du début à la fin",EndToStart:"De la fin au début",EndToEnd:"De la fin à la fin",short:["DD","DF","FD","FF"],long:["Du début au début","Du début à la fin","De la fin au début","De la fin à la fin"]},DependencyEdit:{From:"Du",To:"Au",Type:"Type",Lag:"Retard","Edit dependency":"Éditer la dépendance",Save:"Enregistrer",Delete:"Supprimer",Cancel:"Annuler",StartToStart:"Du début au début",StartToEnd:"Du début à la fin",EndToStart:"De la fin au début",EndToEnd:"De la fin à la fin"},EventEdit:{Name:"Nom",Resource:"Ressource",Start:"Début",End:"Fin",Save:"Enregistrer",Delete:"Supprimer",Cancel:"Annuler","Edit event":"Éditer l'événement",Repeat:"Répéter"},EventDrag:{eventOverlapsExisting:"Chevauchement d'événements, événement déjà existant pour cette ressource",noDropOutsideTimeline:"L'événement n'a peut-être pas été complètement déposé hors de la chronologie"},SchedulerBase:{"Add event":"Ajouter un événement","Delete event":"Supprimer un événement","Unassign event":"Désattribuer un événement",color:"Couleur"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Plage de dates",startText:"Date de début",endText:"Date de fin",todayText:"Aujourd'hui"},EventCopyPaste:{copyEvent:"Copier l'événement",cutEvent:"Couper l'événement",pasteEvent:"Coller l'événement"},EventFilter:{filterEvents:"Filtrer les tâches",byName:"Par nom"},TimeRanges:{showCurrentTimeLine:"Afficher la chronologie actuelle"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Secondes"},minuteAndHour:{topDateFormat:"ddd DD/MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Jour"},day:{name:"Jour/heures"},week:{name:"Semaine/heures"},dayAndWeek:{displayDateFormat:"ll LST",name:"Semaine/jours"},dayAndMonth:{name:"Mois"},weekAndDay:{displayDateFormat:"ll LST",name:"Semaine"},weekAndMonth:{name:"Semaines"},weekAndDayLetter:{name:"Semaines/jours de la semaine"},weekDateAndMonth:{name:"Mois/semaines"},monthAndYear:{name:"Mois"},year:{name:"Années"},manyYears:{name:"Plusieurs années"}},RecurrenceConfirmationPopup:{"delete-title":"Vous êtes en train de supprimer un événement","delete-all-message":"Voulez-vous supprimer toutes les occurrences de cet événement ?","delete-further-message":"Voulez-vous supprimer cet événement et toutes les occurrences futures de cet événement, ou uniquement l'occurrence sélectionnée ?","delete-further-btn-text":"Effacer tous les événements futurs","delete-only-this-btn-text":"Effacer uniquement cet événement","update-title":"Vous modifiez un événement récurrent","update-all-message":"Voulez-vous modifier toutes les occurrences de cet événement ?","update-further-message":"Voulez-vous changer seulement cette occurrence de l'événement, ou cette occurrence et toutes les occurrences futures ?","update-further-btn-text":"Tous les événements futurs","update-only-this-btn-text":"Seulement cet événement",Yes:"Oui",Cancel:"Annuler",width:600},RecurrenceLegend:{" and ":" et ",Daily:"Quotidien","Weekly on {1}":({days:e})=>`Hebdomadaire, le ${e}`,"Monthly on {1}":({days:e})=>`Mensuel, le ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Annuel, le ${e} de ${t}`,"Every {0} days":({interval:e})=>`Tous les ${e} jours`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Toutes les ${e} semaines, le ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Tous les ${e} mois, le ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:n})=>`Tous les ${e} ans, le ${t} ${n}`,position1:"le premier",position2:"le second",position3:"le troisième",position4:"le quatrième",position5:"le cinquième","position-1":"le dernier",day:"jour",weekday:"jour (semaine)","weekend day":"jour (week-end)",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Répéter l'événement",Cancel:"Annuler",Save:"Sauvegarder",Frequency:"Fréquence",Every:"Tous les",DAILYintervalUnit:"jour(s)",WEEKLYintervalUnit:"semaine(s)",MONTHLYintervalUnit:"mois(s)",YEARLYintervalUnit:"an(s)",Each:"Chaque","On the":"Le","End repeat":"Mettre fin à la répétition","time(s)":"fois(s)"},RecurrenceDaysCombo:{day:"jour",weekday:"jour (semaine)","weekend day":"jour (week-end)"},RecurrencePositionsCombo:{position1:"premier",position2:"second",position3:"troisième",position4:"quatrième",position5:"cinquième","position-1":"dernier"},RecurrenceStopConditionCombo:{Never:"Jamais",After:"Après","On date":"Le"},RecurrenceFrequencyCombo:{None:"Pas de répétition",Daily:"Quotidien",Weekly:"Hebdomadaire",Monthly:"Mensuel",Yearly:"Annuel"},RecurrenceCombo:{None:"Aucun(e)",Custom:"Personnalisé..."},Summary:{"Summary for":e=>`Résumé pour le ${e}`},ScheduleRangeCombo:{completeview:"Planning complet",currentview:"Planning visible",daterange:"Plage de dates",completedata:"Planning complet (pour tous les événements)"},SchedulerExportDialog:{"Schedule range":"Plage de planification","Export from":"Du","Export to":"Au"},ExcelExporter:{"No resource assigned":"Aucune ressource assignée"},CrudManagerView:{serverResponseLabel:"Réponse du serveur :"},DurationColumn:{Duration:"Durée"}},x=i.publishLocale(E),A={localeName:"FrFr",localeDesc:"Français (France)",localeCode:"fr-FR",ConstraintTypePicker:{none:"Aucune",assoonaspossible:"Le plus tôt possible",aslateaspossible:"Le plus tard possible",muststarton:"Doit débuter le",mustfinishon:"Doit finir le",startnoearlierthan:"Début au plus tôt le",startnolaterthan:"Début au plus tard le",finishnoearlierthan:"Fin au plus tôt le",finishnolaterthan:"Fin au plus tard le"},SchedulingDirectionPicker:{Forward:"Avant",Backward:"Arrière",inheritedFrom:"Hérité de",enforcedBy:"Imposé par"},CalendarField:{"Default calendar":"Calendrier par défaut"},TaskEditorBase:{Information:"Information",Save:"Enregistrer",Cancel:"Annuler",Delete:"Supprimer",calculateMask:"Calcul en cours...",saveError:"Impossible d'enregistrer, corrigez d'abord les erreurs",repeatingInfo:"Afficher un événement récurrent",editRepeating:"Modifier"},TaskEdit:{"Edit task":"Éditer la tâche",ConfirmDeletionTitle:"Confirmer la suppression",ConfirmDeletionMessage:"Êtes-vous sûr de vouloir supprimer l'événement ?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Général",Name:"Nom",Resources:"Ressources","% complete":"Achevées à %",Duration:"Durée",Start:"Début",Finish:"Fin",Effort:"Effort",Preamble:"Préambule",Postamble:"Postambule"},GeneralTab:{labelWidth:"6.5em",General:"Général",Name:"Nom","% complete":"Achevées à %",Duration:"Durée",Start:"Début",Finish:"Fin",Effort:"Effort",Dates:"Dates"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Avancé",Calendar:"Calendrier","Scheduling mode":"Mode de planification","Effort driven":"Effort fourni","Manually scheduled":"Planifié manuellement","Constraint type":"Type de contrainte","Constraint date":"Date de contrainte",Inactive:"Inactif","Ignore resource calendar":"Ignorer le calendrier des ressources"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Avancé",Calendar:"Calendrier","Scheduling mode":"Mode de planification","Effort driven":"Effort fourni","Manually scheduled":"Planifié manuellement","Constraint type":"Type de contrainte","Constraint date":"Date de contrainte",Constraint:"Contrainte",Rollup:"Report au récapitulatif",Inactive:"Inactif","Ignore resource calendar":"Ignorer le calendrier des ressources","Scheduling direction":"Direction de planification"},DependencyTab:{Predecessors:"Prédécesseurs",Successors:"Successeurs",ID:"Identifiant",Name:"Nom",Type:"Type",Lag:"Retard",cyclicDependency:"Dépendance cyclique",invalidDependency:"Dépendance invalide"},NotesTab:{Notes:"Notes"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ressources",Resource:"Ressource",Units:"Unités"},RecurrenceTab:{title:"Répéter"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Durée fixe","Fixed Units":"Unités fixes","Fixed Effort":"Effort fixe"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} sur {available}</span> allouées',barTipOnDate:'<b>{resource}</b> le {startDate}<br><span class="{cls}">{allocated} sur {available}</span> allouées',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} sur {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} sur {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Le {startDate}<br><span class="{cls}">{allocated} sur {available}</span> allouées :<br>{assignments}',plusMore:"+{value} de plus"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> allouées',barTipOnDate:'<b>{event}</b> le {startDate}<br><span class="{cls}">{allocated}</span> allouées',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} sur {available}</span> allouées :<br>{assignments}',groupBarTipOnDate:'Le {startDate}<br><span class="{cls}">{allocated} sur {available}</span> allouées :<br>{assignments}',plusMore:"{value} de plus",nameColumnText:"Ressource / Événement"},SchedulingIssueResolutionPopup:{"Cancel changes":"Annuler le changement et ne rien faire",schedulingConflict:"Conflit de planification",emptyCalendar:"Erreur de configuration du calendrier",cycle:"Cycle de planification",Apply:"Appliquer"},CycleResolutionPopup:{dependencyLabel:"Veuillez sélectionner une dépendance :",invalidDependencyLabel:"Des dépendances invalides sont impliquées et doivent être résolues :"},DependencyEdit:{Active:"Active"},SchedulerProBase:{propagating:"Calcul du projet en cours",storePopulation:"Chargement des données en cours",finalizing:"Résultats en cours de finalisation"},EventSegments:{splitEvent:"Diviser l'événement",renameSegment:"Renommer"},NestedEvents:{deNestingNotAllowed:"Désimbrication non autorisée",nestingNotAllowed:"Imbrication non autorisée"},VersionGrid:{compare:"Comparer",description:"Description",occurredAt:"S'est produit à",rename:"Renommer",restore:"Restaurer",stopComparing:"Arrêter de comparer"},Versions:{entityNames:{TaskModel:"tâche",AssignmentModel:"affectation",DependencyModel:"lien",ProjectModel:"projet",ResourceModel:"ressource",other:"objet"},entityNamesPlural:{TaskModel:"tâches",AssignmentModel:"affectations",DependencyModel:"liens",ProjectModel:"projets",ResourceModel:"ressources",other:"objets"},transactionDescriptions:{update:"Modifié {n} {entities}",add:"Ajouté {n} {entities}",remove:"Supprimé {n} {entities}",move:"Déplacé {n} {entities}",mixed:"Modifié {n} {entities}"},addEntity:"Ajouté {type} **{name}**",removeEntity:"Supprimé {type} **{name}**",updateEntity:"Modifié {type} **{name}**",moveEntity:"Déplacé {type} **{name}** de {from} à {to}",addDependency:"Ajouté le lien de **{from}** à **{to}**",removeDependency:"Supprimé le lien de **{from}** à **{to}**",updateDependency:"Modifié le lien de **{from}** à **{to}**",addAssignment:"Affecté **{resource}** à **{event}**",removeAssignment:"Supprimé **{resource}** de **{event}**",updateAssignment:"Modifier l'éffectation de **{resource}** à **{event}**",noChanges:"Aucun changement",nullValue:"aucun",versionDateFormat:"M/D/YYYY h:mm a",undid:"Annulé les modifications",redid:"Rétabli les modifications",editedTask:"Modifié les propriétés de la tâche",deletedTask:"Supprimé une tâche",movedTask:"Déplacé une tâche",movedTasks:"Déplacé des tâches"}},S=i.publishLocale(A);if(typeof o.exports=="object"&&typeof s=="object"){var F=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,a)&&a!==n&&Object.defineProperty(e,a,{get:()=>t[a],enumerable:!(r=Object.getOwnPropertyDescriptor(t,a))||r.enumerable});return e};o.exports=F(o.exports,s)}return o.exports});