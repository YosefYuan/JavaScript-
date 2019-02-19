// method 1
// 充满了太多的 if/else 语句
var getUploadObj = function(){
  try {
    return new ActiveXObject("TXTXTXTXTX");
  } catch (e){
    if(supportFlash()){
      var str = '<object type="application/x-shockwave-flash"></object>';
      return $(str).appendTo($('body'));
    } else {
      var str = '<input name="file" type="file" />';
      return $(str).appendTo($('body'));
    }
  }
};

// method 2
var getActiveUploadObj = function(){
  try{
    return new ActiveXObject('ActiveXObject');  //IE 上传控件
  } catch(e){
    return false;
  }
};

var getFlashUploadObj = function(){
  if(supportFlash()){
    var str = '<object type="application/x-shockwave-flase"></object>';
    return $(str).appendTo($('body'));
  }
  return false;
};

var getFormUploadObj = function(){
  var str = '<input name="file" type="file" class="ui-file"/>';
  return $(str).appendTo($('body'));
};

var iteratorUploadObj = function(){
  for(var i = 0, fn; fn = arguments[i++];){
    var uploadObj = fn();
    if(uploadObj !== false){
      return uploadObj;
    }
  }
};

// 增加模式 
var getWebkitUploadObj = function(){
  // ...
};

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj, getWebkitUploadObj);