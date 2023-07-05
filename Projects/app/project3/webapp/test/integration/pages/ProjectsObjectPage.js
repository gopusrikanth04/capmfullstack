sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.sri.pro3.project3',
            componentId: 'ProjectsObjectPage',
            entitySet: 'Projects'
        },
        CustomPageDefinitions
    );
});