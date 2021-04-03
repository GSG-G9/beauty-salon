const { addBook, checkAvailability } = require('../../database/queries');

const boomify = require('../../utilis/boomify');

const addNewBook = async (req, res, next) => {
  try {
    const {
      userId,
      serviceId,
      stylistId,
      appointmentDate,
      appointmentTime,
    } = req.body;
    const { rows } = await checkAvailability(appointmentDate, appointmentTime);
    if (rows.length === 0) {
      await addBook({
        userId,
        serviceId,
        stylistId,
        appointmentDate,
        appointmentTime,
      });
      return res.json({
        status: 201,
        message: 'appointment has been added successfully',
      });
    }
    return res.json(boomify(400, 'chosen time in not available'));
  } catch (error) {
    return next(error);
  }
};

module.exports = addNewBook;
