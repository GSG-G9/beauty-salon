const router = require('express').Router();

const { isAuth, isAdmin } = require('../middleware');
const { clientError, serverError } = require('../controller/error');

const commonRouter = require('./common');
const userRouter = require('./user');
const adminRouter = require('./admin');

router.use(commonRouter);
router.use(isAuth, userRouter);
router.use(isAdmin, adminRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
