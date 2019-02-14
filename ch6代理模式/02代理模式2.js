// 保护代理

var Flower = function(){};

var xiaoming = {
  sendFlower: function(target){
    var flower = new Flower();
    target.receiverFlower(flower);
  }
};

var B = {
  receiverFlower: function(flower){
    A.listenGoodMood(function(){
      A.receiverFlower(flower);
    });
  }
};

var A = {
  receiverFlower: function(flower){
    console.log('收到花' + flower);
  },
  listenGoodMood: function(fn){
    setTimeout(function(){
      fn();
    }, 1000);
  }
};
xiaoming.sendFlower(B);

// 虚拟代理 常用的一种代理模式
var B = {
  receiverFlower: function(flower){
    A.listenGoodMood(function(){
      var flower = new Flower();
      A.receiverFlower(flower);
    });
  }
};