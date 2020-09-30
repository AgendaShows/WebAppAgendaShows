/******************************
 * Requiero a todos los modelos
 ******************************/
const puntoVenta = require("../models/Puntos_de_Venta");
const locaciones = require("../models/Locaciones");

/************************
 * Modelo Puntos de Venta
 ************************/
pointId = async (req,res,next) =>{
    //Declaro una variable que contendra un id
    let punto;
    try {
        punto = await puntoVenta.findById(req.params.id);
        if (punto == null) {
            return res.status(404).json({
                mensaje: "Punto de venta no existente",
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.mensaje
        });
    }
    res.punto = punto;
    next();
}

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

/************************
 * Exportacion de modulos
 ************************/
module.exports = pointId;
module.exports = locationId;
