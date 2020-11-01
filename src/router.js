//* Importaciones
const bandasRoutes = require('./routes/bandas.routes');
const locacionesRoutes = require('./routes/locaciones.routes');
const puntosRoutes = require('./routes/puntos_de_venta.routes');
const recitalesRoutes = require('./routes/recitales.routes');
const userRoutes = require('./routes/user.routes');

const router = (app) => {
    app.use( '/api', bandasRoutes );
    app.use( '/api', locacionesRoutes );
    app.use( '/api', puntosRoutes );
    app.use( '/api', recitalesRoutes );
    app.use( '/api', userRoutes );
};

module.exports = router;