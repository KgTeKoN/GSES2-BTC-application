const { sendpulseInit } = require('./init.service.js');
const { API_USER_ID: id, API_SECRET: secret, TOKEN_STORAGE: storage } = require('../../../../config.js')
const { addEmails } = require("./addEmails.service.js");
const { emailList } = require("../../emailList");

const mailing = async (arr) => {
    await sendpulseInit(id, secret, storage);
    await addEmails(arr);
}

const startMailing = async () => {
    const data = await emailList();
    await mailing(data);
}

startMailing();