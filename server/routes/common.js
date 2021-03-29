const commonRouter = require('express').Router();

const { servicesHandler } = require('../controller');

commonRouter.get('/services', servicesHandler);

module.exports = commonRouter;
