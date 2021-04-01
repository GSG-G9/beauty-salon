const { boomify } = require('../utilis');

const isAdmin = (req, res, next) => {
  if (req.role !== 'admin') {
    next(boomify(401, "you're unautherized"));
  } else {
    next();
  }
};
module.exports = isAdmin;
