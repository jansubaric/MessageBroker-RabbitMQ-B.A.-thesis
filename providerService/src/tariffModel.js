const mongoose = require('mongoose');

const Schema = mongoose.Schema;

tariffSchema= new Schema({
    nazivTarife: {
        type: String,
        default: "",
        required: true
    },
    opisTarife: {
        type: String,
        default: "",
        required: true
    },
})

infoSchema = new Schema({
    items: {
        type: [tariffSchema],
        required: true
    },
    vrijemeAktivacije: {
        type: Date,
        default: Date.now
    },
    zahtjev: {
        type: String,
        enum: ['na čekanju...', 'zahtjev prihvaćen', 'tarifa aktivirana'],
        default: 'na čekanju...'
    },
    phone_number: {
        type: String,
        required: true
    }
})

module.exports = {
    infoSchema: infoSchema,
}