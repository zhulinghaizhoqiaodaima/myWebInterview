let data = [{
    id: 1, pid: 0, name: '沃尔玛', childrens: [
        {
            id: 2, pid: 1, name: '生鲜区', childrens: [
                {id: 4, pid: 2, name: '鱼'},
                {id: 5, pid: 2, name: '牛肉'}
            ]
        },
        {
            id: 3, pid: 1, name: '日用品区', childrens: [
                {id: 6, pid: 3, name: '卫生纸'},
                {id: 7, pid: 3, name: '牙刷'}
            ]
        }
    ]
}];
let newdata = JSON.parse(JSON.stringify(data))
let flatArr = myFlat(newdata);
console.log(flatArr);
console.log(data);
//递归
// function flat(arr) {
//     let newArr = [];//申请新数组
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].childrens) {//childrens存在
//             newArr.push(...flat(arr[i].childrens));
//             //递归，调用flat方法，并将返回结果push到新数组      
//             delete arr[i].childrens;
//         }
//         newArr.push({...arr[i]});//三个点，展开对象，push新对象  
//     }
//     return newArr;//返回数组
// }

function myFlat(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].childrens) {
            newArr.push(...myFlat(arr[i].childrens))
            delete arr[i].childrens;
        }
        newArr.push({...arr[i]});//三个点，展开对象，push新对象  
    }
    return newArr;
}