const { deleteBookingByAdmin } = require('../../database/queries');
const { boomify } = require('../../utilis');

const deleteBooking = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { rowCount } = await deleteBookingByAdmin(bookingId);
    if (rowCount === 0) {
      next(boomify(400, 'there\'s no appointment to delete'));
    } else {
      res.json({
        statusCode: 200,
        message: 'deleted successfully',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deleteBooking;
