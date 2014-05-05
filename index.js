var connect = require('connect');

function miniharp(port) {
  console.log("Starting http server on http://localhost:" + port);
  app = connect();
}

module.exports = miniharp;
