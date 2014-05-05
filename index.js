var connect = require('connect');

function miniharp(port) {
  console.log("Starting mini-harp on http://localhost:" + port);

  var app = connect();

  app.use(function(request, response, next) {
    if(request.url == "/current-time") {
      response.end((new Date()).toISOString() + "\n");
    }
    else {
      next();
    }
  })

  return app;
}

module.exports = miniharp;
