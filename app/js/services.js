'use strict';

/* Services */


angular.module('kidClock.services', [])
  .factory('state', function () {
    var state = {
        "showAMPM": true,
        "numberLevel": "2",
        "colorScheme": "evening",
        "rules": [
            {
                "time": "06:00 PM",
                "colorScheme": "evening",
            },
            {
                "time": "08:30 PM",
                "colorScheme": "verydim",
            },
            {
                "time": "05:00 AM",
                "colorScheme": "sunrise",
            },
            {
                "time": "06:00 AM",
                "colorScheme": "green",
            },
            {
                "time": "09:00 AM",
                "colorScheme": "day",
            },
        ],
    };
    return state;
  })
  .factory('Rules', ['state', function (state) {
    return {
        match: function(rule, now) {
            if( !now ) {
                now = moment().format("hh:mm A");
            }
            return now == rule.time;
        },
        apply: function(rule) {
            console.log(rule);
            state.colorScheme = rule.colorScheme;
        }
    };
  }])

