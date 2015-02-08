var app = angular.module('AngularFriends');

app.controller('FriendCtrl', function($scope, $http){

    $scope.searchTerm = "";



    $http.get('friend-data.json')
        .then(function(res){
            $scope.friends = res.data;
        });
});





