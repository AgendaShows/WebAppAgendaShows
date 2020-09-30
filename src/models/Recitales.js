// Requiero Mongoose
const mongoose = require('mongoose');

// Declaro el shecma
const recitalesSchema = mongoose.Schema ({
    fechaRecital: {
        type: Date,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    linkEntradas: {
        type: String,
        required: true
    },
    valorEntradas: {
        type: String,
        required: true
    },
    tipoRecital: {
        type: Array,
        required: true
    }
}, {
    collection: 'Recitales'
});

// Exporto el modulo
module.exports = mongoose.model("Recitales", recitalesSchema);