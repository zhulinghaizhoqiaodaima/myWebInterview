Function.prototype.MyCall = function (thisArg, ...args) {
    let fn = this  //this指的是当前函数
    thisArg = (thisArg === undefined || thisArg === null) ? window : Object(thisArg)
    thisArg.fn = fn
    args = args || [] //如果arg不存在，就将其设置为[],方便结构
    let res = thisArg.fn(...args)
    delete thisArg.fn  //执行完之后就删除该对象上的属性
    return res
  }
  
  

function test() {
    console.log(this);
}

const obj = {
    name: "竹林海",
    age: 18,
}


// test.MyCall()
let a = 0 || {}
console.log(a);