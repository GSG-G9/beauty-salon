const joi = require('joi');

const signupValidation = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
module.exports = signupValidation;
