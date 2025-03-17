require("dotenv").config();
const server_config = require("./config/server_config");
let api_version = server_config.API_VERSION_DEFAULT;

const db_connection_string = server_config.DB_CONNECT_STRING_DEFAULT;
const { Mongo_db } = require("./database/mongoDB/db_mongo_connect.js");
let db = new Mongo_db(db_connection_string);

const express = require("express");
const app = express();
// run application before passing to API routes
app.use(express.json());

// import default routes -   v0
const root = require(`./${api_version}/routes/root`);
const simpleAPI = require(`./${api_version}/routes/simpleAPI`);

// import default routes -   v0
const root_path = `/${api_version}`;
app.use(`${root_path}/`, root);
app.use(`${root_path}/simple-api`, simpleAPI);

app.use("/", (req, res) => {
  res.json({
    message: "Path missing API version! example: 'http://simpleAPI.com/v0/` ",
  });
});

const port = server_config.PORT;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

// tree to forest
// version
