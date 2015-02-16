var app = angular.module('AngularFriends');

app.controller('FriendCtrl', function($scope, $http){

    $scope.searchTermName = {};
    $scope.desc = "false"

    $scope.filterOpts = {
        'Name': 'name',
        '# friends': 'friend_count',
        'City': 'current_location.city',
        'State': 'current_location.state',
        'Country': 'current_location.country'
    };

    $http.get('friend-data.json')
        .then(function(res){
            $scope.friends = fixData(res.data);
        });

    //converts friend_count into an integer for accurate sorting
    var fixData = function(friendData){
        return friendData.map(function(current, index, array){
            var fixed = current;
            fixed.friend_count = parseInt(current.friend_count) || 0;
            return fixed;
        });
    };
});





