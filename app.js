(function() {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope, $filter) {
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.messageColor = "";

  $scope.checkIfTooMuch = function () {
    var str = $scope.lunchMenu;
    var words = str.split(',');

    var count = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      word = word.trim();
      if(word != "")
        count++;
    }
    if(word == "") {
      $scope.message = "Please enter data first";
       $scope.messageColor = "red";
    } else if(count <= 3) {
      $scope.message = "Enjoy!";
       $scope.messageColor = "green";
    } else if(count > 3) {
      $scope.message = "Too much!";
       $scope.messageColor = "green";
    }
    console.log(count);

  }

}

})();
