const { getRate } = require("./handlers.rate.js");

const controllerGetRate = async (req, res) => {
    try {
        const rate = await getRate();
        res.status(rate.code).send(`Bitcoin price: ${rate.data.bitcoin.uah} UAH`);
        res.end();
    } catch (e) {
        res.status(400).send('Invalid status value');
    }
}

module.exports = { controllerGetRate };