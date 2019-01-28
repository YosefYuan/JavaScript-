// method1
var mult = function(){
  var a = 1;
  for(var i = 0, l = arguments.length; i < l; i++){
    a = a * arguments[i];
  }
  return a;
}

// method2
var cache = {};

var mult = function(){
  var args = Array.prototype.join.call(arguments,',');
  if(cache[args]){
    return cache[args];
  }
  var a = 1;
  for(var i = 0, l = arguments.length; i < l; i++){
    a = a * arguments[i];
  }
  return cache[args] = a;
};

console.log(mult(1,2,3));
console.log(mult(1,2,3));

// method3
var mult = (function(){
  var cache = {};
  return function(){
    var args = Array.prototype.join.call(arguments,',');
    if(args in cache){
      return cache[args];
    }
    var a = 1;
    for(var i = 0, l = arguments.length; i < l; i++){
      a = a * arguments[i];
    }
    return cache[args] = a;
  }
})()

// method 4
var mult = (function(){
  var cache = {};
  var calculate = function(){
    var a = 1;
    for(var i = 0, l = arguments.length; i < l; i++){
      a = a * arguments[i];
    }
    return a;
  };
  return function(){
    var args = Array.prototype.join.call(arguments, ',');
    if(args in cache){
      return cache[args];
    }
    return cache[args] = calculate.apply(null,arguments);
  }
})();