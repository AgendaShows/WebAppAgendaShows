const {check} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require('../models/Users');

const postUserRegister = ([
    check("nombre", "Por favor, ingrese un nombre").not().isEmpty(),
    check("apellido", "Por favor, ingrese un apellido").not().isEmpty(),
    check("email", "Por favor, ingrese un email").isEmail(),
    check("password", "Ingrese una contraseña valida").isLength({min: 6}),
    check("estilo", "Por favor, seleccione un estilo").not().isEmpty()
] , async (req,res) => {

    // Requiero la data que se pone en los inputs
    const {nombre, apellido, email, password, estilo } = req.body;

    try {
        // Declaro una variable llamada usuario que va a buscar de acuerdo al email
        let usuario = await Users.findOne({
            email
        });
                
        // Si existe, retorna mensaje de que ese usuario ya existe
        if (usuario) {
            return res.status(400).json({
                message: "Usuario ya existente"
            });
        }
    
        /*****************************************************************
        * Si no existe, llamo a la constante usuario que dentro tiene el 
        * modelo de schema que se va a guardar en mongo
        *****************************************************************/
        usuario = new Users({
            nombre,
            apellido,
            email,
            password,
            estilo
        });
    
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);
    
        await usuario.save();
    
        const payload = {
            usuario: {
                id: usuario.id
            }
        };
    
        jwt.sign( payload,"randomString", {
                expiresIn: 10000
            }, (err, token) => {
                if (err) throw err;
                res.status(201).json({
                    token,
                    message: "Registro exitoso"
                });
            }
        );
    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error al guardar su informacion"
        });
    }
});

const postUserLogin = ([
    check("email", "Por favor, ingrese un email").isEmail(),
    check("password", "Por favor, ingrese una contraseña").isLength({min: 6})
], async (req,res) => {
    const { email, password } = req.body;

    try {
        // Declaro en una variable que busque a un usuario por email si existe
        let usuario = await Users.findOne({
            email
        });

        // Declaro que, si el email es distinto, devuelva un mensaje
        if (!usuario)
        return res.status(401).json ({
            message: "Usuario no existe"
        });

        // Constante que va a comparar email con contraseña
        const passwordMatch = await bcrypt.compare(password, usuario.password);

        // Declaro que, si el email es distinto, devuelva un mensaje
        if (!passwordMatch)
        return res.status(401).json({
            message: "Contraseña no coincide"
        });

        const payload = {
            usuario: {
                id: usuario.id
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
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error de servidor"
        });
    }
});

const getUsers = async (req,res) => {

    try {
        const usuarios = await Users.find()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getUserById = async (req,res) => {

    //Declaro una variable que contendra un id
    let usuario;
    try {
        usuario = await Users.findById(req.params.id);
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

const updateUser =([
    check("password", "Por favor, ingrese una contraseña").isLength({min: 6})
], async (req,res) => {

    const password = req.body.password

    if (password === null) {
        res.status(400).json({
            message: "No puede enviar contenido vacio"
        });
    };

    let user; 
    try {
        user = await Users.findByIdAndUpdate(req.params.id, password, {useFindAndModify: false})

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        await password.save();

        res.send ({
            message: "Usuario actualizado"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = {postUserRegister, postUserLogin, getUsers, getUserById, updateUser};