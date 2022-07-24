const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

let readRate = async() => {
    let data = await CoinGeckoClient.simple.price({
        ids: ['bitcoin'],
        vs_currencies: ['usd'],
    });
    return data;
};

module.exports { readRate };