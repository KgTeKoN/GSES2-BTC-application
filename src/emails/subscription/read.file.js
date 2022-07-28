const fs = require('fs').promises;

const readFile = async () => {
	const json = await fs.readFile('./src/emails/emailList.json');
	return json.toString();
};

module.exports = {readFile};
