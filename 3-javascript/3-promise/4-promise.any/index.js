Promise.myAny = (promises)=>{
    return new Promise((resolve,reject)=>{
        const arr = [];
        for (const item of promises) {
            Promise.resolve(item).then(res=>{
                resolve(res)
            }).catch(err=>{
                arr.push(err)
                if(Object.keys(arr).length === promises.length) return reject(arr)
            })
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

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1秒')
  }, 3000)
})


Promise.myAny([p5, p4,p2])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p1