const {
  signUp, signin, servicesHandler, getBookingsByDate,
} = require('./common');

const { addNewBook, logOut } = require('./user');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  addNewBook,
  logOut,
};
