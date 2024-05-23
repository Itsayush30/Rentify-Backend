const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const PropertyService = require("../services/property-service");
const propertyService = new PropertyService();

const createProperty = async (req, res) => {
    try {
        const response = await propertyService.create({
            address: req.body.address,
            description: req.body.description,
            price: req.body.price,
            deposit: req.body.deposit,
            preferred_tenants: req.body.preferred_tenants,
            apartment_type: req.body.apartment_type,
            nearby_areas: req.body.nearby_areas,
            contact_number: req.body.contact_number,
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};


module.exports = { createProperty };