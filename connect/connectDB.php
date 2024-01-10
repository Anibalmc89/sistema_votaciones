<?php
$servername = "localhost"; //Nombre del servidor de la BD
$database = "votaciones"; //Nombre de la DB
$username = "root"; //Usuario de la DB
$password = ""; //Password de la BD
// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $database);
// Chequear conexión, mostrar mensaje si falla
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>