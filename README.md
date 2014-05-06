#Readme  
##Lessons  
This project is for  
[Lesson 1 - Mini Harp Static Server](http://d.fork2.com/t/lesson-1-mini-harp-static-server/182)  
[Lesson 2 - Mini Harp Preprocessors (node3)](http://d.fork2.com/t/lesson-2-mini-harp-preprocessors-node3/190)  

##Notes
###Lesson 1
1. `app.use(func)`, func should be a function(module) with params `(req, res)` or `(req, res, next)`. See [more details](http://code.tutsplus.com/tutorials/meet-the-connect-framework--net-31220).

###Lesson 2
1. Note the `.` in `'.html'`  
    `path.extname(req.url) == '.html'`  

2. No need to care about case `should serve /bar.html if bar.html exists`. Because `app.use(serveStatic(root));` will take care of it if it is before   `app.use(serveJade(root));`.  

