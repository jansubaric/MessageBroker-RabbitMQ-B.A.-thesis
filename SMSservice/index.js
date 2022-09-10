const { startServer } = require('./app')
const { logger } = require('./src/logging')

const SLEEP_TIME = process.env.SLEEP_TIME || 30000;

logger.info(`Pričekajte na uspostavljanje veze s RabbitMQ...`)
setTimeout(() => {
    startServer();
    logger.info(`----SMS usluga pokrenuta----`)
}, SLEEP_TIME)



