const mongoose = require("mongoose");

const rawProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  Image: String,
  userId: String,
  price: String,
});

module.exports = mongoose.model("rawProducts", rawProductSchema);
