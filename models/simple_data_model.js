const mongoose = require("mongoose");

const simpleAPI_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  item: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("simple_data_model", simpleAPI_schema);
