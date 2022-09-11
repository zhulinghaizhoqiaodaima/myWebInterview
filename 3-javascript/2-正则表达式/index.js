let string = "hello"
console.log(string.replace(/^/, '😄')) // 😄hello

console.log(string.replace(/$/, '😄')) // 😄hello
console.log('xxx_love_study_1.mp4'.replace(/(?=xxx)/g, '❤️'));

console.log('xxx_love_study_1.mp4'.replace(/(?=xxx)/g, '❤️') );

console.log('xxx_love_study_1.mp4'.replace(/(?<=xxx)/g, '❤️') //xxx❤️_love_study_1.mp4);
)
//和？<=xxx相反
console.log('xxx_love_study_1.mp4'.replace(/(?<!xxx)/g, '❤️') );

//牛批
let price = '123456789'
let priceReg = /(?!^)(?=(\d{3})+$)/g
console.log(price.replace(priceReg,','));


let mobile = '18379836654'
let mobileReg = /(?=(\d{4})+$)/g

console.log(mobile.replace(mobileReg, '-')) // 183-7983-6654

console.log('123-45678'.replace(/(?<=[\d-]{8})/, ($0) => '-' + $0));

let reg = /((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z\d]{6,12}$/g

console.log(reg.test(`efc4895EC`));

let myReg = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/