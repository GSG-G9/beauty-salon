const addNewBook = require('./addBook');
const logOut = require('./logout');
const userData = require('./userData');
const getUserProfile = require('./getProfile');
const deleteBookingController = require('./deleteBooking');

module.exports = {
  logOut,
  getUserProfile,
  addNewBook,
  deleteBookingController,
  userData,
};
