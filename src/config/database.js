const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb+srv://itsayush30:AeyxaZrS31nwLzy7@ayushcluster0.xxagmnn.mongodb.net/rentify");
};

module.exports = connect;