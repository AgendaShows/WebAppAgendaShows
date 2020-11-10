//* Modulos
const express = require('express');
const router = express.Router();

//* Controller
const bandasController = require('../controllers/bandasController');

//* Routes
router.post('/crearBanda', bandasController.postBanda);
router.get('/obtenerBandas', bandasController.getBandas);
router.get('/obtenerBanda/:id', bandasController.getBandaById);
router.put('/updateBanda/:id', bandasController.updateBanda);
router.get('/obtenerBandaPorNombre/:nombre', bandasController.getBandaByNombre);


module.exports = router;