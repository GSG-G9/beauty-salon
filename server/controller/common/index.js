const signin = require('./signin');
const signUp = require('./signUp');
const servicesHandler = require('./services');
const getBookingsByDate = require('./getBookingsByDate');

module.exports = {
  signin,
  signUp,
  getBookingsByDate,
  servicesHandler,
};
