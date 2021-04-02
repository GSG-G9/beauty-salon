const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const getUserData = require('./getUserData');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  getUserData,
};
