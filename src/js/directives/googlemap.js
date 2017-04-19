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
      console.log($scope.location);
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: $scope.center,
        scrollwheel: false
      });

      new $window.google.maps.Marker({
        position: $scope.center,
        map: map,
        animation: $window.google.maps.Animation.BOUNCE
      });
    }

  };
  return directive;
}
