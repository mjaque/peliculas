<?php
/**
  Controlador de películas.
**/
require_once('./servicios/bd.php');

class Pelicula{
  function get($id){
    $resultado = BD::seleccionarPelicula(2);
    //Respuesta a un GET
    header('HTTP/1.1 200 OK');
    echo json_encode($resultado);
    die();
  }
  function post($pelicula){
    $id = BD::insertarPelicula($pelicula);
    //Respuesta a un POST
    header('HTTP/1.1 201 Created');
    $localizacion = '/pelicula/'.$id; //Localización del nuevo recurso
    echo $localizacion;
    die();
  }
}
