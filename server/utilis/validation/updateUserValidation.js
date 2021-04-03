const joi = require('joi');

const updateUserValidation = joi.object({
  firstName: joi.string().alphanum().min(3),
  lastName: joi.string().alphanum().min(3),
  mobile: joi.number().min(9),
  address: joi.string(),
  country: joi.string(),
  city: joi.string(),
  altMobile: joi.number().min(9),
});

module.exports = updateUserValidation;
