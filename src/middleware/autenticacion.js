const jwt = require("jsonwebtoken"); 

module.exports = (req,res,next) => {

    const token = req.header("token");
    if (!token) return res.status(401).json({
        message: "Error de autenticacion"
    });

    try {
        const decoded = jwt.verify(token, "randomString");
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Token invalido"
        });
    }
}