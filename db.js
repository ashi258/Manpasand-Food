
const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.mongoURI;

global.data = [];
global.foodlist = [];
const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db; // Get a reference to the MongoDB database
    const collection = db.collection("sample"); // Access the "sample" collection

    // Find all documents in the "sample" collection
    // const data = await collection.find({}).toArray();
    global.data = await collection.find({}).toArray();

    const foodCategory = db.collection("food_list");

    global.foodlist = await foodCategory.find({}).toArray();

    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDb;


