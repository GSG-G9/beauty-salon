const { sign, verify } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const signToken = (payload) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY, (err, token) => {
      if (err) return reject(err);
      return resolve(token);
    });
  });

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});
module.exports = { signToken, verifyToken };
