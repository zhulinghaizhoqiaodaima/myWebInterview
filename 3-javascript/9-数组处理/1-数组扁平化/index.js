let arr = [[1,2,3,[4,5]],1,3]

let newarr = arr.flat(Infinity).sort((a,b)=>a-b)

console.log(newarr);

// 数组去重
let arr1 = [1,2,3,4,4,5,6,6,6]
let arr2 = new Array(...new Set(arr1))
console.log(arr2);