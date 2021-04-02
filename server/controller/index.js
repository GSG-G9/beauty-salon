const {
  signUp, signin, servicesHandler, getBookingsByDate,
} = require('./common');
const { logOut } = require('./user');
const { deleteBooking } = require('./admin');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  logOut,
  deleteBooking,
};
