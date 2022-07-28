const sendpulse = require('sendpulse-api');
const {BOOK_ID: id} = require('../../../../config.js');

const addEmailsPromise = arr => new Promise((resolve, reject) => {
	sendpulse.addEmails((data, err) => {
		if (err) {
			reject(err);
		} else {
			resolve(data);
		}
	}, id, arr);
});

module.exports = {addEmailsPromise};

