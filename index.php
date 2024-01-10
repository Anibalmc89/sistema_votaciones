<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>Sistema de votación</title>
    <script src="js/valida.js"></script> <!-- Se llama al js que contiene las funciones de validación de ciertos campos -->
    <script src="js/funciones.js"></script> <!-- Se llama al js que contiene las funciones de los campos -->
    <script></script>
</head>
<body>
    <h1>Formulario de Votación</h1>
    <fieldset>
        <!-- se crea una tabla para ordenar los campos y haya un espacio entre las etiquetas y los campos -->
        <table>
            <tr>
                <td>Nombre y Apellido</td>
                <td><input type="text" name="nombre" id="nombre" placeholder="Ej. Juan Pérez" /></td>
                <td><span id="nombreError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>Alias</td>
                <td><input type="text" name="alias" id="alias" placeholder="Ej. juanpe23"/></td>
                <td><span id="aliasError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>RUT</td>
                <td><input type="text" name="rut" id="rut" placeholder="Ej. 12345678-9" /></td>
                <td><span id="rutError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" id="email" placeholder="Ej. correo@ejemplo.com" /></td>
                <td><span id="emailError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>Región</td>
                <td><select name="region" id="region"></select></td>
                <td><span id="regionError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>Comuna</td>
                <td><select name="comuna" id="comuna">
                    <option value="0">Seleccione comuna</option>
                </select></td>
                <td><span id="comunaError" style="color: red"></span></td>
                </td>
            </tr>
            <tr>
                <td>Candidato</td>
                <td><select name="candidato" id="candidato"></select></td>
                <td><span id="candidatoError" style="color: red"></span></td>
            </tr>
            <tr>
                <td>
                    Como se enteró de Nosotros
                </td>
                <td>
                    <div id="checkboxes">
                        <input type="checkbox" id="web" name="web" value="Web" />
                        <label for="web">Web</label>
                        <input type="checkbox" id="tv" name="tv" value="TV" />
                        <label for="tv">TV</label>
                        <input type="checkbox" id="rrss" name="rrss" value="Redes Sociales" />
                        <label for="rrss">Redes Sociales</label>
                        <input type="checkbox" id="amigo" name="amigo" value="Amigo" />
                        <label for="rrss">Amigo</label>
                    </div>
                </td>
                <td><span id="referenciaError" style="color: red"></span></td>
            </tr>
            <tr>
                <td><input type="button" value="Votar" id="btnVotar"></td>
            </tr>
        </table>
    </fieldset>
</body>
</html>