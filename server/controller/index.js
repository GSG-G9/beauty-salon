const {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  getAllBlogs,
  contactusHandler,
} = require('./common');

const {
  getUserProfile,
  logOut,
  deleteBookingController,
  addNewBook,
} = require('./user');

module.exports = {
  signUp,
  signin,
  getUserProfile,
  servicesHandler,
  getBookingsByDate,
  addNewBook,
  getAllBlogs,
  logOut,
  deleteBookingController,
  contactusHandler,
};
