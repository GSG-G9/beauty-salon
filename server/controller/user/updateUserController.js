const { updateUserQuery } = require('../../database/queries');
const { boomify, updateUserValidation } = require('../../utilis');

const updateUserController = async (req, res, next) => {
  try {
    const { userId } = req;
    const {
      firstName, lastName, mobile, address, country, city, altMobile,
    } = await updateUserValidation.validateAsync(req.body, {
      abortEarly: false,
    });

    const { rows } = await updateUserQuery({
      firstName, lastName, mobile, address, country, city, altMobile, userId,
    });

    if (!rows.length) {
      throw boomify(400, 'update failed');
    }

    res.status(200).json({
      statusCode: 200,
      message: 'user updated Successfully',
      data: rows[0],
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(boomify(400, err.details[0].message));
    } else if (err.routine === 'pg_strtoint32') {
      next(boomify(400, 'please enter a valid phone number like 0591234567'));
    } else {
      next(err);
    }
  }
};

module.exports = updateUserController;
