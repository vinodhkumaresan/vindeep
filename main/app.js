var mainApp = angular.module('mainApp', ['ngRoute',
                                        'clair.controller'
                                      ]);

mainApp.run(['$location', function($location) {

	$location.path('/login');
	
}]);