const { sendpulseInit } = require('./init.service.js');
const { API_USER_ID: id, API_SECRET: secret, TOKEN_STORAGE: storage } = require('../../../../config.js')

const mailing = async (arr) => {
    await sendpulseInit(id, secret, storage);

}