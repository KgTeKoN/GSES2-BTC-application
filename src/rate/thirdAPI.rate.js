const CoinGecko = require('coingecko-api');
const {cryptoCurrencies} = require('../../config.js');
const {currencies} = require('../../config.js');

const CoinGeckoClient = new CoinGecko();

const readRate = async () => {
	try {
		const data = await CoinGeckoClient.simple.price({
			ids: [cryptoCurrencies],
			vs_currencies: [currencies],
		});
		return {status: data.code, message: `Актуальний курс біткоіна: ${data.data.bitcoin.uah} UAH`};
	} catch (e) {
		return {status: 400, message: 'Invalid status value'};
	}
};

module.exports = {readRate};
