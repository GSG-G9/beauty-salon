const connection = require('../config/connection');

const updateUserQuery = ({
  firstName, lastName, mobile, address, country, city, altMobile, userId,
}) => {
  const sql = {
    text: 'UPDATE users SET first_name =COALESCE($1,first_name ),last_name =COALESCE($2,last_name), mobile =COALESCE($3,mobile), address = COALESCE($4,address), country = COALESCE($5,country), city = COALESCE($6,city), alt_mobile = COALESCE($7,alt_mobile) WHERE id = $8  RETURNING id,first_name,last_name,email,country,city,address,mobile,alt_mobile,created_at;',
    values: [firstName, lastName, mobile, address, country, city, altMobile, userId],
  };
  return connection.query(sql);
};

module.exports = updateUserQuery;
