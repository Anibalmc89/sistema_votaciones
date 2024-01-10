//Función para validar el rut
function validaRut(texto){
    //Retorna falso si el campo está vacío
    if ( texto.length == 0 ){ 
        return false; 
    }
    //Retorna falso si el campo tiene menos de 8 caracteres
    if ( texto.length < 8 ){ 
        return false; 
    }

    texto = texto.replace('-',''); //Quita el guion ingresado en el campo de rut
    texto = texto.replace(/\./g,''); //Si el rut fue ingresado con puntos, los quita

    
    var suma = 0; //Se crea una variable para la sumatoria de los dígitos del rut
    var caracteres = "1234567890kK"; //Se crea una variable con los caracteres permitidos
    var contador = 0; //Se crea variable contador


    for (var i=0; i < texto.length; i++){
        u = texto.substring(i, i + 1); //Se recorre cada uno de los números del rut
        if (caracteres.indexOf(u) != -1){
            contador ++; //si los números del rut coinciden con los caracteres permitidos, se suma +1 al contador
        } 
    }

    if (contador==0) { 
        return false //Si el contador es 0, retorna false, o sea, el rut no es válido
    }
    
    var rut = texto.substring(0,texto.length-1); //Se toma el rut sin el dígito verificador
    var digito_rut = texto.substring(texto.length-1); //Se toma el dígito verificador del rut
    var digito_real = '0'; //Se crea una variable para el dígito verificador que se calculará de los dígitos
    var multiplicador = 2; //Se crea una variable para el multiplicador de los dígitos, iniciando en 2
    
    for (i= rut.length -1 ; i >= 0; i--) { //Se recorren los dígitos del rut
        suma = suma + rut.charAt(i) * multiplicador; //Se agrega a la sumatoria cada dígito multiplicado por el multiplicador del momento
        if (multiplicador == 7){
            multiplicador = 2; //Si el multiplicador llega a 7, se reinicia a 2
        }else{
            multiplicador++; //Si el multiplicador no llega a 7 aún, se le suma +1
        }
    }

    resto = suma % 11; //Se calcula el módulo (o resto) de la sumatoria dividida por 11
    
    if (resto==1){
        digito_real = 'k' //Si el módulo es 1, el dígito verificador es K
    }else if(resto==0){
        digito_real = '0' //Si el módulo es 0, el dígito verificador es 0
    }else {
        digito_real = 11-resto; //En caso contrario, el módulo es restado de 11, dicha resta es el dígito verificador obtenido
    }

    if ( digito_real != digito_rut.toLowerCase() ) {
        return false; //Si el dígito verificador real no coincide con el del rut ingresado, el rut es inválido.
    }
    else { 
        return true; //Si el dígito verificador real coincide con el del rut ingresado, el rut es válido.
    }
}

//Función para validar que el campo tenga números y letras
function validarAlfanumerico(text){
    //Revisa si el texto es vacío, ingresado tiene solo números, solo letras o también caracteres especiales
    if (text.length > 0 && isNaN( text ) && !text.match(/^[a-zA-Z]+$/) && !text.match(/\W/)){
        return true; //Retorna verdadero si no es vacío, tiene letras y números y no tiene caracteres especiales
    } else {
        return false; //Retorna falso si no es vacío, tiene letras y números y no tiene caracteres especiales
    }
}

function validaNoBlanco(text){
    //Revisa si el texto es blanco o vacío
    if(text == " "){
        text = "";
    }

    if (text.length > 0 || text != ""){
        return true; //Retorna verdadero si no es blanco
    } else {
        return false; //Retorna falso si es blanco
    }
}

//Función para validar que el email ingresado cumpla con el estándar
function validarEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; //Caracteres del email, que deben incluir una arroba.
    
    if(!emailReg.test(email) || email.length == 0){ 
        return false; //Si el email ingresado no cumple el estándar o está vacío, retorna falso
    }

    return true; //Retorna verdadero por defecto, si acaso el email cumple el estándar
}