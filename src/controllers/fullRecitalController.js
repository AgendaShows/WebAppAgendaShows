const recitalesService = require('../services/recitalesService');
const locacionesService = require('../services/locacionesService');
const bandasService = require('../services/bandasService');


const getFullRecitales = async (req, res) => {

    let recital;
    let banda;
    let locacion;

    //! Capturo error  y corto el flujo  del circuito cuando servicio esta abajo de la collection  Recitales
    try {

        //* Matchea y realiza la consulta por id Recital 
        recital = await recitalesService.getRecitalById(req.params.id)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }


    //todo :Capturo error  y corto el flujo  del circuito cuando servicio esta abajo de la collection  Bandas
    try {
        //* Matchea y realiza la consulta por nombre 
        banda = await bandasService.getBandaByNombre({ "nombre": recital.nombreBanda })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }


    //? Capturo error  y corto el flujo  del circuito cuando servicio esta abajo de la collection Locaciones
    try {
        //* Matchea y realiza la consulta por nombre
        locacion = await locacionesService.getLocacionByNombre({ "nombre": recital.ubicacion })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

    let fullRecital = {
        recital,
        banda,
        locacion
    }

    //! Capturo error  y corto el flujo del circuito si el Response esta roto 
    try {
        //* REspuesta completa del Json
        //* Encaso alguna collection no contenga datos devolvera los objetos de la collection vacios
        res.json(fullRecital)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { getFullRecitales }