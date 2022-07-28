const sendpulse = require("sendpulse-api");
const { answerGetter } = require("./callBackFromMailingThirdAPI.js");
const { SENDER_NAME, SENDER_EMAIL, BOOK_ID } = require("../../../../config.js");

const sendEmails = async (rate) => {
    sendpulse.createCampaign(answerGetter, `${SENDER_NAME}`, `${SENDER_EMAIL}`,
        'Зміна курсу біткоіна', `<h1>Курс біткоіна змінився. ${rate.message} </h1>`, BOOK_ID);
};

module.exports = { sendEmails }