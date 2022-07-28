const { handlerMailing } = require('./handler.mailing.js');
const { getRate: rate } = require('../../rate/handlers.rate.js')

const controllerMailing = async (req, res, next) => {
    const result = await handlerMailing();
    res.send(rate.message);
    res.status(result.status).send(result.message);
    res.end();
}

module.exports = { controllerMailing }