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

    // Declaro su end-point, metodo + envio en JSON
    fetch(host, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response) => {
        return response.text();
    }).catch((error) => {
        console.error(error);
    })
};

// Llamo al boton y le agrego su evento y defino la funcion
document.getElementById("boton-inicia").addEventListener('click', iniciaSesion);