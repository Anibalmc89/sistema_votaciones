<?php

include '../connect/connectDB.php'; //Llamar a archivo de conexión a la BD.

$region = $_GET['region']; //Obtener valor de región desde URL.

$sql = "SELECT * FROM comuna WHERE id_region='$region'";  //String de la consulta que llama a la tabla 'comuna' buscando por ID región
$result = $conn->query($sql); //Se conecta a la BD para hacer la consulta
$response = '<option value="0">Seleccione comuna</option>'; //Se inicializa string con primer option por defecto "seleccione comuna"


if ($result->num_rows > 0) {
    //Si existen datos, se recorre cada fila de la tabla
    while($row = $result->fetch_assoc()) {
        $response .= '<option value="' . $row["id_comuna"] . '">' . $row["nombre_comuna"] . '</option>'; //En la respuesta se asignan options para un select por cada fila
    }
}

echo $response; //Se visualiza el string $response cuando se accede a este archivo

?>