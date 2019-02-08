var obj1 = {
  name:'sven'
};

var obj2 = {
  getName: function(){
    return this.name;
  }
};

console.log(obj2.getName.call(obj1));

// =================

(function(){
  Array.prototype.push.call(arguments,4);
  console.log(arguments);
})(1,2,3);

// ==========
Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
    console.log({arguments});
    var obj = Array.prototype.shift.call(arguments);
    console.log({obj});
    return self.apply(obj,arguments);
  };
};

var push = Array.prototype.push.uncurrying();

(function(){
  push(arguments,4);
  console.log(arguments);
})(1,2,3);