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

const getPuntoDeVentaById = async (req,res) => {

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
};

const postPuntoDeVenta = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }

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

const updatePuntoDeVenta = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }
    
    let puntoDeVenta; 
    try {
        puntoDeVenta = await Puntos_de_Venta.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        res.send ({
            message: "Punto de Venta actualizado"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {getPuntosDeVenta, getPuntoDeVentaById, postPuntoDeVenta, updatePuntoDeVenta};