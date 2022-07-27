const { signupSchema } = require('./validate.schema.js');

const bodyValidator = async (req, res, next) => {
    const { error } = await signupSchema.validateAsync(req.body);

    if (error) {
        return res.send('Це не e-mail');
    }
}

module.exports = { bodyValidator }