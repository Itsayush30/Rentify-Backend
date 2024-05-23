const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
        type: String,
        required: true,
      },
    price: {
      type: Number,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    preferred_tenants: {
      type: [String], 
      required: true,
    },
    apartment_type: {
      type: String,
      required: true,
    },
    nearby_areas: {
      type: [String], 
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
