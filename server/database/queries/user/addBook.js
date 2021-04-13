const connection = require('../../config/connection');

const addBook = ({
  userId, serviceId, appointmentDate, appointmentTime,
}) => {
  const sql = {
    text:
      'INSERT INTO appointments (user_id, service_id, appointment_date, appointment_time) VALUES ($1,$2,$3,$4) RETURNING appointment_date, appointment_time;',
    values: [userId, serviceId, appointmentDate, appointmentTime],
  };
  return connection.query(sql);
};
module.exports = addBook;
