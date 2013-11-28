'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('DisplayCtrl', ['$scope','$timeout','state',function($scope,$timeout,state) {
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
        if( $scope.state.showSeconds ) {
            out += pad2(now.getSeconds(),":");
        }
        if( $scope.state.showAMPM ) {
            out += now.getHours() >= 12 ? " PM" : " AM";
        }
        return out;
    };
    function tick() {
        $scope.displaytime = renderNow();
        $timeout(tick, 1000);
    };
    tick();
  }])
  .controller('ConfigCtrl', ['$scope','state',function($scope,state) {
    $scope.state = state;

  }]);

