const { postMessage } = require('../../database/queries');
const { contactusValidation, boomify } = require('../../utilis');

const contactusHandler = async (req, res, next) => {
  try {
    const { name, email, message, mobile } = req.body;
    // try {
    const value = await contactusValidation.validateAsync({
      name,
      email,
      message,
      mobile,
    });
    // const { error, value } = contactusValidation.validate({
    //   name,
    //   email,
    //   message,
    //   mobile,
    // });
    // console.log(error, 5);
    // if (error) {
    //   next(boomify(400, error.details[0].message));
    // }else{

    // }

    // } catch (err) {
    //   throw boomify(400, err.details[0].message);
    // }

    await postMessage(name, email, message, mobile);

    res.json({
      status: 200,
      message: 'message sent succesfully',
    });
  } catch (err) {
    next(
      err.name === 'ValidationError'
        ? boomify(400, err.details[0].message)
        : err
    );
  }
};
module.exports = contactusHandler;
