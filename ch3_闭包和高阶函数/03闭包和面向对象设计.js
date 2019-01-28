// method 1
var extent = function(){
  var value = 0;
  return {
    call:function(){
      value ++;
      console.log(value);
    }
  }
};

var extent = extent();

extent.call();
extent.call();
extent.call();

console.log('===================');
// method 2
var extent = {
  value: 0,
  call:function(){
    this.value ++;
    console.log(this.value);
  }
};


extent.call();
extent.call();
extent.call();


console.log('===================');

// method 3
var Extent = function(){
  this.value = 0;
};

Extent.prototype.call = function(){
  this.value ++;
  console.log(this.value);
}

var extent = new Extent();

extent.call();
extent.call();
extent.call();