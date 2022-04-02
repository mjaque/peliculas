/**
  Controlador de la entidad Película.
  Controla las vistas del interfaz CRUD de Película.
**/
export class Pelicula {
  /**
    Constructor de la clase.
    Inicializa los atributos.
    @param {Object} controladorSuperior Controlador superior de este controlador.
  **/
  constructor(controladorSuperior){
    this.controlador = controladorSuperior
  }
  /**
    Da de alta una nueva Película.
    @param {Pelicula} La nueva Película a dar de alta.
  **/
  altaPelicula(pelicula) {
    //Comprobaciones de negocio.
    pelicula.crear()
      .then(respuesta => console.log(respuesta))
      .catch(error => {
        this.controlador.gestionarError(error)
      })
  }
}
