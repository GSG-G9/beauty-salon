const router = require('express').Router();

const { isAuth, isAdmin } = require('../middleware');
const { clientError, serverError } = require('../controller/error');

const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(isAuth);
router.use(userRouter);
router.use(isAdmin);

router.use(clientError);
router.use(serverError);

module.exports = router;
