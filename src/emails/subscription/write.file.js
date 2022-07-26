const fs = require('fs').promises;

const writeFile = async (email) => {
    await fs.appendFile("./src/emails/emailList.json",email + ' ');
    return true;
}

module.exports = { writeFile }