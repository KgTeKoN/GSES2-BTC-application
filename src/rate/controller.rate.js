const {getRate} = require('./handlers.rate.js');

const controllerGetRate = async (req, res) => {
	const rate = await getRate();
	res.status(rate.status).send(rate.message);
	res.end();
};

module.exports = {controllerGetRate};
