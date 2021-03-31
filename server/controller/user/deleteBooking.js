const deleteBooking = require('../../database/queries');

const deleteBookingController = async (req, res, next) => {
  const { bookingId } = req.params;
  const {id } = req;
  console.log(11,bookingId,222,id);
  try {
    const { rows } = await deleteBooking({ userId, bookingId });
    console.log(33, rows);
    res.json({
      status: 200,
      message: 'hi from delete booking ',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteBookingController;
