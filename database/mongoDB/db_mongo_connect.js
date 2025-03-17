require("dotenv").config();
const mongoose = require("mongoose");
const server_config = require("../../config/server_config");
const db_connection_string = server_config.DB_CONNECT_STRING_DEFAULT;

class Mongo_db {
  constructor(db_connection_string) {
    if (!Mongo_db.instance) {
      mongoose.connect(db_connection_string);
      const db = mongoose.connection;

      db.on("error", (e) => {
        console.error("database Error", e);
      });
      db.on("open", () => {
        console.log("Connected to Database");
      });

      Mongo_db.instance = this;
    }

    return Mongo_db.instance;
  }
}

module.exports = { Mongo_db };
