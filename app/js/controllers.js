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

    // applies the rules at a specified time
    // Returns number of rules that matched
    function runRulesAt(now) {
        var matches = 0;
        _.forEach($scope.state.rules,function(rule) {
            if( Rules.match(rule, now) ) {
                console.log("  Applying schedule rule ",rule);
                Rules.apply(rule);
                matches += 1;
            } else {
                //console.log("  skipping ",rule);
            }
        });
        return matches;
    }

    var lastRulesRunTime = "";
    function runRulesNow() {
        var now = moment().format("hh:mm A");
        if( now == lastRulesRunTime ) {
            return;  // short circuit except at the beginning of the minute.
        } else {
            lastRulesRunTime = now;
        }
        console.log("Running rules at "+now);
        runRulesAt(now);
    }

    // goes back in time until we find a rule that matches.
    $scope.initializeRules = function() {
        var t = moment();
        for(var i=0; i<9999; i++) {  // avoid infinite loop
            var renderedTime = t.format("hh:mm A");
            if( runRulesAt( renderedTime ) ) {
                return;
            }
            t.subtract(60000);  // 60 seconds
        }
        console.log("Couldn't find any applicable rules");
    }

    function tick() {
        $scope.displaytime = renderNow();
        runRulesNow();
        $timeout(tick, 400);
    };

    $scope.initializeRules();
    tick();
  }])
  .controller('ConfigCtrl', ['$scope','state',function($scope,state) {
    $scope.state = state;
  }]);

