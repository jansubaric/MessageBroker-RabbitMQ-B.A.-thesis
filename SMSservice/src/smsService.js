const twilio = require('twilio');

//podaci za pristup usluzi Twilio

const accountSid = 'AC4098a26462e8af95742b31b3d0d05df7'
const authToken = '3dabafff9226e9aad3f145f2e65dabf6'
const client = require('twilio')(accountSid, authToken);

// funkcija za slanje SMS poruke

const sendSMS = (smsOptions, callback) => {
    return client.messages.create(smsOptions, callback);
}

module.exports = {
    sendSMS: sendSMS
}
