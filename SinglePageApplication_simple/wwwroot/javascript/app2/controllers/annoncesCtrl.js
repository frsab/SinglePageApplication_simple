angular.module('appWithNgRoute')

.controller('annoncesCtrl', function($scope) {
	
    $scope.annoncesCtrlDate = Date.now();
    $scope.annoncesCtrlDate2 = Date.now();
    $scope.annoncesCtrlScoped = 'This is Add new order screen';
	
});
