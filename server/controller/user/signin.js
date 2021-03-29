const signin = async (req, res, next) => {
  try {
    await res.status(200).json({
      status: 200,
      data: 'Hello from sign in page',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = signin;
