//Requiero al modelo
const Users = require("../models/Users");

/*******************
 * Modelo Locaciones
 *******************/
userId = async (req, res, next) => {
    //Declaro una variable que contendra un id
    let user;
    try {
        user = await Users.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({
                mensaje: "Usuario no existente",
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: error.mensaje
        });
    }
    res.user = user;
    next();
}

//Exporto Modulo
module.exports = userId;