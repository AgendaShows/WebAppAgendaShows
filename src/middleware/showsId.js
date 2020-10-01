//Requiero al modelo
const recitales = require("../models/Recitales");

/*******************
 * Modelo Recitales
 *******************/
showsId = async (req, res, next) => {
    //Declaro una variable que contendra un id
    let recital;
    try {
        recital = await recitales.findById(req.params.id);
        if (recital == null) {
            return res.status(404).json({
                mensaje: "Este recital no exite",
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.mensaje
        });
    }
    res.recital = recital;
    next();
}

//Exporto modulo
module.exports = showsId;