const express = require ('express');
const { showTariff } = require('./menuController');

const router = express.Router()

router.get('/', showTariff);

module.exports = {
    menuRouter: router
}