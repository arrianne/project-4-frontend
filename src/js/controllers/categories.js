angular
  .module('diabetesApp')
  .controller('CategoriesIndexCtrl', CategoriesIndexCtrl)
  .controller('CategoriesShowCtrl', CategoriesShowCtrl);

CategoriesIndexCtrl.$inject = ['Appointment', 'Category'];
function CategoriesIndexCtrl(Appointment, Category) {
  const vm = this;
  vm.all = Category.query();

  // vm.user = Category.get($stateParams);


}


CategoriesShowCtrl.$inject = [ 'Category', 'User', '$stateParams', '$state', '$auth'];
function CategoriesShowCtrl(Category, User, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUserId = $auth.getPayload().id;

  Category.get($stateParams)
    .$promise
    .then((category) => {
      vm.category = category;
      // vm.category.appointments = vm.category.appointments.filter((appointment) => {
      //   return appointment.user_id === vm.currentUserId;
      // });

      console.log(vm.category.appointments);
      // console.log(vm.category.appointments.location);
    });


}





// vm.user = User.get({ id: $auth.getPayload().id });
