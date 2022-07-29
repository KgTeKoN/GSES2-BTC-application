const sendpulse = require('sendpulse-api');
const {SENDER_NAME, SENDER_EMAIL, BOOK_ID} = require('../../../../config.js');

const sendEmailsPromise = async rate => {
	const rateMessage = rate;
	return new Promise((resolve, reject) => {
		sendpulse.createCampaign((data, err) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		}, `${SENDER_NAME}`, `${SENDER_EMAIL}`, 'Зміна курсу біткоіна', `<h1>Курс біткоіна змінився. ${rateMessage} </h1>`, BOOK_ID);
	});
};

module.exports = {sendEmailsPromise};

