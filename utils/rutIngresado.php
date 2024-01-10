<?php

include '../connect/connectDB.php'; //Llamar a archivo de conexión a la BD.

$rut = $_GET['rut']; //Obtener valor de rut desde URL.

if (strpos($rut, ".") !== false) {
    $rut = str_replace('.', '', $rut); //Si el RUT fue ingresado con números, los elimina para revisar si existe
}

$response = ""; //Se define variable de string $response

$sql = "SELECT * FROM votos WHERE rut='$rut'"; //String de la consulta que llama a la tabla 'votos' buscándolos por rut

$result = $conn->query($sql); //Se conecta a la BD para hacer la consulta

if ($result->num_rows > 0) {
    //Si existen datos, muestra mensaje
    $response = "El usuario con este RUT ya está registrado. No se puede votar más de una vez.";
}

echo $response;

?>