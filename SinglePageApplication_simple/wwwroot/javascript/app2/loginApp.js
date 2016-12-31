angular.module('loginApp').service('Session', function 
($rootScope, USER_ROLES) {
    this.create = function (utilisateur) {
        this.utilisateur = utilisateur;
        this.roleUtilisateur = utilisateur.role;
    };
    this.destroy = function () {
        this.utilisateur = null;
        this.roleUtilisateur = null;
    };
    return this;
});
