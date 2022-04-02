/**
  Vista del menú principal de la aplicación.
  Muestra el menú de la aplicación.
**/
import {Vista} from '../vista.js'

export class VistaMenu extends Vista{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista.
    @param {Node} base Nodo al que se añadirá la vista.
  **/
  constructor(controlador, base) {
    super(controlador)
    this.base = base
    this.base.classList.add('vistamenu')
  }
  iniciar(){
    //Cogemos referencias a los elementos del interfaz

    //Asociamos eventos
    this.doc.getElementsByTagName('li')[0].onclick = this.controlador.verAlta.bind(this.controlador)

    super.transferir(this.base, this.doc)
    //Cargamos la hoja de estilo
    super.cargarCSS('vistaprincipal.css')
  }
}
