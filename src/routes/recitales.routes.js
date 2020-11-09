//* Modulos
const express = require('express');
const router = express.Router();

//* Controller 
const recitalesController = require('../controllers/recitalesController');

//* Routes
router.post('/crearRecital', recitalesController.postRecital);
router.get('/obtenerRecitales', recitalesController.getRecitales);
router.get('/obtenerRecital/:id', recitalesController.getRecitalById);
router.put('/updateRecital/:id', recitalesController.updateRecital);

module.exports = router;