const userRouter = require('express').Router();

const {
  logOut,
  deleteBookingController,
  addNewBook,
  userData,
  getUserProfile,
  getBookingsForGivenUser,
  updateUserController,
} = require('../controller');

userRouter.get('/isAuth', userData);
userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);
userRouter.patch('/profile', updateUserController);
userRouter.get('/booking', getBookingsForGivenUser);
userRouter.get('/profile', getUserProfile);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
