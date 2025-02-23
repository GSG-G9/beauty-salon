const getOneBlog = require('../../database/queries');
// const boomify = require('../../utilis/boomify');

const getBlogByBlogId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(getOneBlog(1));
    // const { rows } = await getOneBlog(id);
    // if (!rows) {
    //   throw boomify(404, 'Blog does not exist');
    // }
    res.json({
      status: 200,
      data: 'rows',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getBlogByBlogId;
