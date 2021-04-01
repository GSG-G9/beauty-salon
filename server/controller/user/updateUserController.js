const { updateUserQuery } = require('../../database/queries');
const { boomify, updateUserValidation } = require('../../utilis');

const updateUserController = async (req, res, next) => {
  try {
    const { userId } = req;
    const {
      firstName, lastName, mobile, address,
    } = await updateUserValidation.validateAsync(req.body, {
      abortEarly: false,
    });

    const { rows } = await updateUserQuery({
      firstName, lastName, mobile, address, userId,
    });

    if (!rows.length) {
      throw boomify(400, 'update failed');
    }

    res.status(200).json({
      statusCode: 200,
      message: 'user updated Successfully',
      data: rows,
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
