'use strict';

/* Services */


angular.module('kidClock.services', [])
  .value('version', '0.1')
  .factory('state', function () {
    var state = {
    };
    
    return {
      state: state,
    };
  });

