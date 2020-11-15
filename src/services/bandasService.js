const Bandas = require('../models/Bandas')

exports.getBandaById = async (req, res) => {
    return await Bandas.findById(req.params.id);
}


exports.getBandaByNombre = async (req, res) => {
    return await Bandas.find(req);
}




