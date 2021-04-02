const userRouter = require('express').Router();

const { logOut } = require('../controller');
const { userData } = require('../controller/user');

userRouter.get('/isAuth', userData);
userRouter.post('/logout', logOut);

module.exports = userRouter;
