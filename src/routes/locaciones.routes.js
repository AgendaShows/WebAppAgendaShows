//* Modulos
const express = require('express');
const router = express.Router();

//* Controller
const locacionesController = require("../controllers/locacionesController");

//* Routes
router.post('/crearLocacion', locacionesController.postLocacion);
router.get('/obtenerLocaciones', locacionesController.getLocaciones);
router.get('/obtenerLocacion/:id', locacionesController.getLocacionById);
router.put('/updateLocacion/:id', locacionesController.updateLocacion);

module.exports = router;