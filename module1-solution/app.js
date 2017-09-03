(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.text = "";
  $scope.message = "";
  $scope.color = "";  
  var comma = ',';
  
  function splitString(stringToSplit, separator)
  {
   var arrayOfStrings = stringToSplit.split(separator);
   
   return arrayOfStrings.length
  };
  

  

  $scope.check = function () {
   var items = splitString($scope.text, comma); 
   if ($scope.text == "")
   {
    $scope.message = "Please enter data first";
    $scope.color = "red";
   }   

   else if (items<=3) 
   {
    $scope.message = "Enjoy!";
    $scope.color = "green";
   }   
   else  
   {
    $scope.message = "Too much!";
    $scope.color = "green";
   }
  
  };

};

})();
