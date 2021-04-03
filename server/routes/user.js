const userRouter = require('express').Router();

const { logOut, getBookingsForGivenUser } = require('../controller');

userRouter.post('/logout', logOut);
userRouter.get('/bookings', getBookingsForGivenUser);

module.exports = userRouter;
