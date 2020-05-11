1.Cookie和Storage的区别

    存储大小：Cookie 4K、Storge5M
    有效期： Cookie拥有有效期，Storge永久存储
    Cookie会发送到服务端，存储在内存中，Storge只存储在浏览器端
    路径: Cookie有路径限制，Storge只存储在域名下
    API：Cookie没有特定的API，Storage有对应的API

2.封装Storage的原因

    Storage本身有API，但只是简单的key/value形式
    Storage只存储字符串，需要人工转换成json对象
    Storage只能一次性清空，不能单个清空
