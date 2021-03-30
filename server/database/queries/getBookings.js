const connection = require('../config/connection');

const getBookings = (date) => {
  const sql = {
    text:
      'SELECT services.name AS service ,stylists.name AS stylist ,appointments.appointment_date,appointments.appointment_time FROM appointments INNER JOIN services on appointments.service_id = services.id INNER JOIN stylists on appointments.stylist_id = stylists.id WHERE appointment_date = $1',
    values: [date],
  };
  return connection.query(sql);
};
module.exports = getBookings;
