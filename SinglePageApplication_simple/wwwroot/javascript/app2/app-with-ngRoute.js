var app = angular.module('appWithNgRoute', ['ngRoute']);

/***********************************************/

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/main.htm"
    })
    .when("/annonces", {
        templateUrl: "views/annonces.htm"
    })
    .when("/add_annonces", {
        templateUrl: "views/add_annonces.htm"
    })
    .when("/research", {
        templateUrl: "views/research.htm"
    })
    .when("/stats", {
        templateUrl: "views/stats.htm"
    });
});
/************************************************/
var authentificationApp = angular.module
('authentificationApp', ['ui.router', 'ui.bootstrap'])
/*Les constantes gérant la connexion sont définies ici*/

app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    utilisateur: 'utilisateur',
    invite: 'invite'
}).constant('AUTH_EVENTS', {
    connexionReussie: 'auth-connexion-reussie',
    connexionEchouee: 'auth-connnexion-echouee',
    deconnexionReussie: 'auth-deconnexion-reussie',
    sessionExpiree: 'auth-session-expiree',
    nonConnecte: 'auth-non-connecte',
    nonAutorise: 'auth-not-autorise'
})
