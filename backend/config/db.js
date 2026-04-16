const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://kokila:Kokila0789@ac-t4jyyzw-shard-00-00.jqxaq77.mongodb.net:27017,ac-t4jyyzw-shard-00-01.jqxaq77.mongodb.net:27017,ac-t4jyyzw-shard-00-02.jqxaq77.mongodb.net:27017/eventzone?ssl=true&replicaSet=atlas-11e2pe-shard-0&authSource=admin&retryWrites=true&w=majority");

    console.log("MongoDB Connected");
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;