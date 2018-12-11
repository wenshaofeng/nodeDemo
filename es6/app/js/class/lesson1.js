
/* 
 ES6会强制开启严格模式 use strict
 let 为块级作用域
 let 变量不能重复定义
 let 声明的变量一定要在声明后使用，否则报错 */

 function test(){
  /*  for(let i=1 ;i<3;i++){  //let 为块级作用域
       console.log(i);
   }
   console.log(i);  //Uncaught ReferenceError: i is not defined */

//    let a = 1
//    let a = 5  //let 变量不能重复定义
//    var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;
// let a = 2
// let a = 3
// // // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// if (true) {
//     // TDZ开始
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp); // ReferenceError
  
//     let tmp; // TDZ结束
//     console.log(tmp); // undefined
  
//     tmp = 123;
//     console.log(tmp); // 123
//   }

 }
 test()

//  const 为常量，不能再次赋值，且初次定义就必须赋值
 function test1(){
    const PI 
    PI = 45
    console.log(PI);
    
 }
test1()
