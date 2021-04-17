// Dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Configuration
const config = require('./config');

// Routes
const routes = require('./routes');

// Service Instance
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(routes);

module.exports = {
  app,
  config,
};
