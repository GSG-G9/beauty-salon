const userRouter = require('express').Router();

const { addNewBook, logOut } = require('../controller');

userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);

module.exports = userRouter;
