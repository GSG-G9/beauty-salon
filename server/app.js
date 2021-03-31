require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const { join } = require('path');

const router = require('./routes/index');
const { clientError, serverError } = require('./controller/error');

const app = express();

app.set('PORT', process.env.PORT || 5000);

const middlewares = [
  express.json(),
  cookieParser(),
  compression(),
  express.urlencoded({ extended: false }),
];

app.use(middlewares);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.all('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

module.exports = app;
