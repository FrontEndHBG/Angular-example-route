
var app = angular.module("firstApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'FirstController',
    })
    .when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
    });
});