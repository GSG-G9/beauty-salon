const { verifyToken, boomify } = require('../utilis/index');

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const decodedUserData = await verifyToken(token);
    const { id, role } = decodedUserData;
    if (!decodedUserData) {
      throw boomify(401, "you're unauthorized");
    } else {
      req.userId = id;
      req.role = role;
      next();
    }
  } catch (err) {
    next(err);
  }
};
module.exports = isAuth;
