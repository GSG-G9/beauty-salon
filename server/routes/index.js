const router = require('express').Router();
const { isAuth, isAdmin } = require('../middleware');

const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(isAuth);
router.use(userRouter);
router.use(isAdmin);

module.exports = router;
