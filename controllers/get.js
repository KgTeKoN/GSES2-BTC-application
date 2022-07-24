const { getRate } = require("../handlers/get.js");

const controllerGetRate = async (req, res) => {
    const rate = await getRate();
    res.status(200).send(`${rate}`);
    res.end();
}

module.exports = { controllerGetRate };