var dracApp = angular.module('draconic-rb', ['ngRoute']);
dracApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'src/templates/login.html',
            controller  : 'mainController'
        }).
        when('/about', {
            templateUrl: 'src/templates/about.html',
            controller  : 'aboutController'
        }).
        when('/rb', {
            templateUrl: 'src/templates/rbList.html',
            controller : 'rbListController'
        })
    });
dracApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
dracApp.controller('rbListController', function(){
    var rbList;
    rbList = {
        ember : {
            name: 'ember',
            lvl: '80',
            time: '280',
            live: 0
        },
        khaki : {
            name: 'khaki',
            lvl: '78',
            time: '120',
            live: 1
        },
        zaken : {
            name: 'zaken',
            lvl: '75',
            time: '450',
            live: 1
        }
    }
});
dracApp.controller('aboutController', function($scope) {
    // create a message to display in our view
    $scope.message = 'aboutController';
});