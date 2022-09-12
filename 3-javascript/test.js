const arr = [7, 1, 4, 3, 2,5,6];
// for (const elem of arr) {
//   setTimeout(() => console.log(elem), elem);
// }
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => console.log(arr[i]), arr[i]);
// }

// arr.forEach(elem => {
//     setTimeout(() => console.log(elem), elem);
// });
arr.map(elem=>{
    setTimeout(() => console.log(elem), elem);
})