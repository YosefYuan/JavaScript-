// es6 中 let ->之外，一般通过函数创建作用域

var myObject = (function(){
  var _name = "sven"; //私有(private)变量
  return {
    getName: function(){
      return _name;
    }
  }
})()
console.log(myObject.getName())
console.log(myObject._name)
