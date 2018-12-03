var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',{ useMongoClient: true })

var Schema = mongoose.Schema
//设计表结构
var studentSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    gender: {
      type: Number,
      enum: [0, 1],
      default: 0
    },
    age: {
      type: Number
    },
    hobbies: {
      type: String
    }
  })

  //直接导出模型构造函数
  //因为mongoos已经封装好了crud对应的方法，可参照文档直接调用，
  //无需自己封装
  module.exports = mongoose.model('Student', studentSchema)