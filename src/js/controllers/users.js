angular
  .module('diabetesApp')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);



UsersShowCtrl.$inject = ['User', 'User', 'Category', '$stateParams', '$state', '$auth'];
function UsersShowCtrl(User, Appointment, Category, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;

}

UsersEditCtrl.$inject = ['User', 'Appointment', '$stateParams', '$state'];
function UsersEditCtrl(User, Appointment, $stateParams, $state) {
  const vm = this;

  User.get($stateParams).$promise.then((user) => {
    vm.user = user;
    vm.user.date = new Date(user.date);
  });

  vm.users = User.query();

  function usersUpdate() {
    User
      .update({id: vm.user.id, user: vm.user })
      .$promise
      .then(() => $state.go('usersShow', { id: vm.user.id }));
  }

  vm.update = usersUpdate;
}
