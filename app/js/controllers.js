'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$timeout',function($scope,$timeout) {
    $scope.displaytime= "8:30:11 PM";
    $timeout(function() {
        $scope.displaytime += "foo";
    },2000);
  }])
  .controller('MyCtrl2', [function() {

  }]);
