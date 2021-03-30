const { getServices } = require('../../database/queries/index');

const servicesHandler = async (req, res, next) => {
  try {
    const { rows } = await getServices();
    res.status(200).json({
      status: 200,
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = servicesHandler;
