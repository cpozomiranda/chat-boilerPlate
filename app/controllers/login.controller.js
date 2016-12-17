angular.module('miapp')
  .controller('LoginController', function LoginController($scope, User) {
    $scope.User = User
  })
