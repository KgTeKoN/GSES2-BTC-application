const {readFile} = require('./subscription/parser.subscribers.js');

const emailList = async () => {
	const data = await readFile();
	return data.split(' ');
};

module.exports = {emailList};
