const commonRouter = require('express').Router();

const { signUp, getBookingsByDate, servicesHandler } = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);

module.exports = commonRouter;
