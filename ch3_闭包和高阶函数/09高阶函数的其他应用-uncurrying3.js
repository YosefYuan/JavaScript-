Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};

var call = Function.prototype.call.uncurrying();
var fn = function(name){
  console.log(name);
};

call(fn, null, 'sven');

// ================

var apply = Function.prototype.apply.uncurrying();
var fn2 = function(name){
  console.log(this.name);
  console.log(arguments);
};

apply(fn2,{name: 'sven'}, [1,2,3]);