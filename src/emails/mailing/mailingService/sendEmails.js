const sendpulse = require("sendpulse-api");
const { answerGetter } = require("./callBackFromMailingThirdAPI.js");
const { SENDER_NAME, SENDER_EMAIL } = require("../../../../config.js");

const sendEmails = async (rate) => {
    sendpulse.createCampaign(answerGetter, `${SENDER_NAME}`, `${SENDER_EMAIL}`,
        'Зміна курсу біткоіна', `<h1>Курс біткоіна змінився. Зараз він коштує ${rate} гривень </h1>`, 399626);
};

module.exports = { sendEmails }