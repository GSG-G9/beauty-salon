const { Pool } = require('pg');

let dbUrl = '';
const {
  NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL,
} = process.env;
switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('Three is No Database Found ... ');
}
const options = {
  connectionString: dbUrl,
  ssl: false,
};

const pool = new Pool(options);
module.exports = pool;
