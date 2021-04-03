const {
  signUp, signin, servicesHandler, getBookingsByDate,
} = require('./common');
const { logOut, getBookingsForGivenUser } = require('./user');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  logOut,
  getBookingsForGivenUser,
};
