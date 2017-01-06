angular.module('app.controllers',[
    'app.directives'
])
    .controller('PostController', ['$scope', '$http', function($scope, $http){
        $http.get('http://jsonplaceholder.typicode.com/albums').success(function(data){
            $scope.folders = data;
        });
    }])
    .controller('SingleAlbum', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
        
        $scope.items = [];
        $scope.loadMore = function (){
            $http({
                method: "GET",
                url: "http://jsonplaceholder.typicode.com/photos"
            }).success(function (data){
                console.log(data);
                for (var key in data){
                    newItem = data[key];
                    console.log(data[key]);
                    $scope.items.push(newItem);
                }
            });
        }
        console.log($scope.items);
        $scope.loadMore();
    }]);