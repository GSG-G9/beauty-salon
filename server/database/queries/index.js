const { addBook, checkAvailability } = require('./user');
const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');

module.exports = {
  getServices,
  signupUser,
  checkUserByEmail,
  bookingsQuery,
  addBook,
  checkAvailability,
};
