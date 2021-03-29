const express = require('express');

const { signinValidation } = require('../middleware/validation');
const { signin } = require('../controller');

const router = express.Router();

router.post('/signin', signinValidation, signin);

router.get('/hi', (req, res) => {
  res.send('hi');
});

module.exports = router;
