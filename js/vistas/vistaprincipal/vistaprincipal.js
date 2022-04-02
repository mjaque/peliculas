/**
  Vista principal de la aplicación.
  Incluye subvistas para el menú de navegación (nav) y los paneles de la aplicación.
**/
//Vistas
import {Vista} from '../vista.js'
import {VistaMensaje} from '../vistamensaje/vistamensaje.js'
import {VistaMenu} from '../vistamenu/vistamenu.js'
import {VistaAltaPelicula} from '../vistaaltapelicula/vistaaltapelicula.js'

export class VistaPrincipal extends Vista {
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista principal.
    @param {Node} base Nodo al que se añadirá la vista principal.
  **/
  constructor(controlador, base) {
    super(controlador)
    this.base = base
    this.base.classList.add(this.getNombreClase())
  }
  iniciar() {
    //Cogemos referencias a los elementos del interfaz
    this.header = this.doc.getElementsByTagName('header')[0]
    this.nav = this.doc.getElementsByTagName('nav')[0]
    this.main = this.doc.getElementsByTagName('main')[0]
    this.divError = this.doc.getElementById('divError')
    this.divListado = this.doc.getElementById('divListado')
    this.divAlta = this.doc.getElementById('divAlta')
    this.footer = this.doc.getElementsByTagName('footer')[0]

    //Capturamos los eventos

    //Subvistas
    this.vistaMenu = new VistaMenu(this.controlador, this.nav)
    this.vistaMensaje = new VistaMensaje(this.controlador, this.divError)
    this.vistaAltaPelicula = new VistaAltaPelicula(this.controlador, this.divAlta)

    //Mostramos el div inicial

    //this.limpiarCampos()

    //Transferimos el doc de la plantilla al documento
    super.transferir(this.base, this.doc)
    //Cargamos la hoja de estilo
    super.cargarCSS(`${this.getNombreClase()}.css`)
  }
  verAltaPelicula(){
    this.ocultarPaneles()
    this.vistaAltaPelicula.mostrar()
  }
  altaPeliculaCorrecta(){
    this.vistaMensaje.mostrar('La película se ha registrado correctamente.', VistaMensaje.OK)
    this.vistaAltaPelicula.limpiar()
  }
  ocultarPaneles(){
    this.vistaAltaPelicula.ocultar()
  }
  mostrarError(error){
    this.vistaMensaje.mostrar(error, VistaMensaje.ERROR)
  }
}
