<?php

include '../connect/connectDB.php'; //Llamar a archivo de conexión a la BD.

$sql = "SELECT * FROM region"; //String de la consulta que llama a la tabla 'región'
$result = $conn->query($sql); //Se conecta a la BD para hacer la consulta
$response = '<option value="0">Seleccione región</option>'; //Se inicializa string con primer option por defecto "seleccione región"

if ($result->num_rows > 0) {
    //Si existen datos, se recorre cada fila de la tabla
    while($row = $result->fetch_assoc()) {
        $response .= '<option value="' . $row["id_region"] . '">' . $row["ordinal_region"] . ' - ' .$row["nombre_region"] . '</option>'; //En la respuesta se asignan options para un select por cada fila
    }
}

echo $response; //Se visualiza el string $response cuando se accede a este archivo

?>