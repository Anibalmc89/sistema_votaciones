
$(document).ready(function() {

    //Función para mostrar el mensaje de validación del nombre
    function msjValidacionNombre(nombre){
        var noEsBlanco = validaNoBlanco(nombre); //Se toma el valor del alias y se valida si está en blanco
 
        if(noEsBlanco == false){
            $('#nombreError').html("Nombre y Apellido no debe quedar en blanco"); //Si está en blanco el nombre, se muestra un mensaje de aviso al lado del campo
        }else{
            $('#nombreError').html(""); //Si no está en blanco, el mensaje de aviso se borra o no muestra nada
        }
    }

    //Función para mostrar el mensaje de validación del alias
    function msjValidacionAlias(alias){
        var validaAlfanumerico = validarAlfanumerico(alias); //Se toma el valor del alias y se valida si contiene letras y números

        if(alias.length <= 5){
            $('#aliasError').html("El alias debe tener más de 5 caracteres"); //Si el alias tiene 5 o menos caracteres, muestra un mensaje de error al lado del campo
        }else{
            if(validaAlfanumerico == false){ //Si tiene más de 5 caracteres, compara si contiene letras y números
                $('#aliasError').html("El alias debe contener letras y números"); //Si no tiene letras y números, se muestra mensaje de error al lado del campo
            }else{
                $('#aliasError').html(""); //Si tiene letras, el mensaje se borra o no muestra nada
            }   
        }
    }

    //Función para mostrar el mensaje de validación del rut
    function msjValidacionRut(rut){
        var validarRut = validaRut(rut); //Se toma el valor del rut y se revisa si es válido
    
        if(validarRut == false){
            $('#rutError').html("El Rut no es válido, favor revisar"); //Si el rut es inválido, muestra un mensaje de error al lado del campo
        }else{
            $('#rutError').html(""); //Si el rut es válido, se borra el mensaje o no muestra nada
        }
    }

    //Función para mostrar el mensaje de validación del email
    function msjValidacionEmail(email){
        var validaEmail = validarEmail(email); //Se toma el valor del email y se revisa si es válido su formato
    
        if(validaEmail == false){
            $('#emailError').html("El email debe ser escrito según estandar ('correo@ejemplo.com')"); //Si el formato del email no es válido, se muestra mensaje de error al lado del campo
        }else{
            $('#emailError').html(""); //Si el formato de email es válido, se borra el mensaje o no muestra nada
        }
    }

    //Función para mostrar el mensaje de validación de la región
    function msjValidacionRegion(region){
        if(region == 0){ //Se revisa si el select de región tiene seleccionada por defecto "Seleccione región"
            $('#regionError').html("Debe seleccionar una región"); //Si no hay región seleccionada, se muestra mensaje de error al lado del campo
        }else{
            $('#regionError').html(""); //Si hay región seleccionada, se borra el mensaje o no dice nada
        }
    }

    //Función para mostrar el mensaje de validación de la comuna
    function msjValidacionComuna(comuna){
        if(comuna == 0){ //Se revisa si el select de comuna tiene seleccionada por defecto "Seleccione comuna"
            $('#comunaError').html("Debe seleccionar una comuna"); //Si no hay comuna seleccionada, se muestra mensaje de error al lado del campo
        }else{
            $('#comunaError').html(""); //Si hay comuna seleccionada, se borra el mensaje o no muestra nada
        }
    }

    //Función para mostrar el mensaje de validación del candidato
    function msjValidacionCandidato(candidato){
        if(candidato == 0){ //Se revisa si el select de candidato tiene seleccionada por defecto "Seleccione candidato"
            $('#candidatoError').html("Debe seleccionar un candidato"); //Si no hay candidato seleccionado, se muestra mensaje de error al lado del campo
        }else{
            $('#candidatoError').html(""); //Si hay candidato seleccionado, se borra el mensaje o no muestra nada
        }
    }

    //Función para mostrar el mensaje de validación de las referencias
    function msjValidacionReferencias(selecciones){
        if(selecciones < 2){ 
            $('#referenciaError').html("Debe seleccionar como mínimo dos opciones"); //Si hay menos de dos checkbox seleccionados, se muestra mensaje de error al lado del último checkbox, solo se mostrará si se hace clic en el botón
        }else{
            $('#referenciaError').html(""); //Si hay más dos o más checkbox seleccionados, se borra el mensaje o no muestra nada
        }
    }
    
    $.ajax({
        url: './utils/obtenerRegiones.php', //Se obtienen las regiones desde un archivo PHP que llama a la BD
        success: function(data) {
            $("select#region").html(data); //Se llena el select de la región
        }
    });
    
    $('#region').change(function(){
        var region = $('#region').val();
        $.ajax({
            url: './utils/obtenerComunas.php?region='+region, //Cuando la región sea seleccionada, rellena el select de comunas según la región seleccionada, desde un archivo PHP que llama a la BD
            success: function(data) {
                $("select#comuna").html(data); //Se llena el select de comuna, dependiente de la región seleccionada
            }
        });
    });
    
    $.ajax({
        url: './utils/obtenerCandidatos.php', //Se obtienen los candidatos desde un archivo PHP que llama a la BD
        success: function(data) {
            $("select#candidato").html(data); //Se llena el select del candidato
        }
    });

    $("#nombre").blur(function(){ //Cuando se quite el foco del campo de nombre
        msjValidacionNombre($(this).val()); //Llama a la función para mostrar el mensaje de validación del nombre
    });
    
    $("#alias").blur(function(){ //Al quitar el foco del alias
        msjValidacionAlias($(this).val()); //Llama a la función para mostrar el mensaje de validación del alias
    });

    $("#rut").blur(function(){ //Al quitar el foco del rut
        msjValidacionRut($(this).val()) //Llama a la función para mostrar el mensaje de validación del rut
    });

    $("#email").blur(function(){ //Al quitar el foco del email
        msjValidacionEmail($(this).val()); //Llama a la función para mostrar el mensaje de validación del email
    });

    $("#region").blur(function(){ //Al quitar el foco de región
        msjValidacionRegion($(this).val()); //Llama a la función para mostrar el mensaje de validación de la región
    });

    $("#comuna").blur(function(){ //Al quitar el foco de comuna
        msjValidacionComuna($(this).val()); //Llama a la función para mostrar el mensaje de validación de la comuna
    });

    $("#candidato").blur(function(){ //Al quitar el foco de candidato
        msjValidacionCandidato($(this).val()); //Llama a la función para mostrar el mensaje de validación del candidato
    });

    $("#btnVotar").click(function(){ //Al hacer clic en el botón "Votar"
        //Se obtienen los valores de los campos
        var nombre = $("#nombre").val();
        var alias = $("#alias").val();
        var rut = $("#rut").val();
        var email = $("#email").val();
        var region = $("#region").val();
        var comuna = $("#comuna").val();
        var candidato = $("#candidato").val();
        
        var referencia = ''; //Se inicializa variable referencia a la que se le asignarán los valores de los checkbox
        
        var validaciones = true; //Se crea una variable booleana validaciones
        var mensaje_rut_existente = ''; //Se crea una variable detexto para mensaje de rut existente 
        var seleccionados = 0; //Se crea una variable de sumatoria para los checkbox seleccionados

        $('#checkboxes input:checked').each(function() { //Revisa cuántos checkbox hay chequeados
            if(referencia != ''){
                referencia += ', '; //Si el campo referencia ya tiene valores concatenados, se le agrega una coma antes de concatenar el siguiente valor
            }

            referencia += $(this).val(); //Se le concatena a referencia el valor del checkbox actual

            seleccionados++; //Se le agrega +1 a la variable seleccionados
        });

        msjValidacionReferencias(seleccionados);

        $.ajax({
            url: './utils/rutIngresado.php?rut='+rut, //Se obtiene a través de PHP los votos registrados en la BD
            async: false, //Se asigna async false para que los valores asignados a variables dentro de este proceso sigan fuera de él
            success: function(data) {
                mensaje_rut_existente = data; //Al encontrar la información al interior del PHP, se concatena el mensaje obtenido del archivo
            }
        });

        if(nombre.length == 0 || alias.length <= 5 || validarAlfanumerico(alias) == false 
        || validaRut(rut) == false || validarEmail(email) == false || region == '0'
        || comuna == '0' || candidato == '0' || seleccionados < 2){
            validaciones = false; //Recorre cada validación y le asigna false a las validaciones
        }else{
            validaciones = true;
        }

        if(validaciones == true){ //Si las validaciones se cumplen
            if(mensaje_rut_existente != ""){
                alert(mensaje_rut_existente); //Si las validaciones están bien, pero sí el mensaje de rut existente, mostrará el mensaje en un alert
            }else{
                $.ajax({
                    url: './utils/savevoto.php', //Se llama al PHP que llama a la BD para hacer la consulta para guardar en la base de datos
                    type: "POST",
                    data: {
                        nombre: nombre, 
                        alias: alias, 
                        rut: rut, 
                        email: email, 
                        region: region, 
                        comuna: comuna, 
                        candidato: candidato, 
                        referencia: referencia
                    },
                    success: function (data) {
                        
                        //Una vez ingresado el voto en la base de datos, los campos se vacían
                        $("#nombre").val('');
                        $("#alias").val('');
                        $("#rut").val('');
                        $("#email").val('');
                        $("#region").val('0');
                        $("#comuna").val('0');
                        $("#candidato").val('0');
    
                        //Una vez ingresado el voto en la base de datos, los checkbox se deschequean
                        $('#web').prop('checked', false);
                        $('#tv').prop('checked', false);
                        $('#rrss').prop('checked', false);
                        $('#amigo').prop('checked', false);
                    }
                });
            }
        }else{
            //Al encontrar validaciones fallidas, pero no hay mensaje de rut existente en BD, se activan los mensajes de validación de los campos
            msjValidacionNombre(nombre);
            msjValidacionAlias(alias);
            msjValidacionRut(rut);
            msjValidacionEmail(email);
            msjValidacionRegion(region);
            msjValidacionComuna(comuna);
            msjValidacionCandidato(candidato);
            msjValidacionReferencias(seleccionados);
        }
        
    });
});