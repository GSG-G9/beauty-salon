const { getBlogs } = require('../../database/queries');
const boomify = require('../../utilis/boomify');

const getAllBlogs = async (req, res, next) => {
  try {
    const { rows } = await getBlogs();
    if (!rows) {
      throw boomify(500, 'Internal Server Error');
    }
    res.json({ status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllBlogs;
