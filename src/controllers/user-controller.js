const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const UserService = require("../services/user-service");
const userService = new UserService();
const User = require("../models/user");


const createUser = async (req, res) => {
    try {
        const response = await userService.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            phone_number: req.body.phone_number,
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function usersignin(req, res) {
    try {
      const admin = await userService.signin({
        first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            phone_number: req.body.phone_number,
      });
      SuccessResponse.data = admin;
      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      console.log(error);
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

module.exports = { createUser,usersignin };
