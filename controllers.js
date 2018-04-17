// controller.js
var app = angular.module('firstApp');
app.controller('FirstController', ['$scope', function ($scope) {
    $scope.name = 'Max';
    $scope.names = ['Max', 'Pelle', 'Calle'];
}]);

app.controller('ResultsController', ['$scope', function ($scope) {
    $scope.name = 'Max';
    $scope.results = [
        { name: 'Peter', score: 4 },
        { name: 'Fredrik', score: 14 },
        { name: 'Moses', score: 34 },
    ];
}]);












