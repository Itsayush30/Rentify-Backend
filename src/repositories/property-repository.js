const CrudRepository = require("./crud-repository");
const Property = require("../models/property");

class PropertyRepository extends CrudRepository {
    constructor() {
        super(Property);
    }

    async getProperty(data) {
        try {
          console.log("idhar",data);
          const result = await Property.find({city: data});
          console.log("result",result)
          return result;
        } catch (error) {
          console.log("Something went wrong in crud repo");
          throw error;
        }
      }

}

module.exports = PropertyRepository;