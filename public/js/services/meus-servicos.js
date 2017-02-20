angular.module('meusServicos', ['ngResource']).factory('recursoFoto', function($http, $q) {

	$http.defaults.headers.common.Authorization  = 'Bearer bd8a8ba620b5a0bc9f1527d1d4517da8fff450719df618347d0b6bb4d6999cd9';

	return {
			list: function() {
				
				var deferred = $q.defer();
				
				$http({
					url: 'https://api.dribbble.com/v1/shots?&per_page=20&sort=popular', 
					method: 'GET'
				
				}).then(function successCallback(response) {
					
					deferred.resolve(response);
				
				}, function errorCallback(response) {
					
					deferred.reject(response);
				});
				
				return deferred.promise;
			},

			detail: function(id) {

				var id = id;		
				var deferred = $q.defer();
				
				$http({
					url: 'https://api.dribbble.com/v1/shots/'+id, 
					method: 'GET'
				
				}).then(function successCallback(response) {
					
					deferred.resolve(response);
				
				}, function errorCallback(response) {
					
					deferred.reject(response);
				});
				
				return deferred.promise;
			}
			
		}
});