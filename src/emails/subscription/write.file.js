const fs = require('fs').promises;

const writeFile = async (email) => {
    await fs.appendFile("../emailList.json",email + ' ');
    return true;
}

module.exports = { writeFile }