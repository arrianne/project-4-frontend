angular
  .module('diabetesApp')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);



UsersShowCtrl.$inject = ['User', 'User', 'Category', '$state', '$auth'];
function UsersShowCtrl(User, Appointment, Category, $state, $auth) {
  const vm = this;
  vm.user = User.get({ id: $auth.getPayload().id });

  // vm.user = User.get($stateParams);

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

    vm.update= updateUser;
    vm.user = User.get($stateParams);
   //updates the user
   console.log(vm.user);
    function updateUser(){
       console.log('cool');

       User
         .update({id: vm.user.id, user: vm.user })
         .$promise
         .then((user) => $state.go('usersShow', { id: vm.user.id }));

     }
}
