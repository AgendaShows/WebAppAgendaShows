const Locaciones = require('../models/Locaciones');
const locacionesService = require('../services/locacionesService');

const getLocaciones = async (req,res) => {

    try {
        const locaciones = await locacionesService.getLocaciones();
        res.json(locaciones)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getLocacionById = async (req,res) => {

    //Declaro una variable que contendra un id
    let locacion;
    try {
        locacion = await locacionesService.getLocacionById(req.params.id);
        res.json(locacion)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const postLocacion = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }

    const crearLocacion = new Locaciones({
        nombre: req.body.nombre,
        calle: req.body.calle,
        numero: req.body.numero,
        barrio: req.body.barrio,
        zona: req.body.zona,
    });

    try {
        const newLocacion = await crearLocacion.save()
        res.status(201).json({
            newLocacion
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const updateLocacion = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }
    
    let locacion; 
    try {
        locacion = await Locaciones.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        res.send ({
            message: "Locacion actualizada"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {getLocaciones, getLocacionById, postLocacion, updateLocacion};