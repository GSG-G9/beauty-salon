const connection = require('../config/connection');

const deleteBookingByAdmin = (bookingId) => connection.query({
  text: 'DELETE FROM appointments WHERE id=$1 returning *',
  values: [bookingId],
});
module.exports = deleteBookingByAdmin;
