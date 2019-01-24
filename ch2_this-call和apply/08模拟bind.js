Function.prototype.bind = function(context){
  var self = this;//保存原函数
  return function(){//返回一个新的函数
    return self.apply(context,arguments);//执行新的函数的时候，会把之前传入的context当作新函数体内的this
  }
};

var obj = {
  name:'sven'
};

var func = function(){
  console.log(this.name);
}.bind(obj);

func();