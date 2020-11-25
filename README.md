# FindConcerts

_Proyecto Grupal de Diplomatura en Desarrollo Web Full Stack en UADE. Se trata de un buscador de recitales en tiempo real a modo de Agenda. Pudiendo acceder a informacion precisa basada en gustos, ubicacion e intereses. Pudiendo filtrar por bandas y/o shows y brindando seguridad al usuario a la hora de comprar entradas._

### Pre-requisitos 📋

_Que cosas necesitas para instalar correr el proyecto_

* Una base de datos en Mongo 
* Editor de codigo preferido

### Instalación 🔧

_Para utilizarlo y realizar pruebas, descarga el proyecto y en consola ejecuta_

```
npm install
```

_Y luego_

```
npm run dev
```

## Endpoints ⚙️

_Endpoints para las pruebas:_

```
/api/obtenerBandas
/api/obtenerBandaById/:id
/api/crearBanda
/api/obtenerBandaPorNombre/:nombre
/api/updateBanda/:id
```
--- 

```
/api/obtenerRecitales
/api/obtenerRecitalById/:id
/api/crearRecital
/api/updateRecital/:id
/api/obtenerFullRecital/:id
```

---

```
/api/obtenerLocaciones
/api/obtenerLocacionById/:id
/api/crearLocacion
/api/updateLocacion/:id
```

---

```
/api/obtenerUsuarios
/api/obtenerUsuarioById/:id
/api/registrate
/api/auth/login
/api/updateUsuario/:id
```

---

```
/api/obtenerPuntos
/api/obtenerPuntoById/:id
/api/crearPunto
/api/updatePunto/:id
```

---

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [NodeJS](https://nodejs.org/es/) - Como lenguaje principal
* [Express](https://expressjs.com/es/) - El framework utilizado para levantar nuestro servidor
* [MongoDB](https://www.mongodb.com/es) - Utilizado para almacenar nuestra informacion
* [Mongoose](https://mongoosejs.com/) - Modelador para MongoDB

## Autores ✒️

_Nuestro Equipo:_

* **Berbara Federico** - *Devs Full Stack* - [¡Fede!](https://github.com/villanuevand)
* **Fretes Lautaro** - *Devs Full Stack* - [¡Lau!](https://github.com/Lfretes05)
* **Sanchez Mauricio** - *Devs Full Stack* - [¡Mau!](https://github.com/Maurisan4011)

---
