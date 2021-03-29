const express = require('express');

const router = express.Router();

const { logOut } = require('../controller');

router.post('/logout', logOut);

module.exports = router;
