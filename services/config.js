require('dotenv').config();
const fs = require('fs');

function conf() {
  const { APP_PORT } = process.env;
  return {
    APP_PORT,
  }
}

module.exports = conf();