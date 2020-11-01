const Recitales = require('../models/Recitales');

const getRecitales = async (req,res) => {

    try {
        const recitales = await Recitales.find()
        res.json(recitales)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getRecitalesById = async (req,res) => {

    //Declaro una variable que contendra un id
    let recital;
    try {
        recital = await Recitales.findById(req.params.id);
        res.json(recital)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    res.recital = recital;
};

const postRecitales = async (req,res) => {
    
    const crearRecital = new Recitales({
        fechaRecital: req.body.fechaRecital,
        titulo: req.body.titulo,
        nombreBanda: req.body.nombreBanda,
        imgBanda: req.body.imgBanda,
        ubicacion: req.body.ubicacion,
        descripcion: req.body.descripcion,
        linkEntradas: req.body.linkEntradas,
        valorEntradas: req.body.valorEntradas,
        tipoRecital: req.body.tipoRecital
    });

    try {
        const nuevoRecital = await crearRecital.save()
        res.status(201).json({
            nuevoRecital
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const patchRecitales = async (req,res) => {
    
};

module.exports = {getRecitales, getRecitalesById, postRecitales, patchRecitales};