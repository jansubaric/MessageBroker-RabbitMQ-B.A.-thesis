const mongoose = require('mongoose');
const { infoSchema } = require('./tariffModel');

const Info = mongoose.model('Info', infoSchema)

const chooseTariff = (req, res, next) => {
    let infoDetailes = req.body;

    let newInfo = new Info(infoDetailes);
    newInfo.save((err, tariff) => {
        if (err) {
            return next(err);
        }
      
        req.exchangeServices.publishTariff(tariff); 

        res.status(201).json(tariff);
    })
}


const getInfo = (req,res, next) => {
    Info.findById(req.params.tariffId).select('-__v -items._id').exec((err, tariff) => {
        if (err) {
            return next(err);
        }
        res.status(200).json(tariff);
    })
}

module.exports = {
    chooseTariff: chooseTariff,
    getInfo: getInfo
}