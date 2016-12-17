angular.module('miapp')
  .controller('ChatController', function ChatController($scope, Chat) {
    $scope.Chat = Chat
  })