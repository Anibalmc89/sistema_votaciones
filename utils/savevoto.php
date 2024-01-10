<?php

include '../connect/connectDB.php'; //Llamar a archivo de conexión a la BD.

$nombre_apellido = $_POST['nombre']; //Obtener nombre ingresado
$alias = $_POST["alias"]; //Obtener alias ingresado
$rut = $_POST["rut"]; //Obtener rut ingresado
$email = $_POST["email"]; //Obtener email ingresado
$region = $_POST["region"]; //Obtener region ingresada
$comuna = $_POST["comuna"]; //Obtener comuna ingresada
$candidato = $_POST["candidato"]; //Obtener candidato ingresado
$referencia = $_POST["referencia"]; //Obtener referencias ingresadas

//String de la consulta que inserta el registro a la tabla 'votos' con los datos ingresados
$sql = "INSERT INTO votos (nombre_apellido, alias, rut, email, region, comuna, candidato, referencia) VALUES ('$nombre_apellido', '$alias', '$rut', '$email', '$region', '$comuna', '$candidato', '$referencia')";

if ($conn->query($sql) === TRUE) {
    echo "Voto exitoso"; //Si el registro es exitoso, muestra mensaje
} else {
    echo "Error: " . $sql . "<br>" . $conn->error; //Si el registro no es exitoso, muestra mensaje de error
}

?>