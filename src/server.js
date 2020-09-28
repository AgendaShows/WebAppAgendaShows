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

app.use("/user", user);

app.listen(PORT, (req,res) => {
    console.log(`Server iniciado en puerto ${PORT}`);
});