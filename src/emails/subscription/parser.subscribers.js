const fs = require('fs').promises;

const parserSubscribers = async () => {
	const json = await fs.readFile('./src/emails/emailList.json');
	return json.toString();
};

module.exports = {readFile: parserSubscribers};
