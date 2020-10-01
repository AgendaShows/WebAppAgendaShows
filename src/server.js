/****************************
 * Modulos: 
 * express
 * express-validator
 * body-parser
 * bcryptjs
 * JWT (JasonWebToken)
 * PasportJS (Para las redes)
 ****************************/

// Modulos requeridos
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectWithMongo = require("./config/db"); // Llamo a la configuracion de conexion a la DB
const user = require("./routes/user"); // Llamo al modelo de usuarios
const puntoVenta = require("./routes/puntos_de_venta"); //Llamo al modelo punto_de_venta
const locacion = require("./routes/locaciones"); //Llamo al modelo locaciones
const recital = require("./routes/recitales"); //Llamo al modelo recitales
const banda = require("./routes/bandas"); //Llamo al modelo de banda

// Inicios
connectWithMongo();
const app = express();
const publicDirectory = path.join(__dirname, "../public/");

// Declaro puerto para el servidor 
const PORT = process.env.PORT || 3000; 

//Middleware
app.use(express.static(publicDirectory));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Con esta peticion, chequeo que la API este funcionando
app.get("/", (req,res) => {
    res.json({
        message: "Api Running"
    });
});

//Endpoints CRUDS
app.use("/user", user);
app.use("/point", puntoVenta);
app.use("/location", locacion);
app.use("/show", recital);
app.use("/banda", banda);

app.listen(PORT, (req,res) => {
    console.log(`Server iniciado en puerto ${PORT}`);
});