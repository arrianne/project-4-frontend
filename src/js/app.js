// app.js is the main JS file which you should define your Angular module
angular
  .module('diabetesApp', ['ui.router', 'ngResource', 'satellizer', 'checklist-model'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(Auth)
  .controller('LoginCtrl', LoginCtrl);

Auth.$inject = ['$authProvider', 'API_URL'];
function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;
}

LoginCtrl.$inject = ['$auth'];
function LoginCtrl($auth) {
  const vm = this;

  function register() {
    $auth.signup(vm.user)
      .then(user => console.log(user));
  }

  vm.register = register;
}
