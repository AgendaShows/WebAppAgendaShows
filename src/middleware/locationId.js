//Requiero al modelo
const locaciones = require("../models/Locaciones");

/*******************
 * Modelo Locaciones
 *******************/
locationId = async (req, res, next) => {
    //Declaro una variable que contendra un id
    let locacion;
    try {
        locacion = await locaciones.findById(req.params.id);
        if (locacion == null) {
            return res.status(404).json({
                mensaje: "Locacion no existente",
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.mensaje
        });
    }
    res.locacion = locacion;
    next();
}

//Exporto Modulo
module.exports = locationId;

