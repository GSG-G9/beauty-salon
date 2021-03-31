const commonRouter = require('express').Router();

const {
  servicesHandler, contactusHandler, signUp, getBookingsByDate,
} = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/contact-us', contactusHandler);
commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);

module.exports = commonRouter;
