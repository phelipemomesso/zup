angular.module('zup', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/shots', {
			templateUrl: 'partials/principal.html',
			controller: 'ShotsController'
		});

		$routeProvider.when('/shots/:size', {
			templateUrl: 'partials/principal.html',
			controller: 'ShotsController'
		});

		$routeProvider.when('/shot/detail/:id', {
			templateUrl: 'partials/shot.html',
			controller: 'ShotController'
		});

		$routeProvider.otherwise({redirectTo: '/shots'});

	});