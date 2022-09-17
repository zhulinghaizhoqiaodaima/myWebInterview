
class A {
    constructor() {
        this.name = "AName";
        this.color = ["red", "blue", "orange"];
    }
    // 相当于挂载方法
    nameA() {
        return this.name;
    }
    toLowercase() {
        return "LowerCase";
    }
}
class B {
    constructor() {
        this.name = "BName";
    }
    toUpperCase() {
        return this.name.toUpperCase();
    }
    toLowercase() {
        return "new LowerCase";
    }
}

//继承了A
B.prototype = new A();

var a = new A();
console.log(a.toLowercase());

var b = new B();
console.log(b.name);
console.log(b.toLowercase());
console.log(b.toUpperCase());
  

