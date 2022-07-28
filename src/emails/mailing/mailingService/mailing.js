const { sendpulseInit } = require('./init.service.js');
const { API_USER_ID: id, API_SECRET: secret, TOKEN_STORAGE: storage } = require('../../../../config.js')
const { addEmails } = require("./addEmails.service.js");
const { sendEmails } = require("./sendEmails.js");


const mailing = async (arr, rate) => {
    await sendpulseInit(id, secret, storage);
    await addEmails(arr);
    await sendEmails(rate);
}

module.exports = { mailing }