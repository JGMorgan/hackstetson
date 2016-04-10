angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('driver', {
    url: '/driver',
    templateUrl: 'templates/driver.html',
    controller: 'driverCtrl'
  })

  .state('driverPassTest', {
    url: '/home',
    templateUrl: 'templates/driverPassTest.html',
    controller: 'driverPassTestCtrl'
  })

  .state('passenger', {
    url: '/passenger',
    templateUrl: 'templates/passenger.html',
    controller: 'passengerCtrl'
  })

  .state('start', {
    url: '/start',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/start')

  

});