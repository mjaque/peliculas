/**
  Controlador principal de la aplicación.
**/
import {VistaPrincipal} from './vistas/vistaprincipal/vistaprincipal.js'

class App{
  constructor(){
    window.onload = this.iniciar.bind(this)
  }
  iniciar(){
    this.vistaPrincipal = new VistaPrincipal(this, document.body)
  }
  gestionarError(error){
    this.vistaPrincipal.mostrarError(error)
  }
  verAltaPelicula(){
    this.vistaPrincipal.verAltaPelicula()
  }
  /**
    Da de alta una nueva Película.
    @param {Pelicula} La nueva Película a dar de alta.
  **/
  altaPelicula(pelicula) {
    //Comprobaciones de negocio.
    pelicula.crear()
      .then(respuesta => this.vistaPrincipal.altaPeliculaCorrecta())
      .catch(error => {
        console.error(error)
        this.gestionarError(error)
      })
  }
}

new App()
