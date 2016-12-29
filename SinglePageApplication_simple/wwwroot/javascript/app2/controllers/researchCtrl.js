angular.module('appWithNgRoute')

.controller('researchCtrl', function ($scope) {
    $scope.researchCtrlDate = Date.now();
    $scope.researchCtrlDate2 = Date.now();
    $scope.researchCtrlScoped = 'This is Add new order screen';

});
