// Requiero a Mongoose
const mongoose = require('mongoose');

// Armo y declaro el schema de los puntos de venta
const puntosDeVentaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    sitioWeb: {
        type: String,
        required: true
    },
}, {
    collection: 'Puntos_de_Venta'
});

// Exporto el Schema
module.exports = mongoose.model("Puntos_de_Venta", puntosDeVentaSchema);