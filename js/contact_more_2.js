//Agregar eventos para la validación en tiempo real
//Evento input
    //Agregar eventos de escucha para la validación en tiempo real
    document.getElementById('nombre').addEventListener('input', validNombre)
    document.getElementById('mail').addEventListener('input', validEmail)
    document.getElementById('contrasena').addEventListener('input', validPassword)
    document.getElementById('contrasenaConfirma').addEventListener('input', confirmPassword)


//Capturar evento submit y toda la info del formulario
document.getElementById('registration_form').addEventListener('submit',function(event){

    event.preventDefault()

    let isNombreValid = validNombre()
    let isFechaValid = validFecha()
    let isTelValid = validTel()
    let isEmailValid = validEmail()
    let isPasswordValid = validPassword ()
    let isConfirmPasswordValid = confirmPassword()

    if(isNombreValid && isFechaValid && isTelValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
        //alert('Formulario enviado con éxito!')
        //this.reset()
    }
    else{
        //alert('Por favor corrige los errores del formulario')
    }
})

//FUNCIONES DE VALIDACION
function validNombre(){
    let nombreTxt = document.getElementById('nombre').value
    let nombreErrorTxt = document.getElementById('nombreError')

    if(nombreTxt.trim().length < 3){
        nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracteres'
        document.getElementById('nombre').classList.add('error-input')
        document.getElementById('nombre').classList.remove('success')
        return false
    }
    else{
        nombreErrorTxt.textContent = ''
        document.getElementById('nombre').classList.add('success')
        document.getElementById('nombre').classList.remove('error-input')
        return true
    }
}

function validFecha(){
    //Validar que la fecha de nacimiento sea anterior a la actual y no mayor de 120 años
    let fechaUser = document.getElementById('fecha').value
    let fechaActual = new Date()
    
    //Sacamos el año actual y le restamos 120 para que la edad no pase de ahí
    let fechaMinima = new Date (
        fechaActual.getFullYear() - 120,
        fechaActual.getMonth(),
        fechaActual.getDay()
    )
    
    fechaUser = new Date (fechaUser)


    let fechaErrorUser = document.getElementById('fechaError')
    let esCorrecto = true

    if(fechaUser > fechaActual || fechaUser < fechaMinima){        
        fechaErrorUser.textContent = 'La fecha introducida no es válida. Por favor introduzca una fecha válida'
        document.getElementById('fecha').classList.add('error-input')
        document.getElementById('fecha').classList.remove('success')
        esCorrecto = false
    }
   else{
        fechaErrorUser.textContent = ''
        document.getElementById('fecha').classList.add('success')
        document.getElementById('fecha').classList.remove('error-input')
        esCorrecto
    }
}

function validTel(){
    //Asegurar que el tel es un valor numérico con un + (+XX XXX XXX XXX)
    let telTxt = document.getElementById('telefono').value
    let telErrorTxt = document.getElementById('telError')

    let esCorrecto = true

    if(telTxt.trim().length < 16 && telTxt.trim().length > 6){
        telErrorTxt.textContent = ''
        document.getElementById('telefono').classList.add('success')
        document.getElementById('telefono').classList.remove('error-input')
        esCorrecto
    }
    else{
        telErrorTxt.textContent = 'El número introducido no es correcto'
        document.getElementById('telefono').classList.add('error-input')
        document.getElementById('telefono').classList.remove('success')
        esCorrecto = false
    }
}

function validEmail(){
    let esCorrecto = true
    let mailTxt = document.getElementById ('mail').value
    let mailErrorTxt = document.getElementById ('mailError')
    let mailRegex = new RegExp ('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')

    if(mailRegex.test(mailTxt.trim())){
        mailErrorTxt.textContent = ''
        document.getElementById('mail').classList.add('success')
        document.getElementById('mail').classList.remove('error-input')
    }
    else{
        esCorrecto = false
        mailErrorTxt.textContent = 'Por favor, introduzca un email válido'
        document.getElementById('mail').classList.add('error-input')
        document.getElementById('mail').classList.remove('success')
    }

    return esCorrecto
}

function validPassword(){
    let esCorrecto = true
    let passwordTxt = document.getElementById ('contrasena').value
    let passwordErrorTxt = document.getElementById ('contraError')

    if(passwordTxt.trim().length < 6){
        esCorrecto = false
        passwordErrorTxt.textContent = 'La contraseña es demasiado corta'
        document.getElementById('contrasena').classList.add('error-input')
        document.getElementById('contrasena').classList.remove('success')
    }
    else{
        passwordErrorTxt.textContent = ''
        document.getElementById('contrasena').classList.add('success')
        document.getElementById('contrasena').classList.remove('error-input')
        return esCorrecto
    }
}

function confirmPassword(){
    let esCorrecto = true
    let passwordTxt = document.getElementById ('contrasena').value
    let confirmPasswordTxt = document.getElementById('contrasenaConfirma').value
    let confirmPasswordErrorTxt = document.getElementById ('contraConfirmError')

    if(confirmPasswordTxt.trim() != passwordTxt.trim()){
        esCorrecto = false
        confirmPasswordErrorTxt.textContent = 'Las contraseñas no coinciden'
        document.getElementById('contrasenaConfirma').classList.add('error-input')
        document.getElementById('contrasenaConfirma').classList.remove('success')
    }
    else{
        confirmPasswordErrorTxt.textContent = ''
        document.getElementById('contrasenaConfirma').classList.remove('error-input')
        document.getElementById('contrasenaConfirma').classList.add('success')
        return esCorrecto
    }
}