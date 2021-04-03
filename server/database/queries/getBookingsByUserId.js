const connection = require('../config/connection');

const getBookingsByUserId = (userId) => connection.query({
  text: 'SELECT appointments.appointment_date, appointments.appointment_time, services.service_name, stylists.stylist_name FROM appointments inner join services on appointments.service_id = services.id inner join stylists on appointments.stylist_id = stylists.id where user_id=$1',
  values: [userId],
});

module.exports = getBookingsByUserId;
