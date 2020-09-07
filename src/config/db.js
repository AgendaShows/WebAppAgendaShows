// Requiero a Mongoose
const mongoose = require('mongoose');

// Declaro la URL de mi DB
const mongoURL = "mongodb+srv://root:2208Mega.@cluster0.lxbo6.mongodb.net/Testing";

// Conecto con Mongo declarando una funcion
const connectWithMongo = () => {
    mongoose.connect(mongoURL,{ 
        useFindAndModify: false,
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }, (err, db) => {
        if (err) throw err;
        console.log("Conectado a Mongo.");
      }
    );
  };

  // Exporto mi funcion para requerirla desde otro lado
module.exports = connectWithMongo;