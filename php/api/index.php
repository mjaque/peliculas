<?php
  /**
    Fachada del backend de la aplicación.
    Es un interfaz RESTful (https://www.rfc-editor.org/rfc/rfc7231)
  **/
  try{
    //Cargamos la configuración
    $config = require_once('config.php');

    //Procesamos la petición para identificar el recurso solicitado
    $recurso = substr($_SERVER[REQUEST_URI], strlen($_SERVER['SCRIPT_NAME']));
    $metodo = $_SERVER['REQUEST_METHOD'];
    $objeto = json_decode(file_get_contents('php://input'));

    //Routing
    if (preg_match("/^\/pelicula/", $recurso)){
      require_once('./controladores/pelicula.php');
      $controlador = new Pelicula();
      switch($metodo){
        case 'GET':
          $controlador->get($objeto);
        case 'POST':
          $controlador->post($objeto);
      }
    }
  }catch(Exception $excepcion){
    header('HTTP/1.1 500 Internal Server Error');
    echo $excepcion;
    die();
  }
