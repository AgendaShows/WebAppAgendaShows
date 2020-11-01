// Requiero a Mongoose
const mongoose = require('mongoose'); 

// Armo y declaro el schema del registro
const UserSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    estilo: {
        type: String
    } 
}, {
    collection: 'Users'
}); 

// Exporto el modelo de usuario con el Schema
module.exports = mongoose.model("Users", UserSchema);