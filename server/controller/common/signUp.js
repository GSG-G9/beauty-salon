const { hash } = require('bcrypt');

const { signupUser, checkEmail } = require('../../database/queries');
const { boomify, signupValidation, signToken } = require('../../utilis');

const signUp = async (req, res, next) => {
  try {
    const { email, password } = await signupValidation.validateAsync(req.body, {
      abortEarly: false,
    });

    const { rows: user } = await checkEmail({ email });

    if (user[0]) {
      next(boomify(409, 'user already exists '));
    }

    const hashedPassword = await hash(password, 10);
    const { rows: data } = await signupUser({
      ...req.body,
      password: hashedPassword,
    });

    const token = await signToken({
      firstName: data[0].first_name,
      lastName: data[0].last_name,
      email: data[0].email,
      id: data[0].id,
    });

    const { id, role } = data[0];
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({
      statusCode: 201,
      message: 'SingUp Successfully',
      data: { id, role },
    });
  } catch (err) {
    next(
      err.name === 'ValidationError'
        ? boomify(400, err.details[0].message)
        : err
    );
  }
};

module.exports = signUp;
