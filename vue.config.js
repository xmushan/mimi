// 接口代理
module.exports = {
    devServer: {
        //主机
        host: 'localhost',
        //端口
        port: 8080,
        //代理
        proxy: { 
            '/api': {
                //目标 将要代理到哪去
                target: 'http://mall-pre.springboot.cn',
                //是否将主机头的源点更改为目标的URL地址
                changeOrigin: true,
                //转发地址
                pathRewrite: {
                    '/api': ''
                }

            }
        }
    }
}