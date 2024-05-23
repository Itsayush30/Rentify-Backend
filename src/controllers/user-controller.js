const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");


const createUser = async (req, res) => {
    try {
      const response = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phone_number: req.body.phone_number,
      });
      return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode).json(error);
    }
  };

module.exports = { createUser };
