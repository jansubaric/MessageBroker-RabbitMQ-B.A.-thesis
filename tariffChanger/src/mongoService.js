const mongoose = require('mongoose');
const { logger } = require('./logging');

const MONGO_CONTAINER_NAME = process.env.MONGO_HOST || 'localhost';
const MONGO_URI = `mongodb://${MONGO_CONTAINER_NAME}:27017/providersDB`;

//povezivanje s bazom podataka

const mongoConnect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {  
        if(err) {
            console.error('Mongo ERROR ' + err) //vrati grešku
        }
    })
    mongoose.connection.on('connected', function () {  
        logger.log('info',`MongoDB - uspostavljena veza s bazom podataka ${MONGO_URI}`); 
    }); 
    
    mongoose.connection.on('error',function (err) {  
        logger.log('fatal',`MongoDB - problem pri povezivanju: ${MONGO_URI}`);
    }); 
    
    mongoose.connection.on('disconnected', function () {  
        logger.log('fatal',`MongoDB - veza s bazom podataka prekinuta: ${MONGO_URI}`);
    });
}


const changeStatus = (InfoModel, zahtjevID, zahtjev) => {
    InfoModel.findByIdAndUpdate(zahtjevID, { zahtjev: zahtjev }, (err, order) => { 
        if (err){ 
            logger('fatal', `MongoDB - ${err}`)
        } 
        else{ 
            logger.info(`Stanje zahtjeva ${zahtjevID}: ${zahtjev}`); 
        } 
    }); 
}

module.exports = {
    mongoConnect: mongoConnect,
    changeStatus: changeStatus
}