
const arr = ['1', '2', '3'];
// arr.map(parseInt) 的输出是什么？
console.log(arr.map(parseInt));
// 解释：上述代码可以翻译如下
arr.map((item, index) => {
    console.log(item, index);
    return parseInt(item, index)
});
// 如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间超出这个范围，则返回NaN。如果第二个参数是0、undefined和null,则直接忽略
console.log(parseInt('1', 1));

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
}) // marok console.log('settimeout')
async1() //  await async2()   console.log('async1 end')   promise2
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')



/*输出顺序:
script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
*/

