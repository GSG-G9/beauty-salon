const bcrypt = require('bcrypt');
const { checkUserByEmail } = require('../../database/queries');
const boomify = require('../../utilis/boomify');
const { signToken } = require('../../utilis');

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { rowCount, rows } = await checkUserByEmail({ email });
    console.log(111, password, rows[0].password);
    if (rowCount === 0) {
      throw boomify(404, 'user not found');
    }
    const match = await bcrypt.compare(password, rows[0].password);
    console.log(333, match);
    if (!match) { throw boomify(400, 'Invalid username/password'); }

    console.log(875, 'match');
    const token = await signToken({
      email: rows[0].email,
      password: rows[0].image,
      userId: rows[0].id,
    });
    console.log(4556, token);
    res.cookie('token', token).json({
      statusCode: 200,
      message: 'Login successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signin;
