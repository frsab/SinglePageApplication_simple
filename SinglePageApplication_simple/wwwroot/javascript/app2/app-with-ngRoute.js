var app = angular.module('appWithNgRoute', ['ngRoute','LocalStorageModule']);
/***********************************************/

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'mainCtrl',
        templateUrl: "views/main.htm"
    })
    .when("/annonces", {
        controller: 'annoncesCtrl',
        templateUrl: "views/annonces.htm"
    })
    .when("/add_annonce", {
        controller: 'add_annonceCtrl',
        templateUrl: "views/add_annonce.htm"
    })
    .when("/research", {
        controller: 'researchCtrl',
        templateUrl: "views/research.htm"
    })
    .when("/stats", {
        //controller: 'statsCtrl',
        templateUrl: "views/stats.htm"
    });
});
/************************************************/
app.factory('authService',['$http','$q','localStorageService',function($http,$q,localStorageService){
    var serviceBase='http://localhost:49688/api/users';
    var authServiceFactory={};
    var _authentification={        isAuth:false,        userName:""    };
    var _saveRegistration = function(registration){};
   
    var login = function (loginData){
        var data= "grant_type=password&username="+loginData.userName+"&password"+loginData.password;
        var deferred=$q.defer();
        $http.post(serviceBase+'/login',data,{headers: {  'Content-Type' : 'application/x-www-form-urlencoded' }})

        .sucess(function(reponse){
            localStorageService.set(  'authorizationData', { token:reponse, userName : loginData.userName } );
            _authentification.isAuth=true;
            _authentification.userName=loginData.userName;
            deferred.resolve(reponse);
        })

        .error(function(err,status){
            _logOut();
            deferred.reject(err);
        });
        return deferred.promise;
    };
}]);


/************************************************/





/*Les constantes gérants la connexion sont définies ici*/

app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    utilisateur: 'utilisateur',
    invite: 'invite'
});
app.constant('AUTH_EVENTS', {
    connexionReussie: 'auth-connexion-reussie',
    connexionEchouee: 'auth-connnexion-echouee',
    deconnexionReussie: 'auth-deconnexion-reussie',
    sessionExpiree: 'auth-session-expiree',
    nonConnecte: 'auth-non-connecte',
    nonAutorise: 'auth-not-autorise'
});
