const { StatusCodes } = require("http-status-codes");
const  PropertyRepository  = require("../repositories/property-repository");
const AppError = require("../utils/errors/app-error");

class PropertyService {
  constructor() {
    this.propertyRepository = new PropertyRepository();
  }

  async create(data) {
    try {
      console.log("here",data);
      const property = await this.propertyRepository.create(data);
      return property;
    } catch (error) {
      throw new AppError(
        "cannot create a new property",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAll() {
    try {
      console.log("here");
      const property = await this.propertyRepository.getAll();
      return property;
    } catch (error) {
      throw new AppError(
        "cannot get all properties",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getPropertyByUserId(user_id) {
    try {
      console.log("here");
      const property = await this.propertyRepository.getProperty(user_id);
      return property;
    } catch (error) {
      throw new AppError(
        "cannot get property by user id",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getPropertyByCity(city) {
    try {
      console.log("here");
      const property = await this.propertyRepository.getProperty(city);
      return property;
    } catch (error) {
      throw new AppError(
        "cannot get property by city",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

} 
module.exports = PropertyService;