const connection = require('../config/connection');

const getServices = () => connection.query('select * from services');

module.exports = getServices;
