const amqp = require("amqplib");

const { sendConfirmation } = require('./smsOptions')
const { logger } = require('./logging')
const {EXCHANGE, QUEUE} = require('./data.js');

const MESSAGE_COUNT = parseInt(process.env.MESSAGE_COUNT) || 2;
const HOST = process.env.HOST || 'localhost';
const URL = `amqp://${HOST}:5672`;
let channel = null;

const rabbitConnection = async () => {
    try {

        // uspostavljanje veze s RabbitMQ serverom

        const connection = await amqp.connect(URL);
        logger.info(`Uspješno uspostavljena AMQP veza s lokalnim RabbitMQ serverom ${URL}`)

        // otvaranje kanala za komunikaciju s RabbitMQ serverom
        
        channel = await connection.createChannel();

        //spajanje s izmjenjivačem, odabir modela usmjeravanja, isključena opcija trajnosti izmjenjivača

        await channel.assertExchange(EXCHANGE, 'fanout', {
            durable: false
        });


        // povezivanje s redom, ako red ne postoji, kreiraj novi

        await channel.assertQueue(QUEUE);
        await channel.bindQueue(QUEUE, EXCHANGE, '');
        
        //postavljanje ograničenja preuzimanje poruka s reda

        channel.prefetch(MESSAGE_COUNT);

        //obrađivanje podataka s reda

        channel.consume(QUEUE, tariff => {
            sendConfirmation(tariff, channel);
        });

    }
    catch (ex) {
        logger.log('fatal',`AMQP - ${ex}`);
        process.exit();
    }
}

module.exports = {
    rabbitConnection: rabbitConnection
}
