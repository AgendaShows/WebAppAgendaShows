// Modulos
const express = require('express');
const router = express.Router();

// Controller
const bandasController = require('../controllers/bandas/bandas');

// Routes
router.get('/obtenerBanda', bandasController.obtenerBandas);


module.exports = router;