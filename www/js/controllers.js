angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();


      loadRemoteData();
      function applyRemoteData( newFriends ) {

        $scope.friends = newFriends;

      }


      // I load the remote data from the server.
      function loadRemoteData() {

        // The friendService returns a promise.
        Friends.getFriends()
            .then(
            function( friends ) {

              applyRemoteData( friends );

            }
        );

      };


})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = {nombre:''};

loadRemoteData();
      function loadRemoteData() {

        // The friendService returns a promise.
        Friends.get($stateParams.friendId)
            .then(
            function( friends ) {

              applyRemoteData( friends );

            }
        );

      };
      function applyRemoteData( newFriends ) {

        $scope.friend = newFriends[0];

      }

})

.controller('AccountCtrl', function($scope) {
});
