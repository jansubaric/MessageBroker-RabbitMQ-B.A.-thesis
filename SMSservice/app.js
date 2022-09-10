const { rabbitConnection} = require('./src/rabbitMQ')

const startServer = () => {

    //pokretanje usluge i povezivanje s RabbitMQ

    rabbitConnection();
}

module.exports = {
    startServer: startServer
}
