// Requiero Mongoose
const mongoose = require('mongoose');

// Declaro el shecma
const bandasSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    sitioWeb: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: true
    },
    spotify: {
        type: String,
        required: true
    },
    imgBanda: {
        type: String,
        required: true
    },
    videoDemo: {
        type: String,
        required: true
    },
    carousel: [],
}, {
    collection: 'Bandas'
});

// Exporto el modulo
module.exports = mongoose.model("Bandas", bandasSchema);