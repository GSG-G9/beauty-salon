const userRouter = require('express').Router();

const { logOut } = require('../controller');

userRouter.post('/logout', logOut);

module.exports = userRouter;
