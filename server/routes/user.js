const router = require('express').Router();

const { addNewBook } = require('../controller');

router.post('/booking', addNewBook);

module.exports = router;
