var MyClass = function(){
  this.name = 'sven';
};

var obj = new MyClass();
console.log(obj.name);

var MyClass2 = function(){
  this.name = 'sven';
  // 显式的返回一个对象
  return{
    name:"anne"
  }
};

var obj = new MyClass2();
console.log(obj.name);
