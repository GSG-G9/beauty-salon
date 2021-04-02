const router = require('express').Router();
const { isAuth, isAdmin } = require('../middleware');

const commonRouter = require('./common');
const userRouter = require('./user');
const adminRouter = require('./admin');

router.use(commonRouter);
router.use(isAuth);
router.use(userRouter);
router.use(isAdmin);
router.use(adminRouter);

module.exports = router;
