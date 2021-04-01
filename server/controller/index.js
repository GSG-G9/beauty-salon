const {
  signUp, signin, servicesHandler, getBookingsByDate,
} = require('./common');
const { logOut, updateUserController } = require('./user');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  logOut,
  updateUserController,
};
