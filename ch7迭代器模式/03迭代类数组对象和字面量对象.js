// jquery 中 $.each函数来封装各种迭代行为
$.each = function(obj, callback){
  var value,
    i = 0,
    length = obj.length,
    isArray = isArraylike(obj);

  if(isArray){
    for(; i < length; i++){
      value = callback.call(obj[i], i, obj[i]);

      if(value === false){
        break;
      }
    }
  } else {
    for( i in obj){
      value = callback.call(obj[i], i, obj[i]);
      if(value === false){
        break;
      }
    }
  }
  return obj;
}