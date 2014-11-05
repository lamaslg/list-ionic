angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http,$q) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [];

  return {
    all: function() {
      return friends;
    },
    getFriends: function(){
      var request = $http({
        method: "get",
        url: "https://listasph.azure-mobile.net/tables/pruductos",
        params: {
          action: "get"
        }
      });

      return( request.then( handleSuccess, handleError ) );


    },
    get: function(friendId) {
      var request = $http({
        method: "get",
        url: "https://listasph.azure-mobile.net/tables/pruductos?$filter=id eq '"+friendId+"'",
        params: {
          action: "get"
        }
      });

      return( request.then( handleSuccess, handleError ) );
    }
  }
      function handleError( response ) {

        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
        ) {

          return( $q.reject( "An unknown error occurred." ) );

        }

        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

      }


      // I transform the successful response, unwrapping the application data
      // from the API response payload.
      function handleSuccess( response ) {

        return( response.data );

      }
});
