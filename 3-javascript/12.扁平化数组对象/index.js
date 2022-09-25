//扁平数据结构
let data = [{ id: 1, pid: 0, name: '沃尔玛' },
{ id: 2, pid: 0, name: '生鲜区' },
{ id: 3, pid: 1, name: '日用品区' },
{ id: 4, pid: 2, name: '鱼' },
{ id: 5, pid: 2, name: '牛肉' },
{ id: 6, pid: 13, name: '卫生纸' },
{ id: 7, pid: 3, name: '牙刷' },
{ id: 8, pid: 7, name: '电动牙刷' },
{ id: 9, pid: 7, name: '普通牙刷' },
{ id: 10, pid: 4, name: '小鱼干' },

];
let TreeData = GetTreeData(data);
console.log(TreeData);

//循环遍历展开
function GetTreeData(data) {
    let TreeData = [];
    let map = new Map(); //存在id,对应所在的内存地址
    let outputObj, pid;
    for (let i = 0; i < data.length; i++) {
        pid = data[i].pid;
        if (map.has(pid)) {
            //存在，将些信息，加入到对应id=pid的对象上的children
            if (!map.get(pid).childrens)
                map.get(pid).childrens = [];
            let obj = new Object(data[i]);
            map.get(pid).childrens.push(obj);
            //通过pid在Map中查找，并将当前对象，加入到对应的childres属性
            map.set(data[i].id, obj);
            //重点(必须也加入Map)：将当前id及对应的对象，存入Map对象中
        } else if (!map.has(pid) && pid === 0) {
            //这里处理pid不存在，且pid 为0的处理，pid不存在，且不为0的，
            outputObj = new Object(data[i]);
            //加入到要返回的数组中
            TreeData.push(outputObj);
            //将id添加到Map中
            map.set(data[i].id, outputObj);

        }
    }
    return TreeData;    
}
