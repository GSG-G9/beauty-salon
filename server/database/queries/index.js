const { addBook, checkAvailability } = require('./user');
const getBlogs = require('./getBlogs');
const postMessage = require('./contactus');
const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const getUserData = require('./getUserData');
const deleteBooking = require('./deleteBook');

module.exports = {
  getServices,
  signupUser,
  postMessage,
  checkUserByEmail,
  bookingsQuery,
  getUserData,
  addBook,
  checkAvailability,
  deleteBooking,
  getBlogs,
};
