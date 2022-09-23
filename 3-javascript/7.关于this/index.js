//node环境this指向全局为undefined
let name = 'zhulinhia'
function zbt(){
    console.log(this.name);
}
zbt()
