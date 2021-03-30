const { boomify } = require('../../utilis/index');

const clientError = (req, res) => {
  const error = boomify(404, 'page not found');
  res.status(404).json(error);
};

const serverError = (err, req, res, next) => {
  const error = err.statusCode ? err : boomify(500, 'internal server error');
  res.status(err.statusCode || 500).json(error);
};

module.exports = { clientError, serverError };
