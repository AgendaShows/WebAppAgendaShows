//* Modulos requeridos
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
require('dotenv/config');

//* Importaciones
const connectMongo = require("./database/db");
// const logs = require('./utils/logger');
const apiRoutes = require('./router');


//* Inicializadores
const app = express();
const publicDirectory = path.join(__dirname, "../public/");
connectMongo();

//* Declaro puerto para el servidor 
const PORT = process.env.NODE_PORT; 

//* Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(publicDirectory));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//* Rutas
apiRoutes(app);

//* Server Listen
app.listen(PORT, (req,res) => {
    console.log(`Server iniciado en puerto ${PORT}`);
});