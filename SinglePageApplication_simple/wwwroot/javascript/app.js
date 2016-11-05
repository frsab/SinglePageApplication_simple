var app = angular.module('app',[])
	app.controller('MyController',
		[
		'$scope',
		function(scope){
			scope.username="saber"
			scope.userlastName="FRAJ"
		}
		]
	);