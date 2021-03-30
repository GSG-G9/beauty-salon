const commonRouter = require('express').Router();

const { signUp } = require('../controller');

commonRouter.post('/signup', signUp);

module.exports = commonRouter;
