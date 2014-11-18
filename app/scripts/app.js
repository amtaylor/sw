'use strict';


angular
  .module('swApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/',
        controller: 'MainCtrl'
      });
  })
  .controller('MainCtrl', function (
    $scope,
    $localStorage
  ){
    $scope.$storage = $localStorage.$default({
      username: 'Username',
      contact: 'Contact',
      follow: 'Follow',
      twitter: '@Twitter handle'
    });
  });
