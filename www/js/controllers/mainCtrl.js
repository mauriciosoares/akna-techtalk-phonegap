(function() {
  var MainCtrl = function(navigation) {
    this.slide = navigation.slide;
  }

  MainCtrl.$inject = ['navigation'];

  app.controller('MainCtrl', MainCtrl);
} ());