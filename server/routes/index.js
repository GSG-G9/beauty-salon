const express = require('express');

const router = express.Router();

const { getAllBlogs } = require('../controller');

router.get('/', (req, res) => {
  res.send('hi');
});

router.get('/blog', getAllBlogs);

module.exports = router;
