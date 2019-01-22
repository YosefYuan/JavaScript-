function Person(name){
  this.name = name;
};

Person.prototype.getName = function(){
  return this.name;
};

var objectFactory = function(){
  console.log({arguments});
  var obj = new Object(),
  Constructor = [].shift.call(arguments);
  console.log({Constructor});
  obj.__proto__ = Constructor.prototype;
  console.log({arguments});
  var ret = Constructor.apply(obj,arguments);
  console.log({ret});
  console.log({obj});
  return typeof ret === 'object' ? ret : obj;
};

var a = objectFactory(Person,'sven');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);

