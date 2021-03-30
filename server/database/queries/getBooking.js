const connection = require('../config/connection');

const getBooking = (date) => {
  const sql = {
    text:
      "SELECT service_id,stylist_id,appointment_date,appointment_time  FROM appointments INNER JOIN users on appointments.user_id = users.id WHERE to_char(appointment_date,'YYYY-MM-DD') = $1",
    values: [date],
  };
  return connection.query(sql);
};
module.exports = getBooking;
