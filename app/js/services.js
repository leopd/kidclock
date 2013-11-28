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
                "time": "2:10 PM",
                "minute": 56,
                "colorScheme": "green",
            },
            {
                "time": "7:00 PM",
                "colorScheme": "evening",
            },
            {
                "time": "8:30 PM",
                "colorScheme": "verydim",
            },
            {
                "time": "6:00 AM",
                "colorScheme": "green",
            },
            {
                "time": "9:00 AM",
                "colorScheme": "day",
            },
        ],
    };
    return state;
  })
  .factory('Rules', ['state', function (state) {
    return {
        match: function(rule,date) {
            return (rule.minute == date.getMinutes());
        },
        apply: function(rule) {
            console.log(rule);
            state.colorScheme = rule.colorScheme;
        }
    };
  }])

