const { validateExistEmail } = require('./validator.subscriber.js')

const handlersSubscriber = async (email) => {
    const isExist = validateExistEmail(email);
    if (isExist) { return { status: 409, info: 'E-mail вже є в базі даних'} }ж
    return { status: 200, info: 'E-mail додано'}
}

module.exports = { handlersSubscriber }