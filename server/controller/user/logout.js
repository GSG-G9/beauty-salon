const logOut = (req, res) => {
  res
    .clearCookie('token')
    .json({ statusCode: 200, message: 'logged out successfully' });
};

module.exports = logOut;
