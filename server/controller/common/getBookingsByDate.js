const { bookingsQuery } = require('../../database/queries');

const getBookingsByDate = async (req, res, next) => {
  try {
    const { date } = req.params;
    const { rows } = await bookingsQuery(date);
    return res.status(200).json({
      statusCode: 200,
      message: 'success',
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getBookingsByDate;
