const Joi = require('joi');

const contactusValidation = Joi.object({
  message: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  mobile: Joi.number().required(),
});

module.exports = contactusValidation;
