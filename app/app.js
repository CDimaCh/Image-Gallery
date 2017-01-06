angular.module('app', [
    'ngRoute',
    'app.controllers'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/post.html',
            controller: 'PostController'
        }).when('/album/:id', {
            templateUrl: 'views/singlealbum.html',
            controller: 'SingleAlbum'
        }).when('/photo/:id', {
            templateUrl: 'views/singlephoto.html',
            controller: 'SingleAlbum'
        }).otherwise({
            redirectTo: '/'
        });
    }]);