const connection = require('../../config/connection');

const checkAvailability = (appointmentDate, appointmentTime) => {
  const sql = {
    text:
      'SELECT appointment_date, appointment_time FROM appointments WHERE appointment_date = $1 AND appointment_time =$2;',
    values: [appointmentDate, appointmentTime],
  };
  return connection.query(sql);
};

module.exports = checkAvailability;
