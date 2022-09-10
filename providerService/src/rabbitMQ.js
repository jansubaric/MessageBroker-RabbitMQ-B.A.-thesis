const amqp = require("amqplib");

const { logger } = require('./logging')

const HOST = process.env.HOST || 'localhost'; 
const URL = `amqp://${HOST}:5672`;
const EXCHANGE = "tariff";
let channel = null;

const rabbitConnection = async () => {
    try {
        const connection = await amqp.connect(URL);
        channel = await connection.createChannel();
        
        await channel.assertExchange(EXCHANGE, 'fanout', {
            durable: false
        });

        logger.info(`AMQP - uspostavljena veza s ${URL}`)
        
    }
    catch (ex) {
        logger.log('fatal',`greška - ${ex}`);
        process.exit();
    }
}

const publishTariff = (tariff) => {
    channel.publish(EXCHANGE,'', Buffer.from(JSON.stringify(tariff)));
    logger.info(`AMQP - zahtjev ${tariff._id} je na čekanju`);
}

const expressService = (req, res, next) => {
    const exchangeServices = {
        publishTariff: publishTariff
    }
    req.exchangeServices = exchangeServices;
    next();
}

module.exports = {
    expressService: expressService,
    rabbitConnection: rabbitConnection
}
