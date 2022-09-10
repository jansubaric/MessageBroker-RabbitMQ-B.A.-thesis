const { sendSMS } = require('./smsService');
const { logger } = require('./logging');


var smsOptions = {
    body: '',
    from: '+19853362235',
    to: '',
  };
  
//slanje SMS potvrde na korisnikov broj

const sendConfirmation = (tariff, Channel) => {
    tariffDetailes = JSON.parse(tariff.content.toString());
    smsOptions.body += `Zahtjev za aktivacijom tarife je prihvaćen. Odabrana tarifa će biti aktivirana. \n
    Broj zahtjeva: ${tariffDetailes._id}`
    smsOptions.to = tariffDetailes.phone_number;
    sendSMS(smsOptions, (error, info) => {
        if (error) {
            logger.log('crit',`sms - neuspješno slanje potvrde na telefonski broj ${tariffDetailes.phone_number} za aktivaciju tarife. id_zahtjeva: ${tariffDetailes._id}.`)
        } else {
            logger.info(`sms - uspješno slanje potvrde na telefonski broj ${tariffDetailes.phone_number} za aktivaciju tarife. id_zahtjeva: ${tariffDetailes._id}.`);
            Channel.ack(tariff);
        }
      })

}

module.exports = {
    sendConfirmation: sendConfirmation
}