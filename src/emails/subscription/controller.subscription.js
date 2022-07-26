const handlersSubscribe = require('./handlers.subscription.js');

const controllerSubscribe = (req, res, next) => {
    const { email } = req.body;
    let subscriber = handlersSubscribe(email)
    res.status(subscriber.status).send(subscriber.info);
    res.end();
}

module.exports = { controllerSubscribe }