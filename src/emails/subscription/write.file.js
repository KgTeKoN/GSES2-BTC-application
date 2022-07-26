const fs = require('fs').promises;

const writeFile = async (email) => {
    await fs.writeFile("../emailList.json", JSON.stringify(email + ' '));
    return true;
}

writeFile('hasherama8@gmail jhkjhjkjk jkhkjhk jkhjkhjk hghj');

module.exports = { writeFile }