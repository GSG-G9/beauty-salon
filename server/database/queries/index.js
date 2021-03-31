const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const { getProfile } = require('./user');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  getProfile,
};
