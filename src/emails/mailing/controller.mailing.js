const { handlersMailing } = require('');
const { getRate } = require("../../rate/handlers.rate");

const controllerMailing = async (req, res, next) => {
    const rate = await getRate();
    const errorEmails = await handlersMailing();
    res.send(rate.message);
    res.status(errorEmails.status).send(errorEmails.message);
}

module.exports = { controllerMailing }