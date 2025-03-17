import mongoose from "mongoose";

const simpleAPI_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  item: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const Simple_data_model = mongoose.model("simple_API", simpleAPI_schema);
export default Simple_data_model;
