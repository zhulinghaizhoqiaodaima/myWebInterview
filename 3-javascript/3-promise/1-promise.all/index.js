Promise.MyAll = (promises)=>{
    const arr = [];
    return new Promise((resolve,reject)=>{
        for (const promise of promises) {
            Promise.resolve(promise).then(res=>{
                arr.push(res)
                if(Object.keys(arr).length === promises.length) return resolve(arr) // 全部通过
            }).catch(reject)
        }
    })
}

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('p5 rejected 延时1.5秒')
//   }, 1500)
// })


// 两个失败的 Promise
Promise.MyAll([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected