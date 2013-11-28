'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
    $scope.displaytime= "8:30:11 PM";
  }])
  .controller('MyCtrl2', [function() {

  }]);
