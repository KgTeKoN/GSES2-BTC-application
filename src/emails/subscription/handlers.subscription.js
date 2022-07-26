const { validateExistEmail } = require('./validator.subscriber.js');
const { writeFile } = require('./write.file.js')

const handlersSubscriber = async (email) => {
    const isExist = await validateExistEmail(email);
    if (isExist) { return { status: 409, info: 'E-mail вже є в базі даних'} };
    writeFile(email);
    return { status: 200, info: 'E-mail додано'}
}

module.exports = { handlersSubscriber }