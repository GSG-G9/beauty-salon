const connection = require('../config/connection');

const updateUserQuery = ({
  firstName, lastName, mobile, address, userId,
}) => {
  const sql = {
    text: 'UPDATE users SET first_name = $1,last_name = $2, mobile =$3, address = $4 WHERE id = $5  RETURNING *;',
    values: [firstName, lastName, mobile, address, userId],
  };
  return connection.query(sql);
};

module.exports = updateUserQuery;
