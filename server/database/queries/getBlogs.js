const connection = require('../config/connection');

const getBlogs = () => {
  const sql = {
    text: 'SELECT * FROM blogs;',
  };
  return connection.query(sql);
};

module.exports = getBlogs;
