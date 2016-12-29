angular.module('appWithNgRoute')

.controller('statsCtrl', function ($scope) {

    $scope.statsCtrlDate = Date.now();
    $scope.statsCtrlDate2 = Date.now();
    $scope.statsCtrlScoped = 'This is Add new order screen';

});
