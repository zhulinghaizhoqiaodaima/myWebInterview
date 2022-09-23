// 我就直接在完整版的基础上做修改了
// bind 函数实现—终极版
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    let args = [...arguments].slice(1)
    let fn = this

    let Fn = function Fn() {
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
        // 将myBind函数中的prototype指向目标函数的prototype，constructor也需要指向目标函数（也就是手写一个继承
        Fn.prototype = Object.create(fn.prototype)
        Fn.prototype.constructor = fn
        return Fn
    }
}