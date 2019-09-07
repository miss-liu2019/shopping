// 反向代理
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://106.12.79.128:1234',
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": "/"
        // }
    }));
};