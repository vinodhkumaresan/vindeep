mainApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'clair.controller.loginController'
     })
    .when('/loginSuccess', {
	    templateUrl: 'wateranalysismain.html',
	    controller: 'clair.controller.wateranalysisController'
     })
     .when('/loginFailure', {
    	templateUrl: 'loginFailure.html',
     })
     .when('/waterAnalysisCW', {
	    templateUrl: 'wateranalysisCW.html',
	    controller: 'clair.controller.cwController'
     })
     .when('/chemicalAnalysis', {
	    templateUrl: 'chemicalanalysis.html',
	    controller: 'clair.controller.chemicalanalysisController'
     });
}]);