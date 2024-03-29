const dotnev = require("dotenv");
const path = require("path");

dotnev.config();

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  serviceName: process.env.SERVICE_NAME,
  jwtKey: process.env.SECRET,
  urlDb: process.env.MONGO_URL,
};
