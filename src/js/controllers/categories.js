angular
  .module('diabetesApp')
  .controller('CategoriesShowCtrl', CategoriesShowCtrl);

CategoriesShowCtrl.$inject = ['Appointment', 'Category', '$stateParams', '$state', '$auth'];
function CategoriesShowCtrl(Appointment, Category, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentCategory = Category.get({ id: $auth.getPayload().id });

  vm.user = Category.get($stateParams);


}
