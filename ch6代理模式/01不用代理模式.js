var Flower = function(){};

var xiaoming = {
  sendFlower: function(target){
    var flower = new Flower();
    target.receiverFlower(flower);
  }
};

var A = {
  receiverFlower: function(flower){
    console.log('收到花' + flower);
  }
};

xiaoming.sendFlower(A);