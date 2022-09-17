function fun(line=readline()){
    let arr = line.split(' ')
    let date = new Date(arr[0]*1)
    let yyyy = date.getFullYear()
    let MM = date.getMonth()
    let dd = date.getDay()
    let HH = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let res = arr[1];
    
    res =  res.replace(/[y]{4}/g, yyyy)
    res =  res.replace(/[M]{2}/g, MM)
    res =  res.replace(/[d]{2}/g, dd)
    res =  res.replace(/[H]{2}/g, HH)
    res =  res.replace(/[m]{2}/g, mm)
    res =  res.replace(/[s]{2}/g, ss)
    console.log(res);
}
fun('1660653659557 yyyy年MM月dd日-HH:mm:ss')