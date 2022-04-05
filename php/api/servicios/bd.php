<?php
class BD{
  public static function conectar(){
    global $config; //TODO: cambiar por inyección de dependencias.

    $uri = 'mysql:host='.$config['host'].';dbname='.$config['bd'];
    $opciones = array(
      PDO::ATTR_PERSISTENT => true,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);

    return new PDO($uri, $config['usuario'], $config['clave'], $opciones);
  }

  public static function seleccionarPelicula($id){
    $conexion = BD::conectar();
    $sql = 'SELECT titulo, descripcion FROM Pelicula ';
    if ($id)
      $sql .= 'WHERE id = :id';
    $sentencia = $conexion->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sentencia->execute(array('id' => $id));

    return $sentencia->fetchAll();
  }

  public static function insertarPelicula($pelicula){
    $conexion = BD::conectar();
    $sql = 'INSERT INTO Pelicula (titulo, descripcion) VALUES(:titulo, :descripcion)';
    $sentencia = $conexion->prepare($sql);
    $sentencia->execute(array('titulo' => $pelicula->titulo, 'descripcion' => $pelicula->descripcion));

    return $conexion->lastInsertId();
  }
}
