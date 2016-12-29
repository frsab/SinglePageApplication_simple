var app = angular.module('appWithNgRoute', ['ngRoute']);

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
/*Les constantes gérant la connexion sont définies ici*/
/*
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
*/