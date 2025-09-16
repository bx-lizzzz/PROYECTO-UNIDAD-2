console.log("HOLIIII")
document.getElementById("enviar").addEventListener("click",function(){
    validarFormulario()
})

function validarFormulario() {
    // Obtener los elementos del formulario por su ID
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const gmail = document.getElementById('gmail');
    const numero = document.getElementById('numero');
    const motivo = document.getElementById('motivo');
    

    // gracias a esto se valida el correo
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    //  estop para verificar si un string contiene algún número
    const contieneNumero = /\d/;

    // 1.no numeros en apell y nombre
    if (contieneNumero.test(nombres.value) || contieneNumero.test(apellidos.value)) {
        alert('El nombre y el apellido no deben contener números.');
        return false;
    }
    
    console.log(nombres.value)
    // 2. nombres y apellidos sean correctos
    if (nombres.value.length < 2 || apellidos.value.length < 2) {
        alert('Es muy poquito, el nombre y el apellido deben tener al menos 2 letras.');
        return false;
    }
    
    // 3. campos todos rellenados
    if (nombres.value === '' || apellidos.value === '' || gmail.value === '' || numero.value === '' || motivo.value === '') {
        alert('Por favor, rellena todos los campos.');
        return false;
    }

    // 4. gmail valido
    if (!emailRegex.test(gmail.value)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        return false;
    }

    // check correcto
    if (!consentimiento.checked) {
        alert('Debes aceptar las condiciones de uso.');
        return false;
    }

    // mensaje enviado dsps de enviar todo bien
    alert('Formulario enviado correctamente!');
    return true;
}