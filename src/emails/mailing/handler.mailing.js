const { mailing } = require('./mailingService/mailing.js');
const { getRate } = require("../../rate/handlers.rate.js");
const { emailList } = require("../emailList.js");

const handlerMailing = async () => {
    try {
        const rate = getRate();
        const arr = await emailList();
        await mailing(arr, rate)
        return {status: 200, massage: 'E-mailʼи відправлено'}
    } catch (e) {
        return {status: 400, massage: e.massage}
    }
}

module.exports = { handlerMailing }
