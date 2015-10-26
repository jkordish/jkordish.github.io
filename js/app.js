var myApp = angular.module('myApp', [
  'ngRoute',
  'appCtr'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/skills.html',
    controller: 'skillsContoller'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);