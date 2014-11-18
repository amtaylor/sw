'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swApp
 */
angular.module('swApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
