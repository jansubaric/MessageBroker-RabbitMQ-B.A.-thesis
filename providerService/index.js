const { startServer } = require('./app')
const { logger } = require('./src/logging')

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

logger.info(`Pričekajte na uspostavljanje veze s RabbitMQ i MongoDB...`)
setTimeout(() => {
    startServer();
    logger.info(`----Pružatelj usluga pokrenut----`)
}, SLEEP_TIME)

