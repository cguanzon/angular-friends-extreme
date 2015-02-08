var app = angular.module('AngularFriends');

app.controller('FriendCtrl', function($scope, $http){

    $scope.searchTermName = "";
    $scope.searchTermLocation = "";



    $http.get('friend-data.json')
        .then(function(res){
            $scope.friends = res.data;
        });
});





