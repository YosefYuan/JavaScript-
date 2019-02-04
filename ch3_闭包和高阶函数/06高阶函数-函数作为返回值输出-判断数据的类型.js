var isString = function(obj){
  return Object.prototype.toString.call(obj) === '[object String]';
};

var isArray = function(obj){
  return Object.prototype.toArray.call(obj) === '[object Array]';
};

var isNumber = function(obj){
  return Object.prototype.toNumber.call(obj) === '[object Number]';
};

// ===============
// 升级1

var isType = function(type){
  return function(obj){
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');

console.log(isArray([1,2,3]));

// ============
// 升级2

var Type = {};

for(var i = 0,type;type=['String', 'Array', 'Number'][i++];){
  (function(type){
    Type['is' + type] = function(obj){
      return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
  })(type)
};

console.log(Type.isArray([]));
console.log(Type.isString('str'));

