/**================================================
Controller = mainCtrl
===================================================*/
'use strict';


angular.module('venemoviesApp', [])
	.controller('mainCtrl', ['$scope',  '$http', function($scope, $http) {
	// Consumiendo archivo JSON
		$http.get('js/data.json').success(function(data){
			$scope.movies = data;
		});
}]);

/*------------- Fin de Controller = mainCtrl--------------*/