const { menuRouter } = require('./menuRouter');
const { tariffRouter } = require('./tariffRouter');
const { MSG } = require('./data')

const addRoutes = (app) => { 
    app.use('/api/menu', menuRouter);
    app.use('/api/aktiviraj', tariffRouter);
}

module.exports = {
    addRoutes: addRoutes
}