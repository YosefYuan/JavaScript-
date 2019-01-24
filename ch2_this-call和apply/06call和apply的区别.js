var func = function(a,b,c){
  console.log([a,b,c]);
};

func.apply(null,[1,2,3]);

var func2 = function(a,b,c){
  console.log([a,b,c]);
};

func2.call(null,1,2,3);

