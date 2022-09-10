const amqp = require("amqplib");

const { changeTariff } = require('./tarrifsChanger');
const { logger } = require('./logging');
const {EXCHANGE, QUEUE} = require('./data');

const MESSAGE_COUNT = parseInt(process.env.MESSAGE_COUNT) || 2;
const ORDER_DELIVERY_TIME = parseInt(process.env.ORDER_DELIVERY_TIME) || 10000;
const HOST = process.env.HOST || 'localhost';
const URL = `amqp://${HOST}:5672`;
let channel = null;

const rabbitConnection = async () => {
    try {
        const connection = await amqp.connect(URL);
        
        channel = await connection.createChannel();
        
        await channel.assertExchange(EXCHANGE, 'fanout', {
            durable: false
        });

        await channel.assertQueue(QUEUE);
        await channel.bindQueue(QUEUE, EXCHANGE, '');
 
        channel.prefetch(MESSAGE_COUNT);
        logger.info(`Uspješno uspostavljena AMQP veza s lokalnim RabbitMQ serverom ${URL}`)

        channel.consume(QUEUE, order => {
            changeTariff(order, channel);
        });
    }
    catch (ex) {
        logger.log('fatal',`greška - ${ex}`);
        process.exit();
    }
}

module.exports = {
    rabbitConnection: rabbitConnection,
}
