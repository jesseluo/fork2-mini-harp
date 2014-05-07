var less = require('less');
var path = require('path');
var fs = require('fs');

function makeLess(root) {
  return function (req, res, next) {    
    // Pass html to Jade
    if (path.extname(req.url) === '.css') {
      htmlPath = path.join(root, req.url);
      lessPath = path.join(root, path.basename(req.url, '.css') + '.less');

      // should serve /foo.css if foo.css does not exist but foo.less does      
      fs.exists(lessPath, function (exists) {
        if (exists) {
          fs.readFile(lessPath, function(err, data){
            if (err) throw err;   
            less.render(data.toString(), function(err, css){
              if (err) throw err;          
              res.end(css);
            })
          })      
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

module.exports = makeLess;
