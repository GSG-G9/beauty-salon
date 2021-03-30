const commonRouter = require('express').Router();
const { signinValidation } = require('../middleware/validation');
const { signUp, signin } = require('../controller');

commonRouter.post('/signup', signUp);
commonRouter.post('/signin', signinValidation, signin);

module.exports = commonRouter;
