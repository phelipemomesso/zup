angular.module('zup').controller('ShotsController', function($scope, recursoFoto, $routeParams, $location) {
	
	$scope.shots = [];
	$scope.filtro = '';

	$scope.getData = function () {
		recursoFoto.list().then(function successCallback(response) {
			
			var shots = response.data;
			var size = 'normal';

			if ($routeParams.size) {

				size = $routeParams.size;
				$scope.sizeImages = $routeParams.size;
			
			} else {

				$scope.sizeImages = size;
			}

			shots.map(function(shot) {
				
				shot.tipo = size;
			})

			$scope.shots = shots;
			
		});
	};

	$scope.getData();

	$scope.changeSize = function() {
    	
		$location.path('/shots/'+$scope.sizeImages)
    } 

});