var connect = require('connect');
var serveStatic = require('serve-static');
var serveJade = require('./lib/processor/jade');
var serveLess = require('./lib/processor/less');

function miniharp(root) {
  var app = connect();
  
  console.log("miniharp server running at: " + root);

  // should serve /bar.html if bar.html exists
  app.use(serveStatic(root));
  app.use(serveJade(root));
  app.use(serveLess(root));

  return app;
}

module.exports = miniharp;
