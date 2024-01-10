<?php

include '../connect/connectDB.php'; //Llamar a archivo de conexión a la BD.

$sql = "SELECT * FROM candidato"; //String de la consulta que llama a la tabla 'candidato'
$result = $conn->query($sql); //Se conecta a la BD para hacer la consulta
$response = '<option value="0">Seleccione candidato</option>'; //Se inicializa string con primer option por defecto "seleccione candidato"

if ($result->num_rows > 0) { 
    //Si existen datos, se recorre cada fila de la tabla
    while($row = $result->fetch_assoc()) {
        $response .= '<option value="' . $row["id_candidato"] . '">' . $row["nombre_candidato"] . '</option>'; //En la respuesta se asignan options para un select por cada fila
    }
}

echo $response; //Se muestra la respuesta cuando se llame a este archivo

?>