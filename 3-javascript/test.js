function myInstanceof(left, right) {
    right = right.prototype;
    // left = left.__proto__;
    while (true) {
        if (left === null) return false;
        if (left === right) return true;
        left = left.__proto__
    }
}
let a = ()=>{

};
let b = Object;
console.log(a instanceof Object, myInstanceof(a, Object));  //true,true
console.log(b instanceof Function, myInstanceof(b, Function));  //false,false