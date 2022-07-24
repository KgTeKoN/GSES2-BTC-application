const { getRate } = require("../handlers/get.js");

const controllerGetRate = async (req, res) => {
    const rate = await getRate();
    res.send(`${rate}`).sendStatus(200);
    res.end();
}

module.exports = { controllerGetRate };