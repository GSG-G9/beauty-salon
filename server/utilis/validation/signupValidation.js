const joi = require('joi');

const signupValidation = joi.object({
  firstName: joi.string().alphanum().min(3).required(),
  lastName: joi.string().alphanum().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
module.exports = signupValidation;
