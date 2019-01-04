const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./routes"));
  }
  database() {
    mongoose.connect(
      databaseConfig.uri,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    );
  }
}

module.exports = new App().express;
