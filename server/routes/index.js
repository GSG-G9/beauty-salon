const express = require('express');

const { servicesHandler } = require('../controller');

const router = express.Router();

router.get('/services', servicesHandler);

module.exports = router;
