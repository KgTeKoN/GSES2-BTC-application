const fs = require('fs').promises;

const recordingSubscriber = async email => {
	await fs.appendFile('./src/emails/emailList.json', email + ' ');
};

module.exports = {writeFile: recordingSubscriber};
