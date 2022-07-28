const sendpulse = require('sendpulse-api');

const sendpulseInit = async (id, secret, storage) => {
	sendpulse.init(id, secret, storage);
};

module.exports = {sendpulseInit};
