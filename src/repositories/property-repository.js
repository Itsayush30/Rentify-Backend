const CrudRepository = require("./crud-repository");
const Property = require("../models/property");

class PropertyRepository extends CrudRepository {
    constructor() {
        super(Property);
    }

    async getPropertyByCity(data) {
        try {
          console.log("here",data);
          const result = await Property.find({city: data});
          console.log("result",result)
          return result;
        } catch (error) {
          console.log("Something went wrong in crud repo");
          throw error;
        }
      }

      async getPropertyByUserId(data) {
        try {
          console.log("here",data);
          const result = await Property.find({user_id: data});
          console.log("result",result)
          return result;
        } catch (error) {
          console.log("Something went wrong in crud repo");
          throw error;
        }
      }

}

module.exports = PropertyRepository;