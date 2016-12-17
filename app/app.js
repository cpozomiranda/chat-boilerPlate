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
      
    $urlRouterProvider.otherwise('/')
})

