'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .factory('state', function () {
    var state = {};
    
    return {
      state: state,
    };
  });

