var app = angular.module('app', []);

/*******************************************************************/
app.controller('MyController', ['$scope', '$http','$filter', function ($scope, $http,$filter) {
        getMesClients();
    function getMesClients() {
        monURL = "http://localhost:49688/api/Clients";
        $http.get(monURL).
            success(function (data, status,header) {
                console.log(data);
                $scope.users = data;
                document.getElementById("login-form").style.visibility = "hidden"; 
            }).
            error(function (data, status) {
                
                document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json";
                document.getElementById("erreur").style.color = 'red';
                document.getElementById("login-form").style.visibility = "visible"; 

            });
    };
}]);
