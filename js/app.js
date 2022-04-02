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
  verAlta(){
    this.vistaPrincipal.verAlta()
  }
  gestionarError(error){
    this.vistaPrincipal.mostrarError(error)
  }
}

new App()
