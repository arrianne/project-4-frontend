/*global google:ignore */

angular.module('diabetesApp')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '=',
      appointment: '='
    },

    link($scope, element) {
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: $scope.center,
        scrollwheel: false
      });


      console.log($scope.appointment);


      const locationMarker = new $window.google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {lat}
      });


    }

  };
  return directive;

}
