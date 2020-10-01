//Requiero al modelo
const puntoVenta = require("../models/Puntos_de_Venta");

/************************
 * Modelo Punto de Venta
 ***********************/
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

//Exporto el modulo
module.exports = pointId;