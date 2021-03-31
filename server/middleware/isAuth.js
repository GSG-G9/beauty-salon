const { verifyToken, boomify } = require('../utilis/index');

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);
    const decodedUserData = await verifyToken(token);
    const { id, role } = decodedUserData;
    if (!decodedUserData) {
      throw boomify(409, "you're unautherized");
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
