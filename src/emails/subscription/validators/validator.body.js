const {signupSchema} = require('./validate.schema.js');

const bodyValidator = async (req, res, next) => {
	try {
		await signupSchema.validateAsync(req.body);
		return next();
	} catch (e) {
		const result = e.details[0].message;
		res.status(400).send(`Це не e-mail \n ${result}`);
		res.end();
	}
};

module.exports = {bodyValidator};
