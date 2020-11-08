//* Modulos 
const express = require('express');
const router = express.Router();

//* Controller
const usersController = require('../controllers/userController')

//* Routes
router.post('/registrate', usersController.postUserRegister);
router.post('/auth/login', usersController.postUserLogin);
router.get('/obtenerUsuarios', usersController.getUsers);
router.get('/obtenerUsuario/:id', usersController.getUserById);
router.put('/updateUsuario/:id', usersController.updateUser);

 module.exports = router;