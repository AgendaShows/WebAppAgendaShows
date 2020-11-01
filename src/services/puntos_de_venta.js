const Puntos_de_Venta = require('../models/Puntos_de_Venta');

const getPuntosDeVenta = async (req,res) => {

    try {
        const puntoDeVenta = await Puntos_de_Venta.find()
        res.json(puntoDeVenta)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getPuntosDeVentaById = async (req,res) => {

    //Declaro una variable que contendra un id
    let puntoDeVenta;
    try {
        puntoDeVenta = await Puntos_de_Venta.findById(req.params.id);
        res.json(puntoDeVenta)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    res.banda = banda;
};

const postPuntosDeVenta = async (req,res) => {

    const crearPuntoDeVenta = new Puntos_de_Venta({
        nombre: req.body.nombre,
        sitioWeb: req.body.sitioWeb,
    })

    try {
        const nuevoPuntoDeVenta = await crearPuntoDeVenta.save();
        res.status(201).json({
            nuevoPuntoDeVenta
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const patchPuntosDeVenta = async (req,res) => {
    
};

module.exports = {getPuntosDeVenta, getPuntosDeVentaById, postPuntosDeVenta, patchPuntosDeVenta};