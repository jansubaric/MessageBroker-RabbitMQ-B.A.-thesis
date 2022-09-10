const express = require('express');
const morgan = require('morgan');
const { addRoutes } = require('./src/routes');
const { MORGAN_CONFIG } = require('./src/data');
const { logger } = require('./src/logging');
const { errorHandlerMiddleware } = require('./src/errorHandlingService');
const { mongoConnect } = require('./src/mongoService');
const PORT = process.env.PORT || 3000;
const { expressService, rabbitConnection } = require('./src/rabbitMQ');

startServer = () => {
    // mongoDB
    mongoConnect();

    // RabbitMQ
    rabbitConnection();
    
    // express app
    const app = express();

    app.use(morgan(MORGAN_CONFIG, { stream: logger.stream }));

    app.use(express.json());
  
    app.use(expressService);

    addRoutes(app);

    app.use(errorHandlerMiddleware)


    app.listen(PORT, () => {
        logger.info(`providerService listening on port ${PORT}`);
    })
}

module.exports = {
    startServer: startServer
}