const Joi = require('joi');

const signupSchema = Joi.object({
	email: Joi.string().email().required(),
});

module.exports = {signupSchema};
