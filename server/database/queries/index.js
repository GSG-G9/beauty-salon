const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const deleteBookingByAdmin = require('./deleteBookingByAdmin');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  deleteBookingByAdmin,
};
