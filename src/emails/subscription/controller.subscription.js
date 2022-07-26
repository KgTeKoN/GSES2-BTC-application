const handlersSubscriber = require('./handlers.subscription.js');

const controllerSubscriber = (req, res, next) => {
    const { email } = req.body;
    let subscriber = handlersSubscriber(email)
    res.status(subscriber.status).send(subscriber.info);
    res.end();
}

module.exports = { controllerSubscriber }