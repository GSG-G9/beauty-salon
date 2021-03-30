const { servicesHandler, signUp, getBookingsByDate } = require('./common');
const { logOut } = require('./user');

module.exports = {
  signUp,
  getBookingsByDate,
  servicesHandler,
  logOut,
};
