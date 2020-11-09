const Bandas = require('../models/Bandas');

const getBandas = async (req, res) => {

    try {
        const bandas = await Bandas.find();
        res.json(bandas);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getBandaById = async (req,res) => {

    let banda;
    try {
        banda = await Bandas.findById(req.params.id);
        res.json(banda)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const postBanda = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }
    
    const crearBanda = new Bandas({
        nombre: req.body.nombre,
        genero: req.body.genero,
        tipo: req.body.tipo,
        sitioWeb: req.body.sitioWeb,
        instagram: req.body.instagram,
        youtube: req.body.youtube,
        spotify: req.body.spotify, 
    });

    try {
        const newBanda = await crearBanda.save();
        res.status(201).json({
            newBanda
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const updateBanda = async (req,res) => {

    if (!req.body) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    }
    
    let banda; 
    try {
        banda = await Bandas.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        res.send ({
            message: "Banda actualizada"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//TODO: Comparador de si existe una banda o no 
const getBandaByNombre = async (req,res) => {

    let unaBanda;
    try {
        unaBanda = await Bandas.findOne({
            "nombre": req.params.nombre
        });
        res.status(200).json ({
            unaBanda
        });
    } catch (error) {
        return res.status(500).json({
            message: "No existe esa banda"
        });
    }
};

module.exports = {getBandas, getBandaById, postBanda, updateBanda, getBandaByNombre};