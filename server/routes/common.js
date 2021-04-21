const commonRouter = require('express').Router();

const { signinValidation } = require('../utilis/validation');
const {
  signUp,
  signin,
  servicesHandler,
  getBookingsByDate,
  contactusHandler,
  getAllBlogs,
  getBlogByBlogId,
} = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/contact-us', contactusHandler);
commonRouter.post('/signin', signinValidation, signin);
commonRouter.post('/signup', signUp);
commonRouter.get('/bookings/:date', getBookingsByDate);
commonRouter.get('/blog', getAllBlogs);
commonRouter.get('/blog/:id', getBlogByBlogId);

module.exports = commonRouter;
