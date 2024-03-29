var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
var serveJade = require('./lib/processor/jade');
var serveLess = require('./lib/processor/less');

function miniharp(root) {
  var app = connect();
  
  console.log("miniharp server running at: " + root);

  app.use(function (req, res, next) {
    if (path.extname(req.url) === '.less' || path.extname(req.url) === '.jade') {
      res.statusCode = 404;
      res.end();
    }      
    else {
      if (req.url === "/") {      
        req.url = "/index.html";    
      }
      next();      
    };
  })

  app.use(serveStatic(root)); 
  app.use(serveJade(root));
  app.use(serveLess(root));
  
  return app;
}

module.exports = miniharp;
