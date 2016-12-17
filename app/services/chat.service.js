angular.module('miapp')
  .service('Chat', function Chat () {
    this.mensajes = []
    this.newMensaje = ''
    this.resource = 'http://192.168.100.153:9000/api/messages/'

    this.crearMensaje = function crearMensaje () {
      var mensaje = {
          id:(new Date().getTime()),
          texto: this.newMensaje 
      }

      this.mensajes.push(mensaje)
      this.newMensaje=''
    
    }
  })