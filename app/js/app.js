'use strict';


// Declare app level module which depends on filters, and services
angular.module('kidClock', [
  //'ngRoute',
  //'$strap.directives',
  'kidClock.filters',
  'kidClock.services',
  'kidClock.directives',
  'kidClock.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clock', {templateUrl: 'partials/clock.html', controller: 'DisplayCtrl'});
  $routeProvider.when('/config', {templateUrl: 'partials/config.html', controller: 'ConfigCtrl'});
  $routeProvider.otherwise({redirectTo: '/clock'});
}]);
