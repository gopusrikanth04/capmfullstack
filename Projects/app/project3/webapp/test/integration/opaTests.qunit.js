sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sri/pro3/project3/test/integration/FirstJourney',
		'com/sri/pro3/project3/test/integration/pages/ProjectsList',
		'com/sri/pro3/project3/test/integration/pages/ProjectsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectsList, ProjectsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sri/pro3/project3') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectsList: ProjectsList,
					onTheProjectsObjectPage: ProjectsObjectPage
                }
            },
            opaJourney.run
        );
    }
);