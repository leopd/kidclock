'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$timeout',function($scope,$timeout) {
    $scope.displaytime= "--";
    function renderNow() {
        var now = new Date();
        var out ="";
        out += now.getHours() % 12;
        out += ":";
        out += now.getMinutes();
        out += ":";
        out += now.getSeconds();
        out += " ";
        out += now.getHours() >= 12 ? "PM" : "AM";
        return out;
    };
    function tick() {
        $scope.displaytime = renderNow();
        $timeout(tick, 1000);
    };
    tick();
  }])
  .controller('MyCtrl2', [function() {

  }]);
