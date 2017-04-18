angular
  .module('diabetesApp')
  .controller('AppointmentsIndexCtrl', AppointmentsIndexCtrl)
  .controller('AppointmentsNewCtrl', AppointmentsNewCtrl)
  .controller('AppointmentsShowCtrl', AppointmentsShowCtrl)
  .controller('AppointmentsEditCtrl', AppointmentsEditCtrl);

AppointmentsIndexCtrl.$inject = ['Appointment'];
function AppointmentsIndexCtrl(Appointment) {
  const vm = this;

  vm.all = Appointment.query();
}

AppointmentsNewCtrl.$inject = ['Appointment', 'User', '$state'];
function AppointmentsNewCtrl(Appointment, User, $state) {
  const vm = this;
  vm.appointment = {};
  vm.users = User.query();

  function appointmentsCreate() {
    Appointment
      .save({ appointment: vm.appointment })
      .$promise
      .then(() => $state.go('appointmentsIndex'));
  }

  vm.create = appointmentsCreate;
}

AppointmentsShowCtrl.$inject = ['Appointment', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function AppointmentsShowCtrl(Appointment, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.appointment = Appointment.get($stateParams);

  function appointmentsDelete() {
    vm.appointment
      .$remove()
      .then(() => $state.go('appointmentsIndex'));
  }

  vm.delete = appointmentsDelete;

  function appointmentsUpdate() {
    Appointment
      .update({id: vm.appointment.id, appointment: vm.appointment });
  }

  function addComment() {
    vm.comment.appointment_id = vm.appointment.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.appointment.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.appointment.comments.indexOf(comment);
        vm.appointment.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;

  function toggleAttending() {
    const index = vm.appointment.attendee_ids.indexOf(vm.currentUser.id);
    if (index > -1) {
      vm.appointment.attendee_ids.splice(index, 1);
      vm.appointment.attendees.splice(index, 1);
    } else {
      vm.appointment.attendee_ids.push(vm.currentUser.id);
      vm.appointment.attendees.push(vm.currentUser);
    }
    appointmentsUpdate();
  }

  vm.toggleAttending = toggleAttending;

  function isAttending() {
    return $auth.getPayload() && vm.appointment.$resolved && vm.appointment.attendee_ids.includes(vm.currentUser.id);
  }

  vm.isAttending = isAttending;
}

AppointmentsEditCtrl.$inject = ['Appointment', 'User', '$stateParams', '$state'];
function AppointmentsEditCtrl(Appointment, User, $stateParams, $state) {
  const vm = this;

  Appointment.get($stateParams).$promise.then((appointment) => {
    vm.appointment = appointment;
    vm.appointment.date = new Date(appointment.date);
  });

  vm.users = User.query();

  function appointmentsUpdate() {
    Appointment
      .update({id: vm.appointment.id, appointment: vm.appointment })
      .$promise
      .then(() => $state.go('appointmentsShow', { id: vm.appointment.id }));
  }

  vm.update = appointmentsUpdate;
}
