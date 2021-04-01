const { updateUserQuery } = require('../../database/queries');
const { boomify, updateUserValidation } = require('../../utilis');

const updateUserController = async (req, res, next) => {
  try {
    const {
      firstName, lastName, mobile, address, userId,
    } = await updateUserValidation.validateAsync(req.body, {
      abortEarly: false,
    });

    // const { userId } = req;
    console.log(req.body, 88);
    // console.log(userId, 77);
    // console.log(req.user, 66);

    const { rows } = await updateUserQuery({
      firstName, lastName, mobile, address, userId,
    });
    console.log(await updateUserQuery({
      firstName, lastName, mobile, address, userId,
    }), 22);

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
