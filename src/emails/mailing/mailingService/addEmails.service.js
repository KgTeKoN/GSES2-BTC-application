const sendpulse = require("sendpulse-api");
const { BOOK_ID : id } = require('../../../../config.js');
const { answerGetter } = require('./answerGetter.js');

const addEmails = async (arr) => {
    sendpulse.addEmails(answerGetter, id, arr);
}

module.exports = { addEmails }