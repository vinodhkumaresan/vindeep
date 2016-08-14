var mainApp = angular.module('clair.controller.loginController', []);
         
 mainApp.controller('clair.controller.loginController', ['$location', '$window', function($location, $window) {
       
	   var cont = this;
	   cont.userName;
	   cont.password;
	   
	   this.credentials = function() {
		 if(cont.userName != undefined && cont.password !=undefined){
		 	return cont.userName+" "+cont.password;
	   	 }
		 else{
			 return "Enter login details";
		 }
	   }
	   
	   this.reset = function() {
		 
	   }
	   
	   this.submit = function() {
		   
		   if(cont.userName == 'admin' && cont.password == 'admin'){
			  // $window.location = "#/waterwiserhome.html";
			   $location.path('/loginSuccess');
		   }
		   else{
			   $location.path('/loginFailure');
		   }
	   }
 }]);