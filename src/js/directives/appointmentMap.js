/* global google:ignore */

angular
   .module('diabetesApp')
   .directive('appointmentMap', appointmentMap)
   .directive('autocomplete', autocomplete);

appointmentMap.$inject = ['$window'];
function appointmentMap($window) {
 const directive = {
   restrict: 'E',
   replace: true,
   template: '<div class="appointment-map"></div>', //Better for small bits of html rather than creating a new file
   scope: {
     chosenLocation: '='
   },

   link($scope, element) {

     const map = new $window.google.maps.Map(element[0], {
       zoom: 12,
       center: {lat: 51.515559, lng: -0.071746},
       scrollwheel: false,
       styles:
       [
         {
           'elementType': 'labels.text',
           'stylers': [
             {
               'visibility': 'off'
             }
           ]
         },
         {
           'featureType': 'landscape.natural',
           'elementType': 'geometry.fill',
           'stylers': [
             {
               'color': '#f5f5f2'
             },
             {
               'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'administrative',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'transit',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi.attraction',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'color': '#ffffff'
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'poi.business',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi.medical',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi.place_of_worship',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi.school',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi.sports_complex',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#ffffff'
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'stylers': [
              {
                  'visibility': 'simplified'
              },
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'color': '#ffffff'
              },
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'poi.park',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'water',
          'stylers': [
              {
                  'color': '#71c8d4'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'stylers': [
              {
                  'color': '#e5e8e7'
              }
          ]
      },
      {
          'featureType': 'poi.park',
          'stylers': [
              {
                  'color': '#8ba129'
              }
          ]
      },
      {
          'featureType': 'road',
          'stylers': [
              {
                  'color': '#ffffff'
              }
          ]
      },
      {
          'featureType': 'poi.sports_complex',
          'elementType': 'geometry',
          'stylers': [
              {
                  'color': '#c7c7c7'
              },
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'water',
          'stylers': [
              {
                  'color': '#a0d3d3'
              }
          ]
      },
      {
          'featureType': 'poi.park',
          'stylers': [
              {
                  'color': '#91b65d'
              }
          ]
      },
      {
          'featureType': 'poi.park',
          'stylers': [
              {
                  'gamma': 1.51
              }
          ]
      },
      {
          'featureType': 'road.local',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers': [
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'poi.government',
          'elementType': 'geometry',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'stylers': [
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road'
      },
      {
          'featureType': 'road'
      },
      {},
      {
          'featureType': 'road.highway'
      }
 ]

});

     const locationMarker = new $window.google.maps.Marker({
       map: map,
       animation: google.maps.Animation.DROP
     });



    //  function getLocation() {
     //
    //    const locationMarker = new $window.google.maps.Marker({
    //      map: map,
    //      animation: google.maps.Animation.DROP
    //    });
     //
    //    if (navigator.geolocation) {
    //      navigator.geolocation.getCurrentPosition((position) => {
    //        var pos = {
    //          lat: position.coords.latitude,
    //          lng: position.coords.longitude
    //        };
     //
    //        locationMarker.setPosition(pos);
    //        map.setCenter(pos);
    //      }, function() {
    //        handleLocationError(true, locationMarker, map.getCenter());
    //      });
    //    } else {
    //    // Browser doesn't support Geolocation
    //      handleLocationError(false, locationMarker, map.getCenter());
    //    }
     //
    //    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //      locationMarker.setPosition(pos);
    //    }

    //  }

      // getLocation();

      $scope.$watch('chosenLocation', () => {
        if($scope.chosenLocation && $scope.chosenLocation.lat && $scope.chosenLocation.lng) {
          locationMarker.setPosition($scope.chosenLocation);
          map.setCenter($scope.chosenLocation);
        }
      });

   }
 };
 return directive;
}

autocomplete.$inject = ['$window'];
function autocomplete($window) {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      lat: '=',
      lng: '=',
      chooseListing: '&'
    },

    link: function($scope, element, attrs, model) {
      const options = {
        types: []
      };

      const autocomplete = new $window.google.maps.places.Autocomplete(element[0], options);


      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        $scope.lat = place.geometry.location.toJSON().lat;
        $scope.lng = place.geometry.location.toJSON().lng;
        // console.log($scope.geometry);
        model.$setViewValue(element.val());
        $scope.chooseListing({ place });
      });
    }
  };
}
