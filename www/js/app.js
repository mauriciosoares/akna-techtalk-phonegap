var app = angular.module('aknaTechtalk', [
  'ngTouch',
  'ngRoute',
  'ngAnimate'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/my-page', {templateUrl: 'partials/myPage.html', controller: 'MyPageCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
