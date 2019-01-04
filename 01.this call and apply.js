global.name = 'globalName';
var myObject = { 
    name: 'sven',
    getName: function(){ 
        return this.name;
    } 
};
var getName = myObject.getName; 
console.log(myObject.getName()); //sven
console.log( getName() ); // globalName
