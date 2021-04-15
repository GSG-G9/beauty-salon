const { getBookingsByUserId } = require('../../database/queries');

const getBookingsForGivenUser = async (req, res, next) => {
  const { userId } = req;

  const { rows, rowCount } = await getBookingsByUserId(userId);
  if (rowCount === 0) {
    res.json({
      statusCode: 200,
      message: "you don't have appointments!",
      data: [],
    });
  } else {
    res.json({
      statusCode: 200,
      data: rows,
    });
  }
};

module.exports = getBookingsForGivenUser;
