const dotnev = require("dotenv");

dotnev.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  urlDb: process.env.MONGO_URL,
};
