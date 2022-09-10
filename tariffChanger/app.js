const { mongoConnect } = require('./src/mongoService');
const { rabbitConnection } = require('./src/rabbitMQ');
const { logger } = require('./src/logging')
const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

startServer = () => {

    mongoConnect();
  
    rabbitConnection();
}

module.exports = {
    startServer: startServer
}




