
/* 
 ES6会强制开启严格模式 use strict
 let 为块级作用域
 let 变量不能重复定义
 let 声明的变量一定要在声明后使用，否则报错 */

 function test(){
   for(let i=1 ;i<3;i++){  //let 为块级作用域
       console.log(i);
   }
   console.log(i);  //Uncaught ReferenceError: i is not defined

   let a = 1
   let a = 5  //let 变量不能重复定义

   // var 的情况                         //let不会提升
console.log(foo); // 输出undefined
var foo = 2;
let a = 2
let a = 3
// // let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
  
    let tmp; // TDZ结束
    console.log(tmp); // undefined
  
    tmp = 123;
    console.log(tmp); // 123
  }

 }
 test()

//  const 为常量，不能再次赋值，且初次定义就必须赋值
 function test1(){
    const PI 
    PI = 45
    console.log(PI);
    
 }
test1()


/*************解构赋值*******************/
//数组
{
   let a,b,res
   [a,b] = [1,5]
   console.log(a,b);  // 1 2 
   
}

{
   let a,b,rest;
   [a,b,...rest]=[1,2,3,4,5,6];
   console.log(a,b,rest);  //1 2 Array [ 3, 4, 5, 6 ]
}


 //对象
{
   let a,b;
   ({a,b}={a:6,b:2})
   console.log(a,b);  // 1 2
}

//应用:
// 1.变量交换

{
   let a = 8 
   let b = 2 ;
   [a,b]=[b,a]
   console.log(a,b); //2 8
   
}

{
   let a = 8 ;
   let b = 18 ;
   ({a,b}={a:b,b:a})
   console.log(a,b); //18 8 
}
// 2.接收函数返回值
{
   function f() {
      return [1,2];
   }
   let a,b;
   [a,b]=f();
   console.log(a,b); // 1 2
}
// 3.返回多个值时，可以选择性接收自己想要的某几个变量
{
   function f() {
       return [1,2,3,4,5];
   }
   let a,b,c;
   [a,,,b] = f();
   console.log(a,b);  //1 4
}

// 4.不知道函数返回数组的长度，只想取出前几个元素，其余用数组表示
{
   function f() {
     return [1,2,3,4,5];
   }
   let a,b,c;
   [a,...b] = f();
   console.log(a,b);  //1 [2,3,4,5]
}

// 对象解构赋值
{
   let a = {p:3,q:true};
   let {p,q} = a;
   console.log(p,q);  // 3 true
}

{
   let {a=10,b=5} = {a:3};
   console.log(a,b);  //3 5
}

{
   let metaData = {
       title:'abc',
       test:[{
         title:'test',
         desc:'description'
       }]
   }
   let {title:esTitle,test:[{title:cnTitle}]} = metaData;
   console.log(esTitle,cnTitle);  //'abc' test
}