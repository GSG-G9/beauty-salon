const userRouter = require('express').Router();

const {
  getUserProfile, logOut, deleteBookingController, addNewBook,
} = require('../controller');

userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);
userRouter.get('/profile', getUserProfile);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
