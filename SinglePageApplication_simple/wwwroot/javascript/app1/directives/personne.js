angular.module('app')

.directive('personne', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/personne.html'
    };
});