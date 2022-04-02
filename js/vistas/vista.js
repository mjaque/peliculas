/**
  Clase Vista
  Se utiliza como clase abstracta para derivar de ella las vistas de la aplicación.
**/
export class Vista {
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista.
  **/
  constructor(controlador) {
    this.controlador = controlador
    setTimeout(this.cargarHTML.bind(this), 0)
  }
  /**
    Carga la plantilla HTML asociada a la vista.
    La plantilla se carga del directorio actual (el mismo de la vista) y debe tener el mismo nombre que la vista.
    El documento {HTMLDocument} se guarda en el atributo this.doc.
    @return {Promise} Promesa que devuelve como parámetro de éxito el HTMLDocument cargado de la plantilla.
  **/
  cargarHTML() {
    const plantilla = `${this.getURLDirectorio()}${this.getNombreClase()}.html`
    fetch(plantilla)
      .then(respuesta => respuesta.text())
      .then(texto => {
        const parser = new DOMParser()
        this.doc = parser.parseFromString(texto, "text/html")
      })
      .then(() => this.iniciar())
  }
  /**
    Devuelve el nombre de la clase en minúsculas.
    @return {String} Nombre de la clase.
  **/
  getNombreClase(){
    return this.constructor.name.toLowerCase()
  }
  /**
    Devuelve la URL del directorio de la vista.
    @return {String} URL del directorio de la vista.
  **/
  getURLDirectorio(){
    return `${import.meta.url.substring(0,import.meta.url.lastIndexOf('/'))}/${this.getNombreClase()}/`
  }
  /**
    Inicializa la vista.
    Método abstracto para ser sobreescrito. Debe/puede registrar los elementos del interfaz, capturar los eventos y trasferir la plantilla al DOM de la página.
    @abstract
  **/
  iniciar() {}
  /**
  Transfiere los elementos de la plantilla al documento principal, insertándolos en el elemento base en el mismo orden en el que figuran en la plantilla.
  @param base {HTMLElmement} Elemento del documento principal que será padre de los elementos transferidos.
  @param doc {Document} Documento HTML de la plantilla que contiene los elemenetos a transferir.
  */
  transferir(base, doc) {
    while (doc.body.children.length > 0)
      base.appendChild(doc.body.children.item(0))
  }
  /**
    	Carga un fichero de CSS en la cabecera del documento.
      @param {Function} callback Función que se llamará después de la carga.
  **/
  cargarCSS(callback) {
    let link = document.createElement('link')
    link.href = `${this.getURLDirectorio()}${this.getNombreClase()}.css`
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.media = 'screen'
    link.onload = callback
    document.getElementsByTagName('head')[0].appendChild(link)
  }
}
