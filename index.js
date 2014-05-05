var connect = require('connect');
var serveStatic = require('serve-static');

function miniharp(root) {
  var app = connect();
  
  console.log(root);
  app.use(serveStatic(root));

  return app;
}

module.exports = miniharp;
