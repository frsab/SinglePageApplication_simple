angular.module('appWithNgRoute')

.controller('add_annonceCtrl', function ($scope) {

    $scope.add_annonceCtrlDate = Date.now();
    $scope.add_annonceCtrlDate2 = Date.now();
    $scope.add_annonceCtrlScoped = 'This is Add new order screen';

});
