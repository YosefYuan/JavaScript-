var googleMap = {
  show: function(){
    console.log('开始渲染谷歌地图');
  }
};

var badiduMap = {
  show: function(){
    console.log('开始渲染百度地图');
  }
}

var renderMap = function(map){
  if(map.show instanceof Function){
    map.show();
  }
}

renderMap(googleMap);
renderMap(badiduMap);

var sosoMap = {
  show: function(){
    console.log('开始渲染搜搜地图');
  }
}

renderMap(sosoMap);