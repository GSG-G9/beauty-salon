const { addBook, checkAvailability } = require('../../database/queries');
const boomify = require('../../utilis/boomify');
const addBookingValidation = require('../../utilis/validation/addBookingValidation');

const addNewBook = async (req, res, next) => {
  try {
    await addBookingValidation.validateAsync(req.body, {
      abortEarly: false,
    });
    const {
      userId,
      serviceId,
      appointmentDate,
      appointmentTime,
    } = req.body;
    const { rows } = await checkAvailability(appointmentDate, appointmentTime);
    if (rows.length === 0) {
      await addBook({
        userId,
        serviceId,
        appointmentDate,
        appointmentTime,
      });
      res.json({
        status: 201,
        message: 'appointment has been added successfully',
      });
    } else {
      next(boomify(400, 'chosen time in not available'));
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(boomify(400, err.details[0].message));
    }
    next(err);
  }
};

module.exports = addNewBook;
