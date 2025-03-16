// Server PORT number
export const PORT = 3000;

// Database parameters
export const db_config = {
  DB_HOST: "localhost",
  DB_COLLECTION: "simpleAPI",
};
export const DB_CONNECT_STRING = `mongodb://${db_config.DB_HOST}/${db_config.DB_COLLECTION}`;
