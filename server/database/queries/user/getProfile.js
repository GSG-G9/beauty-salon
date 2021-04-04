const connection = require('../../config/connection');

const getProfile = (userId) => {
  const sql = {
    text: 'SELECT first_name, last_name, email, country, city, address, mobile, alt_mobile FROM users WHERE id=$1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getProfile;
