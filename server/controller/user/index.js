const addNewBook = require('./addBook');
const logOut = require('./logout');
const userData = require('./userData');
const deleteBookingController = require('./deleteBooking');

module.exports = {
  logOut,
  addNewBook,
  deleteBookingController,
  userData,
};
