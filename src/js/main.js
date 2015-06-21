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

dracApp.controller('aboutController', function($scope) {
    // create a message to display in our view
    $scope.message = 'aboutController';
});

dracApp.controller('rbListController', function($scope, $http){
    $http.get('src/json/rbs.json').success(function(data){
        $scope.rbLists = data;
    });
});

dracApp.controller('footerController', function($scope){
    $scope.footerInfo = 'footer';
});
