const connection = require('../config/connection');

const postMessage = (name, email, message, mobile) => {
  connection.query({
    text:
      'insert into contacts (name, email, message, mobile) VALUES ($1, $2, $3, $4)',
    values: [name, email, message, mobile],
  });
};

module.exports = postMessage;
