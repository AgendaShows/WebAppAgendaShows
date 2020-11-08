// Requiero a Mongoose
const mongoose = require('mongoose');
require('dotenv/config')

// Declaro la URL de mi DB
const mongoURL = process.env.DB_CONNECTION;

// Conecto con Mongo declarando una funcion
const connectMongo = () => {
    mongoose.connect(mongoURL,{ 
        useFindAndModify: false,
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }, (err, db) => {
        if (err) throw err;
        console.log("Conectado a DB");
      }
    );
  };

module.exports = connectMongo;