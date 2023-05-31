require('dotenv').config();

const mongoose = require("mongoose");
const { connect } = require("rxjs");

const dbConfig = process.env.DB_CONNECTION_STRING;

const connecting = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connecting;
