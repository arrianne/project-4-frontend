angular
  .module('diabetesApp')
  .controller('AppointmentsIndexCtrl', AppointmentsIndexCtrl)
  .controller('AppointmentsNewCtrl', AppointmentsNewCtrl)
  .controller('AppointmentsShowCtrl', AppointmentsShowCtrl)
  .controller('AppointmentsEditCtrl', AppointmentsEditCtrl);



//index


AppointmentsIndexCtrl.$inject = ['Appointment', 'Category'];
function AppointmentsIndexCtrl(Appointment, Category) {
  const vm = this;

  vm.all = Appointment.query();
  vm.categories = Category.query();

//getting categories showing
//   function getCategories() {
//     Category
//     .query
//   }
// }

}



//new

AppointmentsNewCtrl.$inject = ['Appointment', 'Category', 'User', '$state'];
function AppointmentsNewCtrl(Appointment, Category, User, $state) {
  const vm = this;
  vm.appointment = {};
  vm.users = User.query();
  vm.categories = Category.query();

  function appointmentsCreate() {
    Appointment
      .save({ appointment: vm.appointment })
      .$promise
      .then(() => $state.go('appointmentsIndex'));
  }

  vm.create = appointmentsCreate;
}




//SHOW

AppointmentsShowCtrl.$inject = ['Appointment', 'User', 'Category', '$stateParams', '$state', '$auth'];
function AppointmentsShowCtrl(Appointment, User, Category, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.appointment = Appointment.get($stateParams);

  function appointmentsDelete() {
    vm.appointment
      .$remove()
      .then(() => $state.go('appointmentsIndex'));
  }

  vm.delete = appointmentsDelete;


  function addCategory() {
    vm.comment.appointment_id = vm.appointment.id;

    Category
      .save({ category: vm.category })
      .$promise
      .then((category) => {
        vm.appointment.categorys.push(category);
        vm.category = {};
      });
  }

  vm.addCategory = addCategory;

  function deleteCategory(category) {
    Category
      .delete({ id: category.id })
      .$promise
      .then(() => {
        const index = vm.appointment.categories.indexOf(category);
        vm.appointment.categories.splice(index, 1);
      });
  }

  vm.deleteCategory = deleteCategory;
}




//EDIT

AppointmentsEditCtrl.$inject = ['Appointment', '$stateParams', '$state'];
function AppointmentsEditCtrl(Appointment, $stateParams, $state) {
  const vm = this;

  Appointment.get($stateParams)
    .$promise
    .then((appointment) => {
      vm.appointment = appointment;
      vm.appointment.date_time = new Date(appointment.date_time);
    });

  function appointmentsUpdate() {
    // wrap the data in a `trip` object and pass the trip's id
    // to the model so it can generate the correct URL
    Appointment.update({ id: vm.appointment.id, appointment: vm.appointment })
      .$promise
      .then(() => $state.go('appointmentsShow', $stateParams));
  }

  vm.update = appointmentsUpdate;
}
