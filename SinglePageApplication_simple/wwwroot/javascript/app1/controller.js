MyApp.controller('UpdateController', function ($scope, ClientManager) {
    getClients();
    function getClient() {
        ClientManager.getClients()
        .sucess(function (clients) {
            $scope.clients = clients;
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data ' + error.message;

        });
    }
});