const postMessage = require('./contactus');
const getServices = require('./services');
const signupUser = require('./signup');
const checkEmail = require('./checkEmail');

module.exports = {
  getServices,
  signupUser,
  checkEmail,
  postMessage,
};
