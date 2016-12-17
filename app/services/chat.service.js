angular.module('miapp')
  .service('Chat', function Chat ($http, $interval) {
    this.mensajes = []
    this.newMensaje = ''
    this.user = JSON.parse(localStorage.getItem('user')).nombre
    this.email = JSON.parse(localStorage.getItem('user')).correo
    this.resource = 'http://192.168.100.153:9000/api/messages/' + this.user + '/'
    this.basicResource = 'http://192.168.100.153:9000/api/messages/'

    this.crearMensaje = function crearMensaje () {
      var mensaje = {
          desc: this.newMensaje 
      }
      this.mensajes.push(mensaje)
      this.newMensaje=''
      $http
        .post(this.resource, mensaje)
        .success(function success (data) {
          console.log(data);
        })
    }

    this.listarMensajes = function listarMensajes () {
      var servicio = this
      $http
        .get(this.basicResource)
        .success(function success (data) {
          servicio.mensajes = data
          console.log('se rescataron todos los mensajes');
        })
    }

    this.eliminarMensaje = function eliminarMensaje (id) {
      this.mensajes = this.mensajes.filter(function filter (el) {
        return el._id != id
      })

      $http
        .delete(this.resource + id)
        .success(function success () {
          console.log('SE ELIMINÓ');
        })
    }

    var servicio = this
    $interval(function () {
      servicio.listarMensajes()
    }, 3000)
    
  })