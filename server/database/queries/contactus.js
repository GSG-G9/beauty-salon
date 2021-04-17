const connection = require('../config/connection');

const postMessage = (username, email, message, mobile) => {
  connection.query({
    text:
      'insert into contacts (username, email, message, mobile) VALUES ($1, $2, $3, $4)',
    values: [username, email, message, mobile],
  });
};

module.exports = postMessage;
