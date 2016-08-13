mainApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'clair.controller.loginController'
     })
    .when('/loginSuccess', {
	    templateUrl: 'homemain.html',
	    //controller: 'clair.controller.loginController'
     })
     .when('/loginFailure', {
    	templateUrl: 'loginFailure.html',
     });
}]);