const connection = require('../config/connection');

const getBookingsByUserId = (userId) => connection.query({
  text: 'SELECT appointments.id,appointments.appointment_date, appointments.appointment_time, services.name AS service_name FROM appointments inner join services on appointments.service_id = services.id where user_id=$1',
  values: [userId],
});

module.exports = getBookingsByUserId;
