import { getRate } from "../handlers/get.js"

const controllerGetRate = async (req, res) => {
    const rate = await getRate();
    res.send(rate);
    res.end();
}

export { controllerGetRate };