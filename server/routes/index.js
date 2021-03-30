const router = require('express').Router();

router.get('/hi', (req, res) => {
  res.send('hi');
});
const commonRouter = require('./common');

router.use(commonRouter);

module.exports = router;
