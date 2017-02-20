angular.module('zup').controller('ShotController', function($scope, recursoFoto, $routeParams, $location) {
	
	$scope.shots = [];

	$scope.getData = function () {

		console.log($routeParams.id);

		recursoFoto.detail($routeParams.id).then(function successCallback(response) {
			
			$scope.shot = response.data;
		});
	};

	$scope.getData();


});