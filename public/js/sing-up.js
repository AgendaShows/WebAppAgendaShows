// Clase que va a manejar los eventos del DOM
class UI {
    static mostrarAlerta(mensaje, className){
        // Creo el div que va a mostrarme la alerta
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        // Posiciono la alerta abajo del titulo y antes del form
        const container = document.querySelector('.container-form');
        const form = document.querySelector('#form');
        container.insertBefore(div, form);

        //Muestro la alerta por 3 segundos
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static limpiarCampos(){
        document.querySelector('#nombre').value = '';
        document.querySelector('#apellido').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    }
}

// Funcion de envio
registrate = (e) => {
    e.preventDefault();
    // Declaro la constante
    const host = 'http://localhost:3000/user/singup';

    // Declaro una constante que va a obtener los valores de los inputs
    const form = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    if (form.nombre === '', form.apellido === '', form.email === '', form.password === ''){
        UI.mostrarAlerta('Por favor, ingrese todos los datos', 'danger');
    } else { 
        // Declaro su end-point, metodo + envio en JSON
        fetch(host, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-type': 'application/json'
        }
        }).then((response) => {
            // Declaro una variable que va a contener el estado
            let estado = response.status;
            // Si es codigo 200, me redirige al login, de lo contrario muestra error
            if (estado === 201) {
                UI.mostrarAlerta('Registro Exitoso', 'success');
                UI.limpiarCampos();
                setTimeout(() => {
                    window.location.replace("index.html");
                }, 1000); 
            } else { 
                UI.mostrarAlerta('Intente nuevamente', 'danger');
            };
        }).catch((error) => {
            console.error(error);
        })
    }
};

// Llamo al boton y le agrego su evento y defino la funcion
document.getElementById("registrate").addEventListener('click', registrate);