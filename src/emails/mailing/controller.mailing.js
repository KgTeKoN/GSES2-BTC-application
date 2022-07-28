const { handlerMailing } = require('./handler.mailing.js');

const controllerMailing = async (req, res, next) => {
    const result = await handlerMailing();
    res.status(result.status).send(result.message);
    res.end();
}

module.exports = { controllerMailing }