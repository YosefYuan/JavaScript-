// 1.内部迭代器
var each = function(ary, callback){
  for( var i = 0, l = ary.length; i < l; i++ ){
    callback.call(ary[i], i, ary[i]);
  } 
};

var compare1 = function(ary1, ary2) {
  if(ary1.length !== ary2.length){
    throw new Error('ary1 和 ary2不相等');
  }
  each(ary1, function(i, n){
    if(n !== ary2[i]){
      throw new Error('ary1 和 ary2不相等');
    }
  });
  console.log('ary1 和 ary2 相等');
};

compare1([1, 2, 3], [1, 2, 4]);


// 2.外部迭代器
var Iterator = function(obj){
  var current = 0;

  var next = function(){
    current += 1;
  };

  var isDone = function(){
    return current >= obj.length;
  };

  var getCurrItem = function(){
    return obj[current];
  };

  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem
  }
};

var compare2 = function(iterator1, iterator2){
  while(!iterator1.isDone() && !iterator2.isDone()){
    if(iterator1.getCurrItem() !== iterator2.getCurrItem()){
      throw new Error('iterator1 和 iterator2 不相等');
    }
    iterator1.next();
    iterator2.next();
  }
  console.log('iterator1 和 iterator2 相等')
}

var iterator1 = Iterator([1, 2, 3]);
var iterator2 = Iterator([1, 2, 3, 4]);

compare2(iterator1, iterator2);

