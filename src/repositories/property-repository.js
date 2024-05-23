const CrudRepository = require("./crud-repository");
const Property = require("../models/property");

class PropertyRepository extends CrudRepository {
    constructor() {
        super(Property);
    }

}

module.exports = PropertyRepository;