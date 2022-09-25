function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person('lydia','Hallie')
const sarch = Person('Sarch','Smith') // 全局调用Person函数，函数默认返回undefined,Sarch,Smith 挂载到了global或window上
console.log(lydia);
console.log(sarch);