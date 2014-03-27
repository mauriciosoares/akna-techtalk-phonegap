(function() {
  'use strict';

  var HomeCtrl = function($scope, navigation) {
    navigation.slide = 'yeah';
    $scope.navigation = navigation;
  }

  HomeCtrl.$inject = ['$scope', 'navigation'];

  app.controller('HomeCtrl', HomeCtrl);
} ());
