angular
  .module('diabetesApp')
  .factory('Appointment', Appointment);

Appointment.$inject = ['$resource', 'API_URL'];
function Appointment($resource, API_URL) {
  return new $resource(`${API_URL}/appointments/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
