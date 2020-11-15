const recitalesService = require('../services/recitalesService');
const locacionesService = require('../services/locacionesService');

const bandasService = require('../services/bandasService')


const getFullRecitales = async (req, res) => {
    const recital = await recitalesService.getRecitalById(req.params.id)
    const banda = await bandasService.getBandaByNombre({ "nombre": "Metallica" })
    const locacion = await locacionesService.getLocacionByNombre({ "nombre": "Luna Park" })

    let fullRecital = {
        recital,
        banda,
        locacion
    }

    try {
        res.json(fullRecital)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { getFullRecitales }