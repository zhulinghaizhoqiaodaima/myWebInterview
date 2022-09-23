
//函数调用
Function.prototype.MyCall =function (context) {
    let env = typeof global !== 'undefined' ? global : window;
    context = context || env ;
    const args = [...arguments].slice(1)

    context.fn = this;
    let res = context.fn(...args)
    delete context.fn;
    return res;
}

function test() {
    console.log(this);
}

const obj = {
    name: "竹林海",
    age: 18,
}


// test.call(obj)
test.MyCall(obj)