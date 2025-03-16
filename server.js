require("dotenv").config();
const server_config = require("./config/server_config");

const express = require("express");
const app = express();

const SimpleAPI_model = "./models/simpleAPI.js";

const db_connection_string = server_config.DB_CONNECT_STRING;
const mongoose = require("mongoose");
mongoose.connect(db_connection_string);

const db = mongoose.connection;

db.on("error", (e) => {
  console.error(e);
});
db.on("open", () => {
  console.log("Connected to Database");
});

// run application before passing to API routes
app.use(express.json());

// import route tree
const simpleAPI = require("./routes/simpleAPI");
app.use("/simple-api", simpleAPI);

const port = server_config.PORT;
app.listen(port, () => {
  console.log(db_connection_string);
  console.log(`Server started on port: ${port}`);
});

// tree to forest
// version
