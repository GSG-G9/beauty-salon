const commonRouter = require('express').Router();
const { signinValidation } = require('../utilis/validation');
const {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
} = require('../controller');

commonRouter.post('/signin', signinValidation, signin);
commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);
commonRouter.get('/services', servicesHandler);

module.exports = commonRouter;
