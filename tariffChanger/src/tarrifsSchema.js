const mongoose = require('mongoose');

const Schema = mongoose.Schema;

tariffSchema= new Schema({
    naziv_tarife: {
        type: String,
        default: "",
        required: true
    },
    cijena_tarife: {
        type: Number,
        default: 0,
        required: true
    },
    internet: {
        type: String,
        default: "",
        required: true
    },
    pozivi: {
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
    vrijeme: {
        type: Date,
        default: Date.now
    },
    zahtjev: {
        type: String,
        enum: ['na čekanju...', 'prihvaćen zahtjev', 'tarifa aktivirana'],
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