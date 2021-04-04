const userRouter = require('express').Router();

const {
  logOut,
  deleteBookingController,
  addNewBook,
} = require('../controller');
const { userData } = require('../controller/user');

userRouter.get('/isAuth', userData);
userRouter.post('/booking', addNewBook);
userRouter.post('/logout', logOut);
userRouter.delete('/booking/:bookingId', deleteBookingController);

module.exports = userRouter;
