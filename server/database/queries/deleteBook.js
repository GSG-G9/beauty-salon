const connection = require('../config/connection');

const deleteBooking = ({ userId, bookingId }) => {
  const sql = {
    text: 'DELETE FROM appointments WHERE id = $2 and user_id =$1 returning * ;',
    values: [userId, bookingId],
  };
  return connection.query(sql);
};

module.exports = deleteBooking;
