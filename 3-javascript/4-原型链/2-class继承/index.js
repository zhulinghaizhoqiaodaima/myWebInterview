class parent {
    name = "zhulinhai"
    constructor(age = 18){
        this.age = age;
    }
    toUpperCase(){
        return this.name.slice(0,1).toUpperCase()+ this.name.slice(1)
    }
}
class child extends parent{
    constructor(age = 17){
        super()
        this.age = age;
    }
}

let test = new child(88)
console.log(test.toUpperCase());
console.log(test.age);
