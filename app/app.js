angular.module('miapp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Login', {
        url: '/',
        controller:'LoginController',
        templateUrl:'app/views/login.html',
      })
      .state('ChatPrincipal', {
        url: '/chat',
        controller:'ChatController',
        templateUrl:'app/views/chat.html',
      })
      .state('User', {
        url: '/user/:nombre',
        controller:'UserController',
        templateUrl:'app/views/user.html',
      })

      
    $urlRouterProvider.otherwise('/')
})

