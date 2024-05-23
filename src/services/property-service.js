const { StatusCodes } = require("http-status-codes");
const  PropertyRepository  = require("../repositories/property-repository");
const AppError = require("../utils/errors/app-error");

class PropertyService {
  constructor() {
    this.propertRepository = new PropertyRepository();
  }

  async create(data) {
    try {
      console.log("here",data);
      const user = await this.propertRepository.create(data);
      return user;
    } catch (error) {
      throw new AppError(
        "cannot create a new property",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

} 
module.exports = PropertyService;