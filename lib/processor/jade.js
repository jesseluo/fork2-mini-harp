var jade = require('jade');
var path = require('path');
var fs = require('fs');

function makeJade(root) {
  return function (req, res, next) {    
    // Pass html to Jade
    if (path.extname(req.url) === '.html') {
      htmlPath = path.join(root, req.url);
      jadePath = path.join(root, path.basename(req.url, '.html') + '.jade');
      
      // should serve /foo.html if foo.html does not exist but foo.jade does
      fs.exists(jadePath, function (exists) {
        if (exists) {
          jade.renderFile(jadePath, null, function (err, html) {
            if (err) throw err;
            res.setHeader("Content-Length", html.length);
            res.setHeader("Content-Type", "text/html; charset=UTF-8");            
            res.end(html);
          });
        } 
        else {
          res.statusCode = 404;
          res.end();
        };
      })
    } 
    // Pass other file to next middleware
    else{
      next();
    };
  }
}

module.exports = makeJade;
