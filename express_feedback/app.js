var express = require('express')
var app = express()
var bodyParser = require('body-parser')

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
  
app.engine('html',require('express-art-template'))  
 // 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.render('index.html', {
       comments : comments
    })
}).get('/post',function(req,res) {
    res.render('post.html')

}).get('/pinglun',function(req,res){
    var newComment = req.query
    newComment.dateTime = new Date().toLocaleString()
    comments.unshift(newComment)
    res.redirect('/')

})
app.post('/pinglun',function(req,res){
        var newComment = req.body
          newComment.dateTime = new Date().toLocaleString()
          comments.unshift(newComment)
          res.redirect('/')
        //   res.statusCode = 302
        //   res.setHeader('Location', '/')
      //   res.end()    
})


app.use('/public/', express.static('./public/'))

app.get('*', function(req, res){
    res.sendfile('./views/404.html');
  })

app.listen(3000,()=>{
    console.log('app is running at port 3000.')
})