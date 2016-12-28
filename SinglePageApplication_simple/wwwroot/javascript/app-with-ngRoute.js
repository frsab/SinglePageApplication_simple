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
