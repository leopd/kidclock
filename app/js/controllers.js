'use strict';

/* Controllers */

angular.module('kidClock.controllers', []).
  controller('DisplayCtrl', ['$scope','$timeout','state','Rules',function($scope,$timeout,state,Rules) {
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

    var lastRules = "";
    function runRules() {
        var now = moment().format("hh:mm A");
        if( now == lastRules ) {
            return;  // short circuit except at the beginning of the minute.
        } else {
            lastRules = now;
        }
        console.log("Running rules at "+now);
        _.forEach($scope.state.rules,function(rule) {
            if( Rules.match(rule) ) {
                Rules.apply(rule);
            }
        });
    }

    function tick() {
        $scope.displaytime = renderNow();
        runRules();
        $timeout(tick, 400);
    };
    tick();
  }])
  .controller('ConfigCtrl', ['$scope','state',function($scope,state) {
    $scope.state = state;
    $scope.state.numberLevel = 2;
  }]);

