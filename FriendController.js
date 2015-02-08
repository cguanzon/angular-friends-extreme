var app = angular.module('AngularFriends');

app.controller('FriendCtrl', function($scope, $http){

    $scope.searchTermName = {};
    $scope.sortBy = "name";
    $scope.desc = "false"

    $http.get('friend-data.json')
        .then(function(res){
            $scope.friends = integerFy(res.data);
        });

    //converts friend_count into an integer for accurate sorting
    var integerFy = function(friendData){
        var intergerFied = friendData.map(function(current, index, array){
            var fixed = current;
            fixed.friend_count = parseInt(current.friend_count);
            return fixed;
        });
        return intergerFied;
    };
});





