global.name = 'globalName';
var getName = function(){
  return this.name;
}

console.log(getName())

global.name2 = 'globalName2';
var myObject = {
  name2:"sven",
  getName: function(){
    return this.name2;
  }
}
var getName = myObject.getName;
console.log(myObject.getName());
console.log(getName());

