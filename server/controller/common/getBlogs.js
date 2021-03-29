const { getBlogs } = require('../../database/queries');
const boomify = require('../../utilis/boomify');

const getAllBlogs = async (req, res, next) => {
  try {
    const { rows } = await getBlogs();
    if (!rows) {
      throw boomify(500, 'Internal Server Error');
    }
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllBlogs;
