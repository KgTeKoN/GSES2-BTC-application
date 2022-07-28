const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const readRate = async () => {
	try {
		const data = await CoinGeckoClient.simple.price({
			ids: ['bitcoin'],
			vs_currencies: ['uah'],
		});
		return {status: data.code, message: `Актуальний курс біткоіна: ${data.data.bitcoin.uah} UAH`};
	} catch (e) {
		return {status: 400, message: 'Invalid status value'};
	}
};

module.exports = {readRate};
