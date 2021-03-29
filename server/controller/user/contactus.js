const { postMessage } = require('../../database/queries');
const { contactusValidation, boomify } = require('../../utilis');

const contactusHandler = async (req, res, next) => {
  try {
    const { name, email, message, mobile } = req.body;
    try {
      await contactusValidation.validateAsync({
        name,
        email,
        message,
        mobile,
      });
    } catch (err) {
      throw boomify(400, err.details[0].message);
    }

    await postMessage(name, email, message, mobile);

    res.json({
      status: 200,
      message: 'message sent succesfully',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = contactusHandler;
