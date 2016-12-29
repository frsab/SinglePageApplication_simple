angular.module('appWithNgRoute')

.controller('mainCtrl', function($scope) {
    $scope.mainCtrlDate = Date.now();
    $scope.mainCtrlDate2 = Date.now();
    $scope.mainCtrlScoped = 'This is Add new order screen';


	
});
