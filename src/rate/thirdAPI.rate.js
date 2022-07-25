const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

let readRate = async() =>
    await CoinGeckoClient.simple.price({
        ids: ['bitcoin'],
        vs_currencies: ['uah'],
    });

module.exports = { readRate };