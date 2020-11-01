// Modulos requeridos
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

//* Importaciones
const connectMongo = require("./database/db"); //* Conexion a DB
const router = require('./router');

//* Inicializadores
const app = express();
const publicDirectory = path.join(__dirname, "../public/");
connectMongo();

//* Declaro puerto para el servidor 
const PORT = 3000; 

//* Middlewares
app.use(cors());
app.use(express.static(publicDirectory));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//* Rutas
router(app);

//* Server Listen
app.listen(PORT, (req,res) => {
    console.log(`Server iniciado en puerto ${PORT}`);
});