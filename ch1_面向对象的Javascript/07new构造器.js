function Person(name) {
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
}

var a = new Person("sven");

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);