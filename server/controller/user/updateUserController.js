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
    const {
      id, first_name, last_name, email, alt_mobile, created_at,
    } = rows[0];
    res.status(200).json({
      statusCode: 200,
      message: 'user updated Successfully',
      data: {
        id, first_name, last_name, email, country, city, address, mobile, alt_mobile, created_at,
      },
    });
  } catch (err) {
    next(
      err.name === 'ValidationError'
        ? boomify(400, err.details[0].message)
        : err,
    );
  }
};

module.exports = updateUserController;
