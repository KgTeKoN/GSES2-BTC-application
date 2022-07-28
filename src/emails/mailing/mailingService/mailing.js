const { sendpulseInit } = require('./init.service.js');
const { API_USER_ID: id, API_SECRET: secret, TOKEN_STORAGE: storage } = require('../../../../config.js')
const { addEmails } = require("./addEmails.service.js");
const { emailList } = require("../../emailList");
const sendpulse = require("sendpulse-api");
const { answerGetter } = require('./answerGetter.js');

const mailing = async (arr) => {
    await sendpulseInit(id, secret, storage);
    await addEmails(arr);
}

const startMailing = async () => {
    const data = await emailList();
    await mailing(data);
}

startMailing();

sendpulse.listSenders(answerGetter);
let email = {
    "text" : `Курс біткоіна змінився ${id} грн`,
    "subject" : "Тест3",
    "from" : {
        "email" : "genesis.education.api@gmail.com"
    },
    "to" : [
        {
            "email" : "hasherama8@gmail.com"
        },
    ]
};
sendpulse.smtpSendMail(answerGetter,email);