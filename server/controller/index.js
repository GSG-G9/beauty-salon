const {
  servicesHandler, signUp, contactusHandler, getBookingsByDate,
} = require('./common');

const { logOut } = require('./user');

module.exports = {
  signUp,
  getBookingsByDate,
  servicesHandler,
  logOut,
  contactusHandler,
};
