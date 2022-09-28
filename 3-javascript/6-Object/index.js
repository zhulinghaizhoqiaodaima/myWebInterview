let obj = {
    name:'zhulinhai',
    age:19
}

obj.hh = '顺序'
obj.jj = 'jj'
obj[Symbol(66)] = 999
// 列举可枚举属性
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Reflect.ownKeys(obj)); //相当于Object.getOwnPropertyNames(target) concat(Object.getOwnPropertySymbols(target)

console.log(Object.getOwnPropertySymbols(obj));

