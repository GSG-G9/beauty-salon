const router = require('express').Router();

router.get('/hi', (req, res) => {
  res.send('hi');
});
const commonRouter = require('./common');
const userRouter = require('./user');

router.use(commonRouter);
router.use(userRouter);

module.exports = router;
