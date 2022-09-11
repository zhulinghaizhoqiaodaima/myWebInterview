class Cookie {
    //设置cookie
    setCookie(key, value, time) {
        let expires = new Date(new Date().getTime() + (time * 24 * 60 * 60 * 1000)).toGMTString()//Date对象转换为字符串
        document.cookie = `${key}=${value};expires=${expires};` // expire 设置浏览器期限
    }
    //获取cookie
    getCookie(key) {
        let cookies = (document.cookie).split('; ')
        var temp;
        for (let i = 0; i < cookies.length; i++) {
            temp = cookies[i].split('=')
            if (key == temp[0]) {
                return temp[1]
            }
        }
        return null
    }
    //删除cookie
    deleteCookie(key) {
        let value = this.getCookie(key);
        this.setCookie(key, value, -1)
    }
}
