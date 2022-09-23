Function.prototype.Myapply = function (context,args =[]){ // 这里千万不要写箭头函数
    let env = global !== undefined ? global :window;
    context = context || env;
    context.fn = this; 
    const res= context.fn(...args); // this指向调用者context
    delete context.fn;
    return res;
}

function test(name,age) {
    console.log(name,age);
    console.log(this.name);
    console.log(this);
}
const obj = {
    name: "竹林海",
    age: 18,
}
obj[Symbol(66)] = 99
// test.apply(obj)
test.Myapply(obj,['lqq',66])