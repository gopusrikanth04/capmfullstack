//@ui5-bundle com/sri/pro3/project3/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/sri/pro3/project3/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.sri.pro3.project3.Component",{metadata:{manifest:"json"}})});
},
	"com/sri/pro3/project3/i18n/i18n.properties":'# This is the resource bundle for com.sri.pro3.project3\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Project3 App Title\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Project3\n\nflpSubtitle=\n',
	"com/sri/pro3/project3/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"com.sri.pro3.project3","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.10.1","toolsId":"a354ae9e-f012-4740-8b55-44d35910636a"},"dataSources":{"mainService":{"uri":"project/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"com-sri-pro3-project3-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"pro3","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.115.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.sri.pro3.project3.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProjectsList","target":"ProjectsList"},{"pattern":"Projects({key}):?query:","name":"ProjectsObjectPage","target":"ProjectsObjectPage"}],"targets":{"ProjectsList":{"type":"Component","id":"ProjectsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Projects","variantManagement":"Page","navigation":{"Projects":{"detail":{"route":"ProjectsObjectPage"}}}}}},"ProjectsObjectPage":{"type":"Component","id":"ProjectsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Projects"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
