// Modulos 
const express = require('express');
const {check, resultadoValidacion} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Requiero la carpeta de modelos y la guardo en una constante
const User = require("../models/User");

/**********************
 * POST 
 * Registro de Usuario
 **********************/

router.post( "/singup", [
        check("nombre", "Por favor, ingrese un nombre").not().isEmpty(),
        check("apellido", "Por favor, ingrese un apellido").not().isEmpty(),
        check("email", "Por favor, ingrese un email").isEmail(),
        check("password", "Ingrese una contraseña valida").isLength({min: 6})
    ], async (req, res) => {

        // Requiero la data que se pone en los inputs
        const {nombre, apellido, email, password } = req.body;

        try {
            // Declaro una variable llamada usuario que va a buscar de acuerdo al email
            let user = await User.findOne({
                email
            });
            
            // Si existe, retorna mensaje de que ese usuario ya existe
            if (user) {
                return res.status(400).json({
                    msg: "Usuario ya existente"
                });
            }

            /*****************************************************************
             * Si no existe, llamo a la constante usuario que dentro tiene el 
             * modelo de schema que se va a guardar en mongo
             *****************************************************************/
            user = new User({
                nombre,
                apellido,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign( payload,"randomString", {
                    expiresIn: 10000
                }, (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error al guardar su informacion");
        }
    }
);

module.exports = router;

/**********************
 * POST 
 * Login de Usuario
 **********************/

router.post("/login", [
    // Le indico los inputs a chequear
     check("email", "Por favor, ingrese un email").isEmail(),
     check("password", "Por favor, ingrese una contraseña").isLength({min: 6})
 ], async (req, res) => {
    // Requiero la data
    const { email, password } = req.body;

    try {
        // Declaro en una variable que busque a un usuario por email si existe
        let user = await User.findOne({
            email
        });

        // Declaro que, si el email es distinto, devuelva un mensaje
        if (!user)
        return res.status(401).json ({
            message: "Usuario no existe"
        });

        // Constante que va a comparar email con contraseña
        const esIgual = await bcrypt.compare(password, user.password);

        // Declaro que, si el email es distinto, devuelva un mensaje
        if (!esIgual)
        return res.status(401).json({
            message: "Contraseña no coincide"
        });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload,"randomString", {
            expiresIn: 10000
        }, (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error de servidor"
        });
    }
 });