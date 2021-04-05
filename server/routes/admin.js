const adminRouter = require('express').Router();

const { deleteBooking } = require('../controller');

adminRouter.delete('/admin/booking/:bookingId', deleteBooking);

module.exports = adminRouter;
