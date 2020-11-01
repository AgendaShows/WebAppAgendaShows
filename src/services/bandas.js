const Bandas = require('../models/Bandas');

const getBandas = async (req,res) => {

    try {
        const bandas = await Bandas.find()
        res.json(bandas)
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
};

const getBandasById = async (req,res) => {

    //Declaro una variable que contendra un id
    let banda;
    try {
        banda = await Bandas.findById(req.params.id);
        res.json(banda)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
    res.banda = banda;
};

const postBanda = async (req,res) => {
    
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
        const nuevaBanda = await crearBanda.save();
        res.status(201).json({
            nuevaBanda
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const patchBanda = async (req,res) => {
    
};

//TODO: Funcion que busque bandas por nombre.
const getBandasByNombre = async (req,res) => {

};

module.exports = {getBandas, getBandasById, postBanda, patchBanda, getBandasByNombre};