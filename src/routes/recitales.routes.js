//* Modulos
const express = require('express');
const router = express.Router();

//* Controller 
const recitalesController = require('../controllers/recitalesController');
const obtenerFullRecital = require('../controllers/fullRecitalController');

//* Routes
router.post('/crearRecital', recitalesController.postRecital);
router.get('/obtenerRecitales', recitalesController.getRecitales);
router.get('/obtenerRecital/:id', recitalesController.getRecitalById);
router.put('/updateRecital/:id', recitalesController.updateRecital);
router.get('/obtenerRecitalPorFecha', recitalesController.getRecitalPorFecha);
router.get('/obtenerFullRecital/:id', obtenerFullRecital.getFullRecitales);

module.exports = router;