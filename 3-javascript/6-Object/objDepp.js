// 1.直接stringify + parse
const a = {};
const b = JSON.parse(JSON.stringify(a));

// 2.直接使用回调函数。
//使用递归的方式实现数组、对象的深拷贝
function deepClone(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是对象
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) { // 过滤掉原型链上继承的对象属性,for in 不能遍历出非可枚举属性
        if (obj[key] && typeof obj[key] === "object") { // obj[key]->用来判断null,undefined
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
let obj1 = { name: '张三', action: { say: 'hi'},'': undefined,hh:()=>{} }
obj1[Symbol(66)] = 999;
console.log(obj1);
let newObj = deepClone(obj1)


console.log(newObj);