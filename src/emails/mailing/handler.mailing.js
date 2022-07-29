const {mailing} = require('./mailingService/mailing.js');
const {emailList} = require('../emailList.js');
const {readRate} = require('../../rate/thirdAPI.rate');

const handlerMailing = async () => {
	try {
		const rate = await readRate();
		const storedEmails = await emailList();
		const isError = await mailing(storedEmails, rate.message);
		if (isError) {
			return {status: 400, message: isError};
		}

		return {status: 200, message: 'E-mailʼи відправлено'};
	} catch (e) {
		return {status: 400, message: e.message};
	}
};

module.exports = {handlerMailing};
