const joi = require('joi');

const updateUserValidation = joi.object({
  firstName: joi.string().alphanum().min(3).required(),
  lastName: joi.string().alphanum().min(3).required(),
  mobile: joi.number().min(9),
  address: joi.string(),
  userId: joi.number(),
});

module.exports = updateUserValidation;
