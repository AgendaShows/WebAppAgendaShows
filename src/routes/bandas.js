//Modulos
const express = require('express');
const router = express.Router();

//Modelo de Schema y Middleware
const bandas = require('../models/Bandas');
const bandaId = require("../middleware/idBanda");

router.get("/all", async (req, res) => {
    console.log("entro en getobtenerbanda")
    try {
        const bandasOk = await bandas.find()
        res.json(bandasOk)
    } catch (error) {
        res.status(500).json({
            mensaje: error.mensaje
             
        });
        console.log("rompio en getobtenerbanda")
    }
});

router.get("/:id", bandaId, (req, res) => {
    res.json(res.banda);
});


module.exports = router;