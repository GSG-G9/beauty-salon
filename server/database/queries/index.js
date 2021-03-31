const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const deleteBooking = require('./deleteBook');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  deleteBooking,
};
