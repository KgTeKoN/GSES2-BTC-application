const { mailing } = require('./mailingService/mailing.js');
const { emailList } = require("../emailList.js");
const {readRate} = require("../../rate/thirdAPI.rate");

const handlerMailing = async () => {
    try {
        const rate = readRate();
        const arr = await emailList();
        await mailing(arr, rate);
        return {status: 200, message: 'E-mailʼи відправлено'}
    } catch (e) {
        return {status: 400, massage: e.message}
    }
}

module.exports = { handlerMailing }
