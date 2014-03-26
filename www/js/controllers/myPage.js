(function() {
  'use strict';

  var MyPageCtrl = function($scope, navigation) {
    console.log(navigation);
  }

  MyPageCtrl.$inject = ['$scope', 'navigation'];

  app.controller('MyPageCtrl', MyPageCtrl);
} ());