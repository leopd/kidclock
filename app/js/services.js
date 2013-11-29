'use strict';

/* Services */


angular.module('kidClock.services', [])
  .factory('state', function () {
    var state = {
        "showAMPM": true,
        "numberLevel": "2",
        "colorScheme": "day",
        "rules": [
            {
                "time": "02:10 PM",
                "colorScheme": "green",
            },
            {
                "time": "07:00 PM",
                "colorScheme": "evening",
            },
            {
                "time": "08:30 PM",
                "colorScheme": "verydim",
            },
            {
                "time": "06:00 AM",
                "colorScheme": "green",
            },
            {
                "time": "11:00 AM",
                "colorScheme": "day",
            },
        ],
    };
    return state;
  })
  .factory('Rules', ['state', function (state) {
    return {
        match: function(rule) {
            var now = moment();
            return now.format("hh:mm A") == rule.time;
        },
        apply: function(rule) {
            console.log(rule);
            state.colorScheme = rule.colorScheme;
        }
    };
  }])

