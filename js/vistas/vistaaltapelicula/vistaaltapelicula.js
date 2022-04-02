/**
  Vista del alta de películas.
  Muestra el formulario para dar de alta una película.
**/
import {Vista} from '../vista.js'
import {Pelicula} from '../../modelos/pelicula.js'

export class VistaAltaPelicula extends Vista{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista.
    @param {Node} base Nodo al que se añadirá la vista.
  **/
  constructor(controlador, base) {
    super(controlador)
    this.base = base
    this.base.classList.add(this.getNombreClase())
  }
  iniciar(){
    //Cogemos referencias a los elementos del interfaz
    this.iTitulo = this.doc.getElementsByTagName('input')[0]
    this.taDescripcion = this.doc.getElementsByTagName('textarea')[0]
    this.btnAlta = this.doc.getElementsByTagName('button')[0]

    //Asociamos eventos
    this.btnAlta.onclick = this.alta.bind(this)

    super.transferir(this.base, this.doc)
    //Cargamos la hoja de estilo
    super.cargarCSS(`${this.getNombreClase()}.css`)
  }
  mostrar(){
    this.base.style.display = 'block'
    this.iTitulo.focus()
  }
  ocultar(){
    this.base.style.display = 'none'
  }
  alta(){
    const titulo = this.iTitulo.value
    const descripcion = this.taDescripcion.value
    const pelicula = new Pelicula(titulo, descripcion)
    this.controlador.altaPelicula(pelicula)
  }
}
