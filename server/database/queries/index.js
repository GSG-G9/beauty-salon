const { addBook, checkAvailability, getProfile } = require('./user');
const getBlogs = require('./getBlogs');
const postMessage = require('./contactus');
const checkUserByEmail = require('./checkUserByEmail');
const getServices = require('./services');
const signupUser = require('./signup');
const bookingsQuery = require('./bookingsQuery');
const getBookingsByUserId = require('./getBookingsByUserId');
const deleteBookingByAdmin = require('./deleteBookingByAdmin');
const getUserData = require('./getUserData');
const deleteBooking = require('./deleteBook');

module.exports = {
  getServices,
  signupUser,
  postMessage,
  checkUserByEmail,
  bookingsQuery,
  getBookingsByUserId,
  deleteBookingByAdmin,
  getUserData,
  getProfile,
  addBook,
  checkAvailability,
  deleteBooking,
  getBlogs,
};
