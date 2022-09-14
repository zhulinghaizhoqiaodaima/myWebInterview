Promise.myAllSettled = (promises)=>{
    return new Promise((resolve,reject)=>{
        let arr = [];
        for (const item of promises) {
            Promise.resolve(item).then(res=>{
                arr.push({status:'fulfilled',val:res})
                if(arr.length === promises.length) resolve(arr)
            }).catch(err=>{
                arr.push({status:'fulfilled',val:err})
                if(arr.length === promises.length) resolve(arr)
            })
            console.log(arr);
        }
        console.log(arr);
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

Promise.myAllSettled([p1,p2,p3,p4,p5]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})