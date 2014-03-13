'use strict';

angular.module('ngAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my_ctrl', {
        templateUrl: 'views/my_ctrl.html',
        controller: 'MyCtrlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
