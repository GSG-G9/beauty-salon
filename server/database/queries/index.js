const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const getBookingsByUserId = require('./getBookingsByUserId');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  getBookingsByUserId,
};
