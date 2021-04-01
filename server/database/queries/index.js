const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const updateUserQuery = require('./updateUserQuery');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  updateUserQuery,
};
