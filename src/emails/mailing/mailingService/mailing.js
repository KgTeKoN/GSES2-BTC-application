const {sendpulseInit} = require('./init.service.js');
const {API_USER_ID: id, API_SECRET: secret, TOKEN_STORAGE: storage} = require('../../../../config.js');
const {addEmailsPromise} = require('./addEmails.service.js');
const {sendEmailsPromise} = require('./sendEmails.js');

const mailing = async (arr, rate) => {
	await sendpulseInit(id, secret, storage);
	await addEmailsPromise(arr);
	const isError = await sendEmailsPromise(rate);
	if (!isError.id) {
		return isError.message;
	}
};

module.exports = {mailing};
