var mainApp = angular.module("mainApp", []);
         
 mainApp.controller('loginController', function() {
       
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
		   cont.userName = "";
		   cont.password = "";
	   }
	   
	   this.submit = function() {
		   
		   alert("loginName = "+cont.userName+"\n"+
				 "password = "+cont.password);
	   }
 });