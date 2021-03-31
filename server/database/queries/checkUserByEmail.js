const connection = require('../config/connection');

const checkUserByEmail = ({ email }) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email=$1;',
    values: [email],
  };
  return connection.query(sql);
};

module.exports = checkUserByEmail;
