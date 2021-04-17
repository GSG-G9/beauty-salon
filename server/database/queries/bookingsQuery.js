const connection = require('../config/connection');

const bookingsQuery = (date) => {
  const sql = {
    text:
      'SELECT services.name AS service ,appointments.appointment_date,appointments.appointment_time FROM appointments INNER JOIN services on appointments.service_id = services.id  WHERE appointment_date = $1',
    values: [date],
  };
  return connection.query(sql);
};

module.exports = bookingsQuery;
