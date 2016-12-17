angular.module('miapp')
  .service('Login', function Login () {
    this.data = [
      {id:1, desc: 'Todo 1', completado: false, usuario: 'Juanito'},
      {id:2, desc: 'Todo 2', completado: false, usuario: 'Pedrito'},
      {id:3, desc: 'Todo 3', completado: true, usuario: 'Lucas'},
      {id:4, desc: 'Todo 4', completado: false, usuario: 'Juanito'}
    ]
  })