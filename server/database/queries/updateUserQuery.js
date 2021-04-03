const connection = require('../config/connection');

const updateUserQuery = ({
  firstName, lastName, mobile, address, country, city, altMobile, userId,
}) => {
  const sql = {
    text: 'UPDATE users SET first_name = $1,last_name = $2, mobile =$3, address = $4, country = $5, city = $6, alt_mobile = $7 WHERE id = $8  RETURNING id,first_name,last_name,email,country,city,address,mobile,alt_mobile,created_at;',
    values: [firstName, lastName, mobile, address, country, city, altMobile, userId],
  };
  return connection.query(sql);
};

module.exports = updateUserQuery;
