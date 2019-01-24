var func = function(a,b,c){
  console.log(this === global);
};

func.apply(null,[1,2,3]);//1.如果我们传入的第一个参数为null,函数体内的this会指向默认的宿主对象

var func2 = function(a,b,c){
  "use strict";
  console.log(this === null);//2.如果在严格模式下，函数体内的this还是为null
};

func2.apply(null,[1,2,3]);

// 3.借用其他对象的方法
const max = Math.max.apply(null,[1,2,3,4,5]);
console.log(max);
