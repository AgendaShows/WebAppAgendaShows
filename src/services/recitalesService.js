const Recitales = require ('../models/Recitales')

exports.getRecitales = async () => {
    return await Recitales.find();
}

exports.getRecitalById = async (id) => {
    return await Recitales.findById(id);
}
