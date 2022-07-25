const { getRate } = require("./handlers.rate.js");

const controllerGetRate = async (req, res) => {
    const rate = await getRate();
    console.log(rate);
    res.status(rate.code).send(`Bitcoin price: ${rate.data.bitcoin.uah} UAH`);
    res.end();
}

module.exports = { controllerGetRate };