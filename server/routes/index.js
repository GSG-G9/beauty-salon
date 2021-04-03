const router = require('express').Router();

const { getAllBlogs } = require('../controller');
const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(userRouter);

router.get('/blog', getAllBlogs);

module.exports = router;
