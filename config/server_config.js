import dotenv from "dotenv";
dotenv.config();

export const API_VERSION_DEFAULT = "v0";
export const DB_CONFIG_DEFAULT = {
  DB_HOST: "localhost",
  DB_COLLECTION: "simpleAPI",
};

export const server_config = {
  SERVER_PORT: 3000,

  API_VERSION_LIST: [API_VERSION_DEFAULT], // to add additional versions if needed

  // Database parameters
  DB_CONNECT_STRING_DEFAULT: `mongodb://${DB_CONFIG_DEFAULT.DB_HOST}/${DB_CONFIG_DEFAULT.DB_COLLECTION}`,
  DB_CONNECT_STRING_REMOTE: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST_REMOTE}`,
};
