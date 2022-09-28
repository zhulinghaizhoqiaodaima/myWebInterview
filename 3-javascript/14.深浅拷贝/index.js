// 1.直接stringify + parse
const a = {};
const b = JSON.parse(JSON.stringify(a));

// 2.直接使用回调函数。
//使用递归的方式实现数组、对象的深拷贝
function deepClone(obj) {
  const isError = Object.prototype.toString.call(obj);
  if ( isError!== '[object Object]' && isError !== '[object Array]') {
    throw 'TypeError'
  }
  const objClone = Array.isArray(obj) ? [] : {};
  let arr = Reflect.ownKeys(obj)
  for (const key of arr) {
    if (obj.hasOwnProperty(key)) { // 过滤掉原型链上继承的对象属性
      let isColone = Object.prototype.toString.call(obj[key]) == '[object Object]'
      if (isColone) {
        objClone[key] = deepClone(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}




let obj1 = {
  name: '张三',
  action:
  {
    say: 'hi',
    zbt: {
      name: 'zhulinhai',
      age: 18,
    }
  },
  test(){
    console.log(999);
  }, 
  reg: /^\d$/,
  [Symbol(88)]: {
    hh: '笑哭',
    无敌: "椅子"
  }

}

let arr1 = [1,2,3,{
  name:'aa',
  age:98
}]
//对象
console.log(obj1);
let newObj = deepClone(obj1)
newObj.action.zbt.name = '7777'
console.log(newObj);
//数组
// console.log(arr1);
// let newArr = deepClone(arr1)
// newArr[3].name = 'new'
// console.log(newArr);