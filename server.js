import dotenv from "dotenv";
dotenv.config();

import { server_config } from "./config/server_config.js";
let api_version_list = server_config.API_VERSION_LIST;

const db_connection_string = server_config.DB_CONNECT_STRING_REMOTE;
import { Mongo_db } from "./database/mongoDB/db_mongo_connect.js";
new Mongo_db(db_connection_string);

import express from "express";
const app = express();
// run application before passing to API routes
app.use(express.json());

// import all routes
api_version_list.forEach(async (api_version) => {
  // root routes
  const root = await import(`./${api_version}/routes/root.js`);
  app.use(`/${api_version}/`, root.default);

  // simpleAPI routes
  const simpleAPI = await import(`./${api_version}/routes/simpleAPI.js`);
  app.use(`/${api_version}/simple-api`, simpleAPI.default);

  // handle path with missing API version
  app.use("/", (req, res) => {
    res.json({
      message: "Path missing API version! example: 'http://simpleAPI.com/v0/` ",
    });
  });
});

const port = server_config.SERVER_PORT;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
