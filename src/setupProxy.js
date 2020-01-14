const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/apk',
    proxy({
      target: 'https://api.izhangchu.com/',
      changeOrigin: true,
      pathRewrite:{ //以后端连接时去掉了api
        "^/apk":""
      }
    })
  );
  app.use(
    '/locapi',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
      // pathRewrite:{ //以后端连接时去掉了api
      //   "^/api":""
      // }
    })
  );
  app.use(
    '/api',
    proxy({
      target: 'http://javaapi.izhangchu.com:8084/zcmessage',
      changeOrigin: true,
      // pathRewrite:{ //以后端连接时去掉了api
      //   "^/specapi":""
      // }
    })
  );
};
