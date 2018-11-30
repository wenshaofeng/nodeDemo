var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: new Date().toLocaleString()
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: new Date().toLocaleString()
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: new Date().toLocaleString()
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: new Date().toLocaleString()
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: new Date().toLocaleString()
  }
]


http
    .createServer(function (req,res) {
      var pathObj= url.parse(req.url, true)
      var pathname = pathObj.pathname
      var query = pathObj.query
     
        if(pathname === '/') {
          fs.readFile('./views/index.html',function(err,data){
            if(err){
              return res.end('404 Not Found')
            }


            var html = template.render(data.toString(), {            
                 comments : comments
           });

            
            res.end(html)
          })
        }
        else if(pathname === '/pinglun'){
          var newComment = query
          newComment.dateTime = new Date().toLocaleString()
          comments.unshift(newComment)
          
          res.statusCode = 302
          res.setHeader('Location', '/')
          res.end()    
        }
        else if(pathname.indexOf('/public/') === 0){
          //  fs.readFile('./public')
             fs.readFile('.'+pathname,function(err,data){
              if(err){
                return res.end('404 Not Found')
              }
              
              res.end(data)
             })
           
        }
        else if(pathname ==='/post'){
          fs.readFile('./views/post.html',function(err,data){
            if(err){
              return res.end('404 Not Found')
            }
            
            res.end(data)

          })
        }
        else{
          fs.readFile('./views/404.html',function(err,data){
            if(err){
              return res.end('404 Not Found')
            }
            
            res.end(data)
          })
        }

      })
    .listen(3000,function(){
        console.log('running....')
        
    })  