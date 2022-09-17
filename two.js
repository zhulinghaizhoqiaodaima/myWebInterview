function fun(line = readline()) {
    const arr = line.split(' ')
    let n = arr[0]*1;
    let num = arr[1]*1;
    const cu = new Array(n)
    for (let i = 0; i < cu.length; i++) {
            cu[i] = i;
    }
    let count = 0;
    while(true) {
        let len = cu.length;
        count = (count + num) % len;
        cu.splice(count,1)
        if(cu.length ===1) break
    }
    console.log(cu[0]);
}

fun('3 2')

