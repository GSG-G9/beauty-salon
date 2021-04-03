const getAllBlogs = require('./getBlogs');
const servicesHandler = require('./services');
const contactusHandler = require('./contactus');
const signin = require('./signin');
const signUp = require('./signUp');
const getBookingsByDate = require('./getBookingsByDate');

module.exports = {
  servicesHandler,
  contactusHandler,
  signUp,
  signin,
  getBookingsByDate,
  getAllBlogs
};
