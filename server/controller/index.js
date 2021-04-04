const {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  getAllBlogs,
  contactusHandler,
} = require('./common');

const { logOut, deleteBookingController, addNewBook } = require('./user');

module.exports = {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  addNewBook,
  getAllBlogs,
  logOut,
  deleteBookingController,
  contactusHandler,
};
