const commonRouter = require('express').Router();

const { signUp, getBookingsByDate } = require('../controller');

commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);

module.exports = commonRouter;
