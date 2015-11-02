var app = angular.module('buildsApp', []);

// For lastest builds data feed
app.controller('reposController', function ($scope, $http) {
  $http.get("https://api.github.com/users/jkordish/repos?sort=pushed&order=asc&per_page=4&page=1")
    .success(function (response) {
      $scope.ids = response;
    });
});

/*app.controller('skillsController', function($scope, $http) {
$http.get('/partials/skillAreas.json')
       .then(function(result){
          $scope.skills = result.data;
        });
	});		= response; */
