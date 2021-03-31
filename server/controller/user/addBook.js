const { addBook, checkAvailability } = require('../../database/queries');

const boomify = require('../../utilis/boomify');

const addNewBook = async (req, res, next) => {
  try {
    const {
      userId,
      serviceId,
      stylistId,
      appoinmtmentDate,
      appointmentTime,
    } = req.body;
    const { rows } = await checkAvailability(appoinmtmentDate, appointmentTime);
    if (rows.length === 0) {
      await addBook({
        userId,
        serviceId,
        stylistId,
        appoinmtmentDate,
        appointmentTime,
      });
      res.json({
        status: 201,
        message: 'appointment has been added successfully',
      });
    } else {
      res.json(boomify(400, 'choosen time in not available'));
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = addNewBook;
