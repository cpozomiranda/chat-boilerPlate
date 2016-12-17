angular.module('miapp')
  .controller('UserController', function UserController($scope, $state, Chat) {
    $scope.mensajes = Chat.seleccionar($state.params.nombre, function (mensajes) {
        $scope.mensajes = mensajes
      })
    $scope.userName = $state.params.nombre
  })