//Raw Water Data
var mainApp = angular.module('clair.controller.wateranalysisController', ['angularChart']);

mainApp.controller('clair.controller.wateranalysisController', ['$scope', '$http', function($scope, $http) {       
	 
	
         var data = 
         {"xData": ["First:Nov 2014","Mid:Nov 2014","First:Dec 2014","Mid:Dec 2014","First:Jan 2015","Mid:Jan 2015","First:Feb 2015","Mid:Feb 2015","First:Mar 2015",
                    "Mid:Mar 2015","First:Apr 2015","Mid:Apr 2015","First:May 2015","Mid:May 2015","First:Jun 2015","Mid:Jun 2015","First:Jul 2015","Mid:Jul 2015",
                    "First:Aug 2015","Mid:Aug 2015","First:Sep 2015","Mid:Sep 2015","First:Oct 2015","Mid:Oct 2015"],
         "yData":[
            {
             "name": "pH",
             "data": [8.0,8.1,8.0,7.9,8.1,8.0,8.0,8.0,8.0,8.0,7.9,8.0,8.0,7.6,7.7,7.7,7.7,7.9,7.7,7.7,7.5,7.5,7.6,8.0]
         }, {
             "name": "Total Hardness",
             "data": [120,114,112,118,126,120,136,136,148,152,152,168,162,144,190,85,150,180,128,120,102,84,84,120]
         }]}
         
         $scope.lineChartYData=data.yData
         $scope.lineChartXData=data.xData
    
	   
 }]);