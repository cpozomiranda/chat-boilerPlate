angular.module('miapp')
  .service('Chat', function Chat ($http, $interval) {
    this.mensajes = []
    this.newMensaje = ''
    this.users = []
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
          servicio.mensajes = data.sort(function ordenar (a,b) {
            if (Date.parse(a.createdAt) > Date.parse(b.createdAt)){
              return 1
            }
            if(Date.parse(a.createdAt) < Date.parse(b.createdAt)){
              return -1
            }
            return 0
          })
        })
    }

    this.listarUsuarios = function listarUsuarios () {
      var servicio = this
      $http
        .get(this.basicResource)
        .success(function success (data) {
         servicio.users = data.map(function map (el) {
           return el.user
         })
        servicio.users = servicio.users.filter(function filter (el, pos) {
          return servicio.users.indexOf(el) == pos
        })
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

    this.listarUsuarios()
    
  })