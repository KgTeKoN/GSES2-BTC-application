const {readFile} = require('./subscription/read.file.js');

const emailList = async () => {
	const data = await readFile();
	return data.split(' ');
};

module.exports = {emailList};
