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
        "cannot get all properies",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

} 
module.exports = PropertyService;