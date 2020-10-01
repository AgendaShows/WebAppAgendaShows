/******************************
 * Requiero a todos los modelos
 ******************************/


const bandas = require("../models/Bandas");

/*******************
 * Modelo Recitales
 *******************/
bandasId = async (req, res, next) => {
    //Declaro una variable que contendra un id
    let banda;
    try {
        banda = await bandas.findById(req.params.id);
        if (banda == null) {
            return res.status(404).json({
                mensaje: "Este banda no exite",
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.mensaje
        });
    }
    res.banda = banda;
    next();
}

/************************
 * Exportacion de modulos
 ************************/

module.exports = bandasId;