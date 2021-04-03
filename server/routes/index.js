const router = require('express').Router();

const commonRouter = require('./common');
const userRouter = require('./user');
const { getAllBlogs } = require('../controller');

router.use(commonRouter);
router.use(userRouter);

router.get('/blog', getAllBlogs);

module.exports = router;
