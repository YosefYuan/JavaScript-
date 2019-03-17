// offLightState
var OffLightState = function(light){
    this.light = light;
};

OffLightState.prototype.buttonWasPressed = function(){
    console.log('弱光');
    this.light.setState(this.light.weakLightState);
};  //切换状态到weakLightState


// WeakLightState
var WeakLightState = function(light){
    this.light = light;
};

WeakLightState.prototype.buttonWasPressed = function(){
    console.log('强光');
    this.light.setState(this.light.strongLightState);
};  //切换状态到strongLightState


// StrongLightState
var StrongLightState = function(light){
    this.light = light;
};

StrongLightState.prototype.buttonWasPressed = function(){
    console.log('超强光');
    this.light.setState(this.light.superStrongLightState);
};  //切换状态到superStrongLightState

//增加状态
var SuperStrongLightState = function(light){
    this.light = light;
};

SuperStrongLightState.prototype.buttonWasPressed = function(){
    console.log('关灯');
    this.light.setState(this.light.offLightState);
};

var Light = function(){
    this.offLightState = new OffLightState(this);
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.superStrongLightState = new SuperStrongLightState(this);
    this.button = null;
}

Light.prototype.init = function(){
    var button = document.createElement('button'),
    self = this;

    this.button = document.body.appendChild(button);
    this.button.innerHTML = '开关';

    this.currState = this.offLightState; //设置当前状态

    this.button.onclick = function(){
        self.currState.buttonWasPressed();
    }
};

Light.prototype.setState = function(newState){
    this.currState = newState;
};

var light = new Light();
light.init();


// 以下为优化防报错机制
//为防止 buttonWasPressed方法被漏写 在父方法添加异常报错方法
var State = function(){}
State.prototype.buttonWasPressed = function(){
    throw new Error('父类的buttonWasPressed方法必须被重写');
};

var SuperStrongLightState = function(light){
    this.light = light;
};

SuperStrongLightState.prototype = new State();
// 继承抽象父类

SuperStrongLightState.prototype.buttonWasPressed = function(){
    console.log('关灯');
    this.light.setState(this.light.offLightState);
};


