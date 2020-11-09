//* Modulos
const express = require('express');
const router = express.Router();

//* Controller
const puntosDeVentaController = require('../controllers/puntosDeVentaController');

//* Routes
router.post('/crearPunto', puntosDeVentaController.postPuntoDeVenta);
router.get('/obtenerPuntos', puntosDeVentaController.getPuntosDeVenta);
router.get('/obtenerPunto/:id', puntosDeVentaController.getPuntoDeVentaById);
router.put('/updatePunto/:id', puntosDeVentaController.updatePuntoDeVenta);

module.exports = router;