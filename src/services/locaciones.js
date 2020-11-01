const Locaciones = require('../models/Locaciones');

const getLocaciones = async (req,res) => {

    try {
        const locaciones = await Locaciones.find()
        res.json(locaciones)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getLocacionesById = async (req,res) => {

    //Declaro una variable que contendra un id
    let locacion;
    try {
        locacion = await Locaciones.findById(req.params.id);
        res.json(locacion)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    res.locacion = locacion;
};

const postLocacion = async (req,res) => {

    const crearLocacion = new locaciones({
        nombre: req.body.nombre,
        calle: req.body.calle,
        numero: req.body.numero,
        barrio: req.body.barrio,
        zona: req.body.zona,
    });

    try {
        const nuevaLocacion = await crearLocacion.save()
        res.status(201).json({
            nuevaLocacion
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const patchLocacion = async (req,res) => {
    
};

module.exports = {getLocaciones, getLocacionesById, postLocacion, patchLocacion};