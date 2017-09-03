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
   if(arrayOfStrings.includes(undefined))
   {
    arrayOfStrings = arrayOfStrings.filter(function(e){return e});
    $scope.message+= " I don't consider empty items towards count ";
   }
   
   return arrayOfStrings.length
  };
  
  $scope.check = function () {
   
   if ($scope.text == "")
   {
    $scope.message = "Please enter data first";
   }   
   else if (splitString($scope.text, comma)>=3) 
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
