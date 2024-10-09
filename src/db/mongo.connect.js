const mongoose = require("mongoose");

const connectToMongo = async () => {
    const mongoDbURI = "mongodb://127.0.0.1:27017/business-details";
    await mongoose.connect(mongoDbURI);
    console.log("mongoDB connected for business-details-node-server");
};

module.exports = { connectToMongo };