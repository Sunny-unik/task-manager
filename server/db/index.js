const mongoose = require("mongoose");

async function connectDb() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.log(new Error("MongoURI isn't configured"));
    return process.exit();
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    const { host, name, id } = conn.connection;
    console.log(`MongoDB connected, host: ${host}, DB: ${name}, id: ${id}`);
  } catch (error) {
    console.log("Error in MongoDB connection:", error);
    process.exit();
  }
}

module.exports = connectDb;
