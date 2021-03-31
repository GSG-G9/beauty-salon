const userRouter = require('express').Router();

const { getUserProfile, logOut } = require('../controller');

userRouter.post('/logout', logOut);
userRouter.get('/profile', getUserProfile);
module.exports = userRouter;
