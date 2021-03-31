const {
  signUp, signin, servicesHandler, getBookingsByDate,
} = require('./common');
const { logOut, deleteBookingController } = require('./user');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  logOut,
  deleteBookingController,
};
