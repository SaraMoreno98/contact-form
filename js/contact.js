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

    function validNombre(){
        let nombreTxt = document.getElementById('nombre').value
        let nombreErrorTxt = document.getElementById('nombreError')

        if(nombreTxt.trim().length < 3){
            nombreErrorTxt.textContent = 'El nombre debe tener al menos 3 caracteres'
            return false
        }
        else{
            nombreErrorTxt.textContent = ''
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
        }
        else{
            esCorrecto = false
            mailErrorTxt.textContent = 'Por favor, introduzca un email válido'
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
        }
        else{
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
        }
        else{
            return esCorrecto
        }
    }


    /*
        Es función recibe un argumento de tipo event
        event es un objeto con información sobre el evento
        este evento es del tipo submit
    */

    //El siguiente codigo evita que la pag recargue y que envie info
        event.preventDefault()

        //console.log("event:", event)

    //Especifica el tipo evento
        //console.log('Tipo de evento', event.type)
    
    //Contiene una referencia al DOM (doc HTML) que dispara el evento
        //console.log('Objetivo de evento', event.target)

    //Marca el tiempo en ms en que ocurrió el evento
        //console.log('Tiempo de evento en ms', event.timeStamp)

    //Un boleano que indica si el evento fue indicado por un usuario (true) o por un script (false)
        //console.log('Es confiable', event.isTrusted)
})