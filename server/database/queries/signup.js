const connection = require('../config/connection');

const signupUser = ({
  firstName, lastName, email, password,
}) => {
  const sql = {
    text:
      'INSERT INTO users (first_name, last_name, email, password) VALUES($1,$2,$3,$4) RETURNING *;',
    values: [firstName, lastName, email, password],
  };
  return connection.query(sql);
};
module.exports = signupUser;
