sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sri.pro3.project3',
            componentId: 'ProjectsList',
            entitySet: 'Projects'
        },
        CustomPageDefinitions
    );
});