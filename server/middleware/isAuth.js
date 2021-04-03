const { verifyToken, boomify } = require('../utilis/index');

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const decodedUserData = await verifyToken(token);
    const { userId, role } = decodedUserData;
    if (!decodedUserData) {
      throw boomify(401, "you're unauthorized");
    } else {
      req.userId = userId;
      req.role = role;
      next();
    }
  } catch (err) {
    if (err.message === 'jwt must be provided') {
      next(boomify(401, "you're unauthorized"));
    } else {
      next(err);
    }
  }
};

module.exports = isAuth;
