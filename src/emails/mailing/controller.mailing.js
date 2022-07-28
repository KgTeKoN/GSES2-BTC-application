const { handlerMailing } = require('./handler.mailing.js');
const { getRate } = require("../../rate/handlers.rate.js");

const controllerMailing = async (req, res, next) => {
    const rate = await getRate();
    const errorEmails = await handlerMailing();
    res.send(rate.message);
    res.status(errorEmails.status).send(errorEmails.message);
}

module.exports = { controllerMailing }