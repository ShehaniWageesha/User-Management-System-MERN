require("dotenv").config();

const http = require("http");

const logger = require("./helpers/logger");

const app = require("./app");
const { mongo } = require("./helpers/db");

const { PORT, NODE_ENV } = require("./config");
const nodemon = require("nodemon");

let server;

const gracefulStopServer = () => {
  logger.info("SIGTERM/SIGINT signal received: closing HTTP server");
  // Wait for existing connection to close and then exit.
  server.close(() => {
    logger.info("Shutting down CHATTY EMAIL API");
    process.exit(0);
  });
};

process.on("uncaughtException", (err) => {
  logger.error("UNCAUGHT EXCEPTION!", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error("UNHANDLED REJECTION!", err);
  process.exit(1);
});

process.on("SIGINT", gracefulStopServer);
process.on("SIGTERM", gracefulStopServer);

const main = async () => {
  try {
    logger.info(`API is starting`);

    // Mongo connection
    await mongo.initialize();

    // Redis connection
    // await redis.initialize();

    // Initial db setup
    // await setup.initialize();

    server = http.createServer(app);

    server.listen(PORT, () => {
      logger.info(`API is listening on ${PORT} - env ${NODE_ENV}`);
    });
  } catch (error) {
    logger.error("Error occured while API is starting", error);
    process.exit(1);
  }
};

main();
