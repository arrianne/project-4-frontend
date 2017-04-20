angular
  .module('diabetesApp')
  .controller('AppointmentsIndexCtrl', AppointmentsIndexCtrl)
  .controller('AppointmentsNewCtrl', AppointmentsNewCtrl)
  .controller('AppointmentsShowCtrl', AppointmentsShowCtrl)
  .controller('AppointmentsEditCtrl', AppointmentsEditCtrl);



//index


AppointmentsIndexCtrl.$inject = ['Appointment', 'User', 'Category', '$scope', '$auth'];
function AppointmentsIndexCtrl(Appointment, User, Category, $scope, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.all = Appointment.query();
  vm.categories = Category.query();
  console.log(vm.currentUser);

}



//new

AppointmentsNewCtrl.$inject = ['Appointment', 'Category', 'User', '$state', '$scope', '$auth'];
function AppointmentsNewCtrl(Appointment, Category, User, $state, $scope, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });
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

  function chooseListing(place) {
    const location = place.geometry.location.toJSON();
    console.log(location);
    vm.appointment.location = place.name;
    vm.appointment.lat = location.lat;
    vm.appointment.lng = location.lng;


    $scope.$apply();

  }

  vm.chooseListing = chooseListing;

}





//SHOW

AppointmentsShowCtrl.$inject = ['Appointment', 'User', 'Category', '$stateParams', '$state', '$auth'];
function AppointmentsShowCtrl(Appointment, User, Category, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  console.log(vm.currentUser);

  vm.appointment = Appointment.get($stateParams);

  console.log(vm.appointment);

  // Appointment.get($stateParams)
  //   .$promise
  //   .then((appointment) => {
  //     vm.appointment = appointment;
  //   });
  //
  // console.log(vm.appointment);

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
