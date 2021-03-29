const express = require('express');

const { signin } = require('../controller');

const router = express.Router();

router.post('/signin', signin);

router.get('/hi', (req, res) => {
  res.send('hi');
});

module.exports = router;
