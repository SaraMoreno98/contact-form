//Agregar eventos para la validación en tiempo real
//Evento input
    //Agregar eventos de escucha para la validación en tiempo real
    document.getElementById('nombre').addEventListener('input', validNombre)
    document.getElementById('mail').addEventListener('input', validEmail)
    document.getElementById('contrasena').addEventListener('input', validPassword)
    document.getElementById('contrasenaConfirma').addEventListener('input', confirmPassword)


//Capturar evento submit y toda la info del formulario
document.getElementById('registration_form').addEventListener('submit',function(event){
    let isNombreValid = validNombre()
    let isEmailValid = validEmail()
    let isPasswordValid = validPassword ()
    let isConfirmPasswordValid = confirmPassword()

    if(isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
        //alert('Formulario enviado con éxito!')
        //this.reset()
    }
    else{
        //alert('Por favor corrige los errores del formulario')
    }


    event.preventDefault()
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