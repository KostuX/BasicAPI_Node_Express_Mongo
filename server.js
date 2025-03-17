require("dotenv").config();
const server_config = require("./config/server_config");
let api_version = server_config.API_VERSION_DEFAULT;
let api_version_list = server_config.API_VERSION_LIST;

const db_connection_string = server_config.DB_CONNECT_STRING_DEFAULT;
const { Mongo_db } = require("./database/mongoDB/db_mongo_connect.js");
new Mongo_db(db_connection_string);

const express = require("express");
const app = express();
// run application before passing to API routes
app.use(express.json());

// import all routes
api_version_list.forEach((api_version) => {
  const root = require(`./${api_version}/routes/root`);
  app.use(`/${api_version}/`, root);

  const simpleAPI = require(`./${api_version}/routes/simpleAPI`);
  app.use(`/${api_version}/simple-api`, simpleAPI);
});

// handle path with missing API version
app.use("/", (req, res) => {
  res.json({
    message: "Path missing API version! example: 'http://simpleAPI.com/v0/` ",
  });
});

const port = server_config.PORT;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
