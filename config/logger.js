const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  transports: [
    new transports.MongoDB({
      db: process.env.MONGO_URI,
      options: { useUnifiedTopology: true },
      level: "info",
      collection: "activity",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.MongoDB({
      db: process.env.MONGO_URI,
      options: { useUnifiedTopology: true },
      level: "error",
      collection: "activity",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
