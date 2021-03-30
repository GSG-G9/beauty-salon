const router = require('express').Router();

const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(userRouter);

module.exports = router;
