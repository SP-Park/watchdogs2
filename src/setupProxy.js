const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'https://118.32.34.39:3000/',
          changeOrigin: true
      })
  )
};