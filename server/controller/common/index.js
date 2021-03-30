const servicesHandler = require('./services');
const signUp = require('./signUp');
const getBookingsByDate = require('./getBookingsByDate');

module.exports = {
  signUp,
  getBookingsByDate,
  servicesHandler,
};
