const Joi = require('joi');

const addBookingValidation = Joi.object({
  userId: Joi.number().required(),
  serviceId: Joi.number().required(),
  appointmentDate: Joi.string().required(),
  // eslint-disable-next-line no-useless-escape
  appointmentTime: Joi.string().required(),
});

module.exports = addBookingValidation;
