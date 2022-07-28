const {emailList} = require('../../emailList.js');

const validateExistEmail = async email => {
	const data = await emailList();
	return data.includes(email);
};

module.exports = {validateExistEmail};
