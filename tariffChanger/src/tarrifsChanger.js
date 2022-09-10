const { infoSchema } = require('./tarrifsSchema');
const mongoose = require('mongoose');
const { changeStatus } = require('./mongoService')
const { ACCEPTED, CHANGED } = require('./data')

const infoModel = mongoose.model('Info', infoSchema)

const ORDER_DELIVERY_TIME = parseInt(process.env.ORDER_DELIVERY_TIME) || 30000;

const changeTariff = (info, channel) => {
    infoData = JSON.parse(info.content.toString());
    changeStatus(infoModel, infoData._id, ACCEPTED);
    setTimeout(() => {
        changeStatus(infoModel, infoData._id, CHANGED);
        channel.ack(info);
    }, ORDER_DELIVERY_TIME);
}

module.exports = {
    changeTariff: changeTariff
}