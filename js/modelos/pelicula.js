/**
  Clase de Modelo para la entidad Película.
**/
import {Rest} from '../servicios/rest.js'

/**
  Clase modelo para la entidad Película.
**/
export class Pelicula{
  constructor(titulo, descripcion){
    this.titulo = titulo
    this.descripcion = descripcion
  }
  crear(){
    return Rest.post('pelicula', this)
      .then( localizacion => {
        this.id = localizacion.substring(localizacion.indexOf('/', 1))
      })
  }
  listar(){
    return Rest.get('pelicula')
  }
}
