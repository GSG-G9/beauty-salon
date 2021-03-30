const commonRouter = require('express').Router();
const { signinValidation } = require('../middleware/validation');
const { signUp, signin, servicesHandler } = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/signup', signUp);
commonRouter.post('/signin', signinValidation, signin);

module.exports = commonRouter;
