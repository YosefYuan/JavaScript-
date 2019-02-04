Function.prototype.before = function(beforefn){
  var __self = this; //保持原来函数的引用
  return function(){ // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply(this.argument); // 执行新函数，修正this
    return __self.apply(this.argument); // 执行原函数
  }
};

Function.prototype.after = function(afterfn){
  var __self = this; //保持原来函数的引用
  return function(){ // 返回包含了原函数和新函数的"代理"函数
  var ret = __self.apply(this.argument); // 执行原函数
  afterfn.apply(this.argument); // 执行新函数，修正this
  return ret;
  }
};

var func = function (){
  console.log(2);
};

func = func.after(function(){
  console.log(3);
}).before(function(){
  console.log(1);
})

func();