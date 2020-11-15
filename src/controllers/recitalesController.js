const Recitales = require('../models/Recitales');
const recitalesService = require('../services/recitalesService');

const getRecitales = async (req, res) => {

    try {
        const recitales = await recitalesService.getRecitales();
        res.json(recitales)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getRecitalById = async (req, res) => {

    //Declaro una variable que contendra un id
    let recital;
    try {
        recital = await recitalesService.getRecitalyId(req.params.id);
        res.json(recital)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const postRecital = async (req, res) => {

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

const updateRecital = async (req, res) => {

    if (req.body == null) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }

    let recital;
    try {
        recital = await Recitales.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        res.send({
            message: "Recital actualizado"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getRecitalPorFecha = async (req, res) => {

    let fechasOrdenadas = { fechaRecital: 1 }
    try {
        fechasOrdenadas = await Recitales.find().sort(fechasOrdenadas);
        res.json(fechasOrdenadas);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { getRecitales, getRecitalById, postRecital, updateRecital, getRecitalPorFecha };