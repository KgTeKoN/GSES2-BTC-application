const { readRate } = require('./thirdAPI.rate.js')

const getRate = async () => await readRate();

module.exports = { getRate };