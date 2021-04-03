const { deleteBooking } = require('../../database/queries');
const bommify = require('../../utilis/boomify');

const deleteBookingController = async (req, res, next) => {
  const { bookingId } = req.params;
  const { userId } = req;
  try {
    const { rows } = await deleteBooking({ userId, bookingId });
    if (!rows.length) {
      throw bommify(404, 'there is no booking ');
    }
    res.json({
      status: 200,
      message: 'Deleted successfully ',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteBookingController;
