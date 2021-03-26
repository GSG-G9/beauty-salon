const boomify = (statusCode, errorMessage) => {
  return {
    statusCode,
    errorMessage,
  };
};
module.exports = boomify;
