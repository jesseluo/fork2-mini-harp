var connect = require('connect');

function miniharp(port) {
  console.log("Starting mini-harp on http://localhost:" + port);

  var app = connect();

  return app;
}

module.exports = miniharp;
