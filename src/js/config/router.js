
angular
  .module('diabetesApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html'
    })
    .state('appointmentsIndex', {
      url: '/appointments',
      templateUrl: 'js/views/appointments/index.html',
      controller: 'AppointmentsIndexCtrl as appointmentsIndex'
    })
    .state('appointmentsNew', {
      url: '/appointments/new',
      templateUrl: 'js/views/appointments/new.html',
      controller: 'AppointmentsNewCtrl as appointmentsNew'
    })
    .state('appointmentsShow', {
      url: '/appointments/:id',
      templateUrl: 'js/views/appointments/show.html',
      controller: 'AppointmentsShowCtrl as appointmentsShow'
    })
    .state('appointmentsEdit', {
      url: '/appointments/:id/edit',
      templateUrl: 'js/views/appointments/edit.html',
      controller: 'AppointmentsEditCtrl as appointmentsEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/category.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'AuthCtrl as auth'
    })
    .state('usersShow', {
      url: '/users',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    .state('categoriesIndex', {
      url: '/categories',
      templateUrl: 'js/views/categories/index.html',
      controller: 'CategoriesIndexCtrl as categoriesIndex'
    });

  $urlRouterProvider.otherwise('/');
}
