const {handlersSubscriber} = require('./handlers.subscription.js');

const controllerSubscriber = async (req, res, next) => {
	const {email} = req.body;
	const subscriber = await handlersSubscriber(email);
	res.status(subscriber.status).send(subscriber.info);
	res.end();
};

module.exports = {controllerSubscriber};
