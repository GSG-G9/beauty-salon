const connection = require('../config/connection');

const getOneBlog = (blogId) => {
  const sql = {
    text: 'SELECT * FROM blogs WHERE id=$1;',
    values: [blogId],
  };
  return connection.query(sql);
};

module.exports = getOneBlog;
