const userRouter = require('express').Router();

const {
  logOut,
  deleteBookingController,
  addNewBook,
  userData,
  getUserProfile,
} = require('../controller');

userRouter.get('/isAuth', userData);
userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);
userRouter.get('/profile', getUserProfile);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
