var app = angular.module('app', []);
app.controller('MyController',
    ['$scope','$http','$filter',
        function ($scope, $http, $filter) {
            getMesClients();
            function getMesClients() {
                monURL = "http://localhost:49688/api/Clients";
                $http.get(monURL)
                    .success(function (data, status, header) {
                        console.log(data);
                        $scope.users = data;
                    })
                    .error(function (data, status) {
                        console.log("erreur 401" + header);
                    });
            }
        }]);
