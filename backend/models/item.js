const mongoose = require("mongoose");
const API = "http://localhost:5175/api/items";

const itemSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Item", itemSchema);