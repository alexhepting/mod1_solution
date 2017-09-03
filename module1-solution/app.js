(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.text = "";
  $scope.message = "";
  
  var comma = ',';
  
  function splitString(stringToSplit, separator)
  {
   var arrayOfStrings = stringToSplit.split(separator);
   
   return arrayOfStrings.length
  };
  
  $scope.check = function () {
   
   if ($scope.text == "")
   {
    $scope.message = "Please enter data first";
   }   
   
   else if (splitString($scope.text, comma)<=3) 
   {
    $scope.message = "Enjoy!";
   }
   else
   {
    $scope.message = "Too much!";
   }
  
  };

};

})();
