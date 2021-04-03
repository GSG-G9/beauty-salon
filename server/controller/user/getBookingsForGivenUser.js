const { boomify } = require('../../utilis/index');
const { getBookingsByUserId } = require('../../database/queries');

const getBookingsForGivenUser = async (req, res, next) => {
  const { userId } = req;

  const { rows, rowCount } = await getBookingsByUserId(userId);

  if (rowCount === 0) {
    next(boomify(400, "you don't have appointments!"));
  } else {
    res.json({
      statusCode: 200,
      data: rows,
    });
  }
};

module.exports = getBookingsForGivenUser;
