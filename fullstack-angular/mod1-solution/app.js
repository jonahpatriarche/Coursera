(function () {
  'use strict';

  angular.module('CheckLunch', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList;
    $scope.lunchMessage = "Enter lunch items, then click \"check if too much\"";
    $scope.lunchClass = "prompt";
    
    $scope.checkLunch = function () {
      if ($scope.lunchList === null || $scope.lunchList === undefined || $scope.lunchList === "") {
        $scope.lunchMessage = "Please enter data first";
        $scope.lunchClass = "enterData";
        return;
      }

      var lunchItems = $scope.lunchList.split(',');
      lunchItems = lunchItems.filter(removeEmptyItems);
      $scope.lunchList = lunchItems.toString();

      if (lunchItems.length < 1) {
        $scope.lunchMessage = "Please enter data first";
        $scope.lunchClass = "enterData";

      }
      else if (lunchItems.length > 3) {
        $scope.lunchMessage = "Too much!";
        $scope.lunchClass = "ok";
      }
      else {
        $scope.lunchMessage = "Enjoy!"
        $scope.lunchClass = "ok";
      }
    };

    function removeEmptyItems(item) {
      return item !== "";
    };
  }

})();
