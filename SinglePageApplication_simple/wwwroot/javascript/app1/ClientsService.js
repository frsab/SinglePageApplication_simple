var ap=angular.module('ClientsService', ['$http', function ($http) {

    var urlBase = 'http://localhost:49688/api/';
    var clientServices = function () {
        return $http.get(urlBase + '/Clients');
    };
    //return urlBase;
    return clientServices;
}]);
