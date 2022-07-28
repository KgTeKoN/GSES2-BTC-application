const sendpulse = require("sendpulse-api");

const API_USER_ID = "01796174a35fafb651ea2061d5e34213";
const API_SECRET = "763863fe533d8928b9187c2e4280d293";
const TOKEN_STORAGE = "../../../../tmp/";

const sendpulseInit = async () => {
    await sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE)
};

module.exports = { sendpulseInit }