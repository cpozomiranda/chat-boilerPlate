angular.module('miapp')
  .service('User', function User () {
    this.user = ''
    this.email = ''
    // this.desc = ''

    this.createUser = function createUser () {
      var usuario = {
        nombre: this.user,
        correo: this.email
      }

      this.user =''
      this.email = ''

      localStorage.setItem('user', JSON.stringify(usuario))
    }


  })