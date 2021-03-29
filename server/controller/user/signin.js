const { checkUserByEmail } = require('../../database/queries');
const boomify = require('../../utilis/boomify');

const signin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const { rowCount } = await checkUserByEmail({ email });
    if (rowCount === 0) {
      throw boomify(404, 'user not found');
    }

    res.status(200).json({
      status: 200,
      message: 'login successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signin;
