//Modulos
const express = require('express');
const router = express.Router();

//Modelo de Schema y Middleware
const puntoVenta = require("../models/Puntos_de_Venta");
const pointId = require("../middleware/idFinder");

/******
 * POST
 ******/
router.post("/", async (req, res) => {
    const point = new puntoVenta({
        nombre: req.body.nombre,
        sitioWeb: req.body.sitioWeb,
    });

    try{
        const nuevoPoint = await point.save()
        res.status(201).json({
            nuevoPoint
        });
    } catch(error){
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
        const points = await puntoVenta.find()
        res.json(points)
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

router.get("/:id", pointId, (req, res) => {
    res.json(res.punto);
});

/*************
* UPDATE/PATCH
**************/
router.patch("/:id", pointId, async (req, res) => {
    //Condicional que compara los campos
    if(req.body.nombre != null){
        res.punto.nombre = req.body.nombre
    }
    if (req.body.sitioWeb != null) {
        res.punto.sitioWeb = req.body.sitioWeb
    }

    try {
        const pointUpdate = await res.punto.save()
        res.json(pointUpdate);
    } catch (error) {
        res.status(400).json({
            mensaje: error.mensaje
        });
    }
}); 

/*******
* DELETE
********/
router.delete("/:id", pointId, async (req, res) => {
    try {
        await res.punto.deleteOne();
        res.status(200).json({
            mensaje: "Se ha borrado el punto de venta seleccionado"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
        });
    }
});

module.exports = router;