const userRouter = require('express').Router();

const { logOut } = require('../controller');
const { updateUserController } = require('../controller');

userRouter.post('/logout', logOut);
userRouter.patch('/profile', updateUserController);

module.exports = userRouter;
