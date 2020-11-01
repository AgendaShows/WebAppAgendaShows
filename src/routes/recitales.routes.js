//Modulos
const express = require('express');
const router = express.Router();

//Modelo de Schema y Middleware
const recitales = require("../models/Recitales");
const showsId = require("../middleware/showsId");

/******
 * POST
 ******/
router.post("/", async (req, res) => {
    const show = new recitales({
        fechaRecital: req.body.fechaRecital,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        linkEntradas: req.body.linkEntradas,
        valorEntradas: req.body.valorEntradas,
        tipoRecital: req.body.tipoRecital
    });

    try {
        const nuevoShow = await show.save()
        res.status(201).json({
            nuevoShow
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
        const shows = await recitales.find()
        res.json(shows)
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

router.get("/:id", showsId, (req, res) => {
    res.json(res.recital);
});

/*************
* UPDATE/PATCH
**************/
router.patch("/:id", showsId, async (req, res) => {
    //Condicional que compara los campos
    if (req.body.fechaRecital != null) {
        res.recital.fechaRecital = req.body.fechaRecital
    }
    if (req.body.titulo != null) {
        res.recital.titulo = req.body.titulo
    }
    if (req.body.descripcion != null) {
        res.recital.descripcion = req.body.descripcion
    }
    if (req.body.linkEntradas != null) {
        res.recital.linkEntradas = req.body.linkEntradas
    }
    if (req.body.valorEntradas != null) {
        res.recital.valorEntradas = req.body.valorEntradas
    }
    if (req.body.tipoRecital != null) {
        res.recital.tipoRecital = req.body.tipoRecital
    }

    try {
        const showsUpdate = await res.recital.save()
        res.json(showsUpdate);
    } catch (error) {
        res.status(400).json({
            mensaje: error.mensaje
        });
    }
});

/*******
* DELETE
********/
router.delete("/:id", showsId, async (req, res) => {
    try {
        await res.recital.deleteOne();
        res.status(200).json({
            mensaje: "Se ha borrado el recital seleccionado"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

module.exports = router;