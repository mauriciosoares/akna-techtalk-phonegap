(function() {
  'use strict';

  var MainCtrl = function($scope, $rootScope, $location, $window) {
    $rootScope.back = function(direction) {
      $scope.slide = 'slide-' + direction;
      $window.history.back();
    };

    $rootScope.go = function(path, direction){
      $scope.slide = 'slide-' + direction;
      $location.url(path);
    };
  }

  MainCtrl.$inject = ['$scope', '$rootScope', '$location', '$window'];

  app.controller('MainCtrl', MainCtrl);
} ());
