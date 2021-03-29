const express = require('express');

const { contactusHandler } = require('../controller');

const router = express.Router();

router.get('/hi', (req, res) => {
  res.send('hi');
});
router.post('/contact-us', contactusHandler);

module.exports = router;
