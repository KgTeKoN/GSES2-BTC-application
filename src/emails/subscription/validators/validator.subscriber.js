const { emailList } = require('../../emailList.js');

const validateExistEmail = async (email) => {
    return emailList().includes(email);
}

module.exports = { validateExistEmail };