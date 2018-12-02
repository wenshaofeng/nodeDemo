var fs = require('fs')

var dbPath = './db.json'


//获取学生列表

exports.finded = function(callback){

    fs.readFile(dbPath,'utf8',function(err,data){

        if(err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })

}

//获取单个ID学生
exports.findById =function(id,callback) {
    fs.readFile(dbPath,'utf8',function(err,data){

        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
         students.id = parseInt(students.id)


        var studentById = students.find(item=>{
            return item.id == parseInt(id) 
        })
        callback(null,studentById)
    })    

}
   

//添加学生
exports.save = function(student,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        //使新加入的学生ID唯一
        student.id = parseInt(students[students.length - 1].id) + 1
        students.push(student)

        //将新对象转换为字符串
        var fileData = JSON.stringify({
            students : students
        })

        //写入文件
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }

            callback(null)
        })
    })


}

//编辑学生信息
exports.update = function(newItem,callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        students.id = parseInt(students.id)
        //编辑对应的学生
        students.forEach((element) => {
            if(element.id == newItem.id ){
                for (const key in element) {
                    element[key] = newItem[key]
                }
              
            }
        })

        var fileData = JSON.stringify({
            students : students
        })
       
       
        //写入文件
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }

            callback(null)
        })


    })

}
//删除学生
exports.deleteById = function(id,callback){
    
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        
        students.forEach((element,index) => {
            if(element.id == id ){
                
                students.splice(index,1)
            }
        })

        var fileData = JSON.stringify({
            students : students
        })

        //写入文件
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }

            callback(null)
        })
    })

}

