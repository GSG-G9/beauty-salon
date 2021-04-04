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
  userData,
  getBookingsForGivenUser,
} = require('./user');

const { deleteBooking } = require('./admin');

module.exports = {
  signUp,
  signin,
  getUserProfile,
  servicesHandler,
  getBookingsByDate,
  addNewBook,
  getAllBlogs,
  logOut,
  getBookingsForGivenUser,
  deleteBooking,
  deleteBookingController,
  contactusHandler,
  userData,
};
