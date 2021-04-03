const { getProfile } = require('../../database/queries');
const { boomify } = require('../../utilis');

const getUserProfile = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await getProfile(userId);
    if (rows.length === 0) {
      throw boomify(404, 'User does not exist');
    }
    res.json({
      status: 200,
      data: rows[0],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserProfile;
