const commonRouter = require('express').Router();

const { servicesHandler, signUp } = require('../controller');

commonRouter.get('/services', servicesHandler);
commonRouter.post('/signup', signUp);

module.exports = commonRouter;
