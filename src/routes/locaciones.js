//Modulos
const express = require('express');
const router = express.Router();

//Modelo de Schema y Middleware
const locaciones = require("../models/Locaciones");
const locationId = require("../middleware/locationId");

/******
 * POST
 ******/
router.post("/", async (req, res) => {
    const location = new locaciones({
        nombre: req.body.nombre,
        calle: req.body.calle,
        numero: req.body.numero,
        barrio: req.body.barrio,
        zona: req.body.zona,
    });

    try {
        const nuevaLocation = await location.save()
        res.status(201).json({
            nuevaLocation
        });
    } catch (error) {
        res.status(401).json({
            mensaje: error.mensaje
        });
    }
});

/*************
 * GET ALL N.1
 * GET ONE N.2
 *************/
router.get("/all", async (req, res) => {
    try {
        const locations = await locaciones.find()
        res.json(locations)
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

router.get("/:id", locationId, (req, res) => {
    res.json(res.locacion);
});

/*************
* UPDATE/PATCH
**************/
router.patch("/:id", locationId, async (req, res) => {
    //Condicional que compara los campos
    if (req.body.nombre != null) {
        res.locacion.nombre = req.body.nombre
    }
    if (req.body.calle != null) {
        res.locacion.calle = req.body.calle
    }
    if (req.body.numero != null) {
        res.locacion.numero = req.body.numero
    }
    if (req.body.barrio != null) {
        res.locacion.barrio = req.body.barrio
    }
    if (req.body.zona != null) {
        res.locacion.zona = req.body.zona
    }

    try {
        const locationUpdate = await res.locacion.save()
        res.json(locationUpdate);
    } catch (error) {
        res.status(400).json({
            mensaje: error.mensaje
        });
    }
});

/*******
* DELETE
********/
router.delete("/:id", locationId, async (req, res) => {
    try {
        await res.locacion.deleteOne();
        res.status(200).json({
            mensaje: "Se ha borrado la locacion seleccionada"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

module.exports = router;