const readFile = require('./read.file.js');

const validateExistEmail = async (email) => {
    const emailListString = await readFile;
    const emailListInArray = emailListString.split(' ');
    console.log(emailListInArray);
}

validateExistEmail('hasherama8@gmail.com')

module.exports = { validateExistEmail };