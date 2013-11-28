'use strict';

/* Controllers */

angular.module('kidClock.controllers', []).
  controller('DisplayCtrl', ['$scope','$timeout','state',function($scope,$timeout,state) {
    $scope.state = state;
    $scope.displaytime= "--";
    function pad2(num,prefix) {
        var out = prefix ? prefix : "";
        out += num<10 ? "0" + num : num;
        return out;
    }
    function hour12(date) {  // converts 0-23 hour into standard US clock 1-12.
        var h = date.getHours() % 12;
        return (h==0) ? 12 : h;
    }
    function ampm(date) {
        return date.getHours() >= 12 ? " PM" : " AM";
    }
    function renderNow() {
        var now = new Date();
        var out ="";
        out += hour12(now);
        if( $scope.state.numberLevel > 1 ) {
            out += pad2(now.getMinutes(),":");
        }
        if( $scope.state.numberLevel > 2 ) {
            out += pad2(now.getSeconds(),":");
        }
        if( $scope.state.showAMPM ) {
            out += ampm(now);
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
    $scope.state.numberLevel = 2;
  }]);

