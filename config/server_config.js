// Server PORT number
export const PORT = 3000;

export const API_VERSION_DEFAULT = "v0";
export const API_VERSION_LIST = [API_VERSION_DEFAULT]; // to add additional versions if needed

// Database parameters
export const db_config = {
  DB_HOST: "localhost",
  DB_COLLECTION: "simpleAPI",
};
export const DB_CONNECT_STRING_DEFAULT = `mongodb://${db_config.DB_HOST}/${db_config.DB_COLLECTION}`;
