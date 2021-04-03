const userRouter = require('express').Router();

const { logOut, deleteBookingController } = require('../controller');

userRouter.post('/logout', logOut);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
