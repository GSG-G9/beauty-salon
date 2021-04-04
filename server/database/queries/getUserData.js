const connection = require('../config/connection');

const getUserData = (userId) => connection.query({
  text: 'SELECT * FROM users WHERE id = $1;',
  values: [userId],

});
module.exports = getUserData;
