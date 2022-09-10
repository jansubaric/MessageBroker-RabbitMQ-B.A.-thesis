const { startServer } = require('./app')
const { logger } = require('./src/logging')

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

logger.info(`Pričekajte na uspostavljanje veze s RabbitMQ i MongoDB...`)
setTimeout(() => {
    startServer();
    logger.info(`---- Promjena tarife pokrenuta ----`)
}, SLEEP_TIME)



