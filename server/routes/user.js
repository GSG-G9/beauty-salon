const userRouter = require('express').Router();

const { logOut, deleteBookingController, addNewBook } = require('../controller');

userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
