const getServices = require('./services');
const signupUser = require('./signup');
const checkEmail = require('./checkEmail');
const bookingsQuery = require('./bookingsQuery');

module.exports = {
  getServices,
  signupUser,
  checkEmail,
  bookingsQuery,
};
