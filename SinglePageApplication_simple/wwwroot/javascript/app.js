var app = angular.module('app', []);

/*******************************************************************/
app.controller('MyController', ['$scope', '$http','$filter', function ($scope, $http,$filter) {
        getMesClients();
    function getMesClients() {
        monURL = "http://localhost:49688/api/Clients";
        $http.get(monURL).
            success(function (data, status) {
                console.log(data);
                $scope.users = data;
            }).
            error(function (data, status) {
               document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
            });
    };
}]);
