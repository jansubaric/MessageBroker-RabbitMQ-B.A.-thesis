const { getInfo, chooseTariff } = require('./tariffController');
const express = require ('express')
const router = express.Router()

router.get('/:orderId', getInfo);
router.post('/', chooseTariff);

module.exports = {
    tariffRouter: router
}