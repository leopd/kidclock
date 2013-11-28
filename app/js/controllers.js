'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$timeout',function($scope,$timeout) {
    $scope.displaytime= "8:30:11 PM";
    function tick() {
        $scope.displaytime += "foo";
        $timeout(tick, 2000);
    };
    tick();
  }])
  .controller('MyCtrl2', [function() {

  }]);
