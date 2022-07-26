const { readFile } = require('./read.file.js');

const validateExistEmail = async (email) => {
    const data = await readFile();
    const emailList = data.split(' ');
    return emailList.includes(email);
}

module.exports = { validateExistEmail };