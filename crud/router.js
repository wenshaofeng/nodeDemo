var fs = require('fs')
var Student = require('./student')
var express = require('express')


//创建一个路由容器
var router = express.Router()

// 把路由都挂载到router路由容器中

//渲染学生列表页
router.get('/students', function (req, res) {
  Student.finded(function(err,students){
     if(err){
       return res.status(500).send('Server error. ')
     }
     res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子'
      ],
      students:students
    })

  })
  
})

//渲染添加学生页
router.get('/students/new',function(req,res){
    res.render('new.html',{

  })
})

//处理添加学生
router.post('/students/new',function(req,res){

  Student.save(req.body,function(err){
    if(err){
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

//处理删除学生
router.get('/students/delete',function(req,res){
  Student.deleteById(req.query.id,function(err){
    if(err){
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')

  })

})

//渲染编辑学生资料页
router.get('/students/edit',(req,res)=>{

  Student.findById(req.query.id,function(err,student){
    if(err){
      return res.status(500).send('Server error.')
    }

    res.render('edit.html',{
      student : {
        id:student.id ,
        name : student.name ,
        age : student.age ,
        hobbies : student.hobbies
      }
    })

  }) 
  
})

//编辑学生
router.post('/students/edit',(req,res)=>{
    Student.update(req.body,function(err){
      if(err){
        return res.status(500).send('Server error.')
      }

    })
    res.redirect('/students')
})
//重定向至学生管理页
router.get('/',function(req,res){
  if (err) {
    return res.status(500).send('Server error.')
  }
  res.redirect('/students')
})  
         

    
 module.exports = router   



