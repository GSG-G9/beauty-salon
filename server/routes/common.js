const commonRouter = require('express').Router();

const { servicesHandler, contactusHandler, signUp } = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/contact-us', contactusHandler);
commonRouter.post('/signup', signUp);

module.exports = commonRouter;
