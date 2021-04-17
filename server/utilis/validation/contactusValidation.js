const Joi = require('joi');

const contactusValidation = Joi.object({
  message: Joi.string().max(200).required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  mobile: Joi.number().min(9).required(),
});

module.exports = contactusValidation;
