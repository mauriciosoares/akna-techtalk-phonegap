(function() {
  'use strict';

  var navigation = function($location) {
    var slide = 'slide-left';

    var go = function(path){
      slide = 'slide-left';
      $location.url(path);
    };

    return {
      slide: slide,
      go: go
    }
  }

  navigation.$inject = ['$location'];

  app.factory('navigation', navigation);
} ());