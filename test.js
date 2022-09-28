// function Person(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const lydia = new Person('lydia','Hallie')
// const sarch = Person('Sarch','Smith') // 全局调用Person函数，函数默认返回undefined,Sarch,Smith 挂载到了global或window上
// console.log(lydia);
// console.log(sarch);
//所有函数的隐式原型链最终都会指向Function.prototype，他是一切函数的爸爸
console.log(Array.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Function.__proto__ === Function.prototype);

//所有的对象在隐式原型链上最后都指向Object.prototype,她是一切对象的妈妈
console.log(Function.prototype.__proto__ === Object.prototype );
console.log( Object.prototype.__proto__ === null );
