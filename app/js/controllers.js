'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$timeout','state',function($scope,$timeout,state) {
    $scope.state = state;
    $scope.displaytime= "--";
    function pad2(num,prefix) {
        var out = prefix ? prefix : "";
        out += num<10 ? "0" + num : num;
        return out;
    }
    function renderNow() {
        var now = new Date();
        var out ="";
        out += now.getHours() % 12;
        out += pad2(now.getMinutes(),":");
        out += pad2(now.getSeconds(),":");
        out += now.getHours() >= 12 ? " PM" : " AM";
        out += $scope.state.greentime;
        return out;
    };
    function tick() {
        $scope.displaytime = renderNow();
        $timeout(tick, 1000);
    };
    tick();
  }])
  .controller('MyCtrl2', ['$scope','state',function($scope,state) {
    $scope.state = state;

  }]);

