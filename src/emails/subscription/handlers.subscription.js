const {validateExistEmail} = require('./validators/validator.subscriber.js');
const {writeFile} = require('./recording.subscriber.js');

const handlersSubscriber = async email => {
	const isExist = await validateExistEmail(email);
	if (isExist) {
		return {status: 409, info: 'E-mail вже є в базі даних'};
	}

	await writeFile(email);
	return {status: 200, info: 'E-mail додано'};
};

module.exports = {handlersSubscriber};
