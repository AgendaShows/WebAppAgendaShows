// Clases para manipular el DOM 
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
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = ''; //
    }
}

// Funcion de envio
iniciaSesion = (e) => {
    e.preventDefault();
    // Declaro la constante
    const host = 'http://localhost:3000/user/login';

    // Declaro una constante que va a obtener los valores de los inputs
    const form = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    if (form.email === '', form.password === ''){
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
            // Declaro una variable para tener mi status 
            let estado = response.status;
            // Condicional, compruebo si es 200, inicie. De lo contrario, arrojo una alerta
            if (estado === 200) {
                UI.mostrarAlerta('Iniciando Sesion..', 'success');
                UI.limpiarCampos();
                setTimeout(() => {
                    window.location.replace("home.html");
                }, 1000); 
            } else { 
                UI.mostrarAlerta('Revise sus credenciales', 'danger');
            };
        }).catch((error) => {
            console.error(error);
        })
    }
};

// Llamo al boton y le agrego su evento y defino la funcion
document.getElementById("boton-inicia").addEventListener('click', iniciaSesion);