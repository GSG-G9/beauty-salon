const router = require('express').Router();
const { isAuth } = require('../middleware/index');

const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(isAuth);
router.use(userRouter);

module.exports = router;
