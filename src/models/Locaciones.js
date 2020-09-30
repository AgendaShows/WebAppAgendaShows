// Requiero a Mongoose
const mongoose = require('mongoose');

// Armo y declaro el schema de las locaciones
const locacionesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    barrio: {
        type: String,
        required: true
    },
    zona: {
        type: String,
        required: true
    }
}, {
    collection: 'Locaciones'
});

// Exporto el Schema
module.exports = mongoose.model("Locaciones", locacionesSchema);