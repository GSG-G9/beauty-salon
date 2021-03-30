const express = require('express');

const router = express.Router();

const commonRouter = require('./common');

router.use(commonRouter);

module.exports = router;
