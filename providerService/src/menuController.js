const { TARIFE } = require('./data');

const showTariff = (req,res) => {
    itemNames = Object.keys(TARIFE);
    tarife = itemNames.map((itemName) => {
        return { naziv_tarife: itemName, opis_tarife: TARIFE[itemName]}
    })
    res.status(200).json({tarife: tarife});
}

module.exports = {
    showTariff: showTariff
}