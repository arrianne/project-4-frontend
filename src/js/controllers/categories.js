angular
  .module('diabetesApp')
  .controller('CategoriesIndexCtrl', CategoriesIndexCtrl);

CategoriesIndexCtrl.$inject = ['Appointment', 'Category'];
function CategoriesIndexCtrl(Appointment, Category) {
  const vm = this;
  vm.all = Category.query();

  // vm.user = Category.get($stateParams);


}


// vm.user = User.get({ id: $auth.getPayload().id });
