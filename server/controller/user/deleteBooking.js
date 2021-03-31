const deleteBookingController = async (req, res, next) => {
  try {
    res.json({
      status: 200,
      message: 'hi from delete booking ',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteBookingController;
