var makeSound = function(animal){
  animal.sound();
};

var Duck = function(){}

Duck.prototype.sound = function(){
  console.log('嘎嘎嘎');
}

var Chicken = function(){}

Chicken.prototype.sound = function(){
  console.log('咯咯咯');
}

makeSound(new Duck())
makeSound(new Chicken())

// add
var Dog = function(){}

Dog.prototype.sound = function(){
  console.log('汪汪汪');
}
makeSound(new Dog())

