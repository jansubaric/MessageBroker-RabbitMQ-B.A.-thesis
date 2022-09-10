const mongoose = require('mongoose');
const { logger } = require('./logging')


const MONGO_CONTAINER_NAME = process.env.MONGO_HOST || 'localhost';
const MONGO_URL = `mongodb://${MONGO_CONTAINER_NAME}:27017/providersDB`;


const mongoConnect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {  
        if(err) {
            logger.log('fatal', err);
            logger.log('trace', err.stack);
        }
    })
    mongoose.connection.on('connected', function () {  
        logger.log('info',`MongoDB - uspostavljena veza s bazom podataka ${MONGO_URL}`); 
    }); 
    
    mongoose.connection.on('error',function (err) {  
        logger.log('fatal',`MongoDB - problem pri povezivanju: ${MONGO_URL}`);
    }); 
    
    mongoose.connection.on('disconnected', function () {  
        logger.log('fatal',`MongoDB - veza s bazom podataka prekinuta: ${MONGO_URL}`);
    });
}
  

module.exports = {
    mongoConnect: mongoConnect
}