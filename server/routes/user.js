const userRouter = require('express').Router();

const { contactusHandler } = require('../controller');

userRouter.post('/contact-us', contactusHandler);

module.exports = userRouter;
