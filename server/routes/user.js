const userRouter = require('express').Router();

const { logOut, getBookingsForGivenUser } = require('../controller');

userRouter.post('/logout', logOut);
userRouter.get('/booking', getBookingsForGivenUser);

module.exports = userRouter;
